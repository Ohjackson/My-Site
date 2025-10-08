import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useMemo } from 'react';

import { useThemeStore } from '@/features/theme/theme.store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5
    }
  }
});

const ThemeBridge = ({ children }: PropsWithChildren) => {
  const mode = useThemeStore((state) => state.mode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#60A5FA' : '#2563EB'
          }
        },
        shape: {
          borderRadius: 12
        },
        typography: {
          fontFamily: 'var(--app-font-family, Inter, Pretendard, Noto Sans JP, system-ui, -apple-system, BlinkMacSystemFont, sans-serif)'
        }
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export const AppProviders = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <ThemeBridge>{children}</ThemeBridge>
  </QueryClientProvider>
);
