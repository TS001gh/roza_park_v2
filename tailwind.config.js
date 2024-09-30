/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ea2b2a", // A red color similar to the logo
        secondary: "#FFFFFF", // White color from the logo
        "primary-dark": "#ff482c", // A slightly darker red for hover states
        "text-primary": "#333333", // Dark gray for primary text
        "text-secondary": "#666666", // Medium gray for secondary text
      },
      animation: {
        "fade-in-down": "fadeInDown 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "fade-in-left": "fadeInLeft 0.5s ease-out",
        "fade-in-right": "fadeInRight 0.5s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
