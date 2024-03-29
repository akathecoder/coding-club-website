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
            // used for box size of event-item container
            width: {
                'event-base': '400px',
                'event-sm': '350px',
            },
            height: {
                'content-section-mobile': 'calc(100% - 50px)',
            },
            // s-800, will be active for screen width more than 800px
            screens: {
                's-800': '800px',
                'projects-3': '1400px',
                '3xl': '1600px',
            },
        },
    },
    important: true,
    variants: {
        extend: {},
    },
    plugins: [],
};
