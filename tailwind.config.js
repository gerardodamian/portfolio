module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            mobile: "360px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            colors: {
                body: "#17171F",
                "selected-text": "#A3A3FF",
                theme: "#3F3FFF",
                nav: "#404053",
                secondary: "#9191A4",
                badge: "#3F3F51",
                "input-border": "#565666",
                input: "#2A2A35",
            },
            fontFamily: {
                poppins: ["'Poppins'", "sans-serif"],
                expletus: ["'Expletus Sans'", "sans-serif"],
            },
        },
    },
    plugins: [],
};
