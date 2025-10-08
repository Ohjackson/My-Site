import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-60 disabled:pointer-events-none';
const variantStyles = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-surface text-text border border-border hover:bg-surface/80',
    destructive: 'bg-primary-700 text-white hover:bg-primary-800'
};
const cx = (...values) => values.filter(Boolean).join(' ');
export const Button = ({ variant = 'primary', fullWidth = false, icon, className, children, ...props }) => {
    return (_jsxs("button", { className: cx(baseStyles, variantStyles[variant], fullWidth && 'w-full', className), ...props, children: [icon ? _jsx("span", { "aria-hidden": true, className: "inline-flex items-center justify-center", children: icon }) : null, _jsx("span", { children: children })] }));
};
