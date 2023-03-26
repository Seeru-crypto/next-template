const breakpoints = {
    xs: "320px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
};

const red = {
    $300: '#FCA5A5',
    $400: '#F87171',
    $500: '#EF4444',
    $600: '#DC2626',
    $700: '#B91C1C',
};

const gray = {
    $50: '#fffffe',
    $100: '#f1f5f9',
    $200: '#e2e8f0',
    $300: '#cbd5e1',
    $400: '#94a3b8',
    $500: '#64748b',
    $600: '#475569',
    $700: '#334155',
    $800: '#1e293b',
    $900: '#0f172a',
    $950: '#16161a'
};

export const baseTheme = {
    breakpoints,
};

export const dayTheme = {
    ...baseTheme,
    background: gray.$50,
    text: "#333333",
};

export const nightTheme = {
    ...baseTheme,
    background: gray.$50,
    text: "#ffffff",
};

