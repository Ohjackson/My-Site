import { create } from 'zustand';
const STORAGE_KEY = 'my-site:theme';
const getInitialMode = () => {
    if (typeof window === 'undefined') {
        return 'light';
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
        return stored;
    }
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
};
export const useThemeStore = create((set, get) => ({
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
