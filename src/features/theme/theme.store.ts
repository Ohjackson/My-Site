import { create } from 'zustand';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
}

const STORAGE_KEY = 'my-site:theme';

const getInitialMode = (): ThemeMode => {
  return 'light';
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  mode: getInitialMode(),
  setMode: (mode) => {
    set({ mode });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, mode);
      document.documentElement.classList.toggle('dark', mode === 'dark');
    }
  },
  toggle: () => {
    const next = get().mode === 'dark' ? 'light' : 'dark';
    get().setMode(next);
  }
}));

export const initializeTheme = () => {
  const mode = useThemeStore.getState().mode;
  if (typeof window !== 'undefined') {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }
};
