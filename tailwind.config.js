module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: '#050C2D',
                primary: '#0090C1',
                accent: '#38AECC',
                secondary: '#FBFFF1',
                other: '#515751',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
