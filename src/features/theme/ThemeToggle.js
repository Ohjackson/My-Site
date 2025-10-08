import { jsx as _jsx } from "react/jsx-runtime";
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from './theme.store';
export const ThemeToggle = () => {
    const { t } = useTranslation();
    const mode = useThemeStore((state) => state.mode);
    const toggle = useThemeStore((state) => state.toggle);
    const isDark = mode === 'dark';
    return (_jsx(Tooltip, { title: t('theme.toggle'), placement: "bottom", arrow: true, children: _jsx(IconButton, { onClick: toggle, color: isDark ? 'primary' : 'default', "aria-label": t('theme.toggle'), sx: {
                backgroundColor: isDark ? 'rgba(37, 99, 235, 0.12)' : 'rgba(15, 23, 42, 0.04)',
                transition: 'background-color 0.2s ease',
                '&:hover': {
                    backgroundColor: isDark ? 'rgba(37, 99, 235, 0.2)' : 'rgba(15, 23, 42, 0.1)'
                }
            }, children: isDark ? _jsx(LightModeOutlined, { fontSize: "small" }) : _jsx(DarkModeOutlined, { fontSize: "small" }) }) }));
};
