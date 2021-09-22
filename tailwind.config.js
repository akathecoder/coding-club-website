module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: '#000',
                brand: '#845EF7',
                primary: '#0E0E10',
                secondary: '#8A8F98',
                gray: '#252729',
                accent1: '#FAFAFA',
                accent2: '#EAEAEA',
                accent3: '#999999',
                accent4: '#888888',
                accent5: '#666666',
                accent6: '#444444',
                accent7: '#333333',
                accent8: '#111111',
            },
            animation: {},
            keyframes: {},
        },
    },
    important: true,
    variants: {
        extend: {},
    },
    plugins: [],
};
