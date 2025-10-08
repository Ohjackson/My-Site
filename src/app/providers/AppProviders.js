import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useThemeStore } from '@/features/theme/theme.store';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5
        }
    }
});
const ThemeBridge = ({ children }) => {
    const mode = useThemeStore((state) => state.mode);
    const theme = useMemo(() => createTheme({
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
    }), [mode]);
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), children] }));
};
export const AppProviders = ({ children }) => (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(ThemeBridge, { children: children }) }));
