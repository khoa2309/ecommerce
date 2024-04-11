/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "641px",

                md: "769px",

                lg: "1025px",

                xl: "1281px",

                "2xl": "1537px",
            },
            backgroundImage: {
                gradient:
                    "linear-gradient(1deg,hsl(173deg 100% 37%) 0%,hsl(179deg 100% 36%) 19%,hsl(185deg 100% 38%) 27%,hsl(192deg 100% 42%) 34%,hsl(198deg 100% 45%) 41%,hsl(203deg 100% 49%) 47%,hsl(206deg 100% 50%) 53%,hsl(209deg 100% 50%) 59%,hsl(212deg 100% 50%) 66%,hsl(217deg 100% 50%) 73%,hsl(223deg 100% 50%) 81%,hsl(269deg 100% 47%) 100%)",
                gradientReverse:
                    "linear-gradient(181deg,hsl(173deg 100% 37%) 0%,hsl(179deg 100% 36%) 19%,hsl(185deg 100% 38%) 27%,hsl(192deg 100% 42%) 34%,hsl(198deg 100% 45%) 41%,hsl(203deg 100% 49%) 47%,hsl(206deg 100% 50%) 53%,hsl(209deg 100% 50%) 59%,hsl(212deg 100% 50%) 66%,hsl(217deg 100% 50%) 73%,hsl(223deg 100% 50%) 81%,hsl(269deg 100% 47%) 100%)",
            },
            height: {
                header: "12rem",
            },
            colors: {
                main_white: "#f1f1f1",
                gray: "#333",
                heading_black: "#999",
                primary: "#0086ff",
                border_white: "#ccc",
                fade: "rgba(255, 255, 255, 0.7)",
                footer: "#737373",
                sortbar_color: "rgba(0, 0, 0, 0.04)",
                heart: "#dddddd",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            backgroundPosition: {
                card_img: "top center",
            },
            keyframes: {
                fadeIn: {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": { opacity: "1" },
                },
                zoomIn: {
                    "0%": {
                        opacity: "0",
                        transform: "scale(0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "scale(1)",
                    },
                },
                scrollDown: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-100%)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                countdown: {
                    "20%": {
                        width: "100%",
                    },

                    "100%": {
                        width: "0%",
                    },
                },

                slide_show: {
                    "0%": {
                        transform: "translateX(100%)",
                    },

                    "40%": {
                        transform: "translateX(-10%)",
                    },

                    "80%": {
                        transform: "translateX(0%)",
                    },

                    "100%": {
                        transform: "translateX(-10px)",
                    },
                },

                slide_hide: {
                    "0%": {
                        transform: "translateX(-10px)",
                    },

                    "40%": {
                        transform: "translateX(0%)",
                    },

                    "80%": {
                        transform: "translateX(-10%)",
                    },

                    "100%": {
                        transform: "translateX(110%)",
                    },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-in-out",
                zoomIn: "zoomIn 0.25s ease-in",
                scrollDown: "scrollDown 0.3s linear",
                countdown: "countdown 3s linear forwards",
                slide_show: "slide_show 1s ease forwards",
                slide_hide: "slide_hide 1s ease forwards",
            },
        },
    },
    plugins: [],
    darkMode: "selector",
};
