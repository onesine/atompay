/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            keyframes: {
                rippleAni: {
                    "0%, 100%": { transform: "translate(0px, 0px)" },
                    "33%": { transform: "translate(5px, -5px)" },
                    "66%": { transform: "translate(-5px, 5px)" }
                },
                ripple2Ani: {
                    "0%, 100%": { transform: "translate(0px, 0px)" },
                    "33%": { transform: "translate(-5px, -5px)" },
                    "66%": { transform: "translate(5px, 5px)" }
                }
            },
            animation: {
                ripple: "rippleAni 3s linear infinite",
                ripple2: "ripple2Ani 4s linear infinite"
            }
        }
    },
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")]
};
