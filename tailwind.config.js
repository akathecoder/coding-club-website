module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                brand: '#845EF7',
                sidebar: '#0E0E10',
                secondary: '#8A8F98',
                gray: '#252729',
                accent: {
                    100: '#FAFAFA',
                    200: '#EAEAEA',
                    300: '#999999',
                    400: '#888888',
                    500: '#666666',
                    600: '#444444',
                    700: '#333333',
                    800: '#111111',
                },
            },
            height: {
                navbar: '72px',
            },
            fontFamily: {
                display: ['Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
