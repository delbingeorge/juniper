/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            "primary-white": "#fff",
            "primary-blue": "#0066FF",
            "primary-grey": "#F3F6F8",
            "blue-alpha": "#3083ff",
            "primary-red": "red",
        },
        fontFamily: {
            Poppins: ["Poppins", "sans-serif"],
        },
        backgroundImage: {
            "hero-pattern": "url('../src/media/images/line-in-motion.svg')",
        },
    },
    plugins: [],
};
