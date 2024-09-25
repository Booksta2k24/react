
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                custom: ['Sacramento', 'sans-serif']
            },
            colors: {
                primary: "#ffffff",
                primary_dark: "#000",
                secondary: "#5841EE",
            },
            borderRadius: {
                custom: "40px"
            },
            screens: {
                'xxs': '320px', 
                'xs': '280px',  
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',  
            },
            boxShadow: {
                custom: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
            },
        },
    },
};
