/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "sv-white": "#F5F5F5",
        "sv-beige": "#F5E3C8",
        "sv-red": "#FF6F61",
        "sv-green": "#B9DA53",
        "sv-blue": "#84C5F5",
      },
      fontFamily: {
        "sans": ["Open Sans", "sans-serif"],
        "heading": ["Playfair", "sans-serif"],
      },
    }
  },
  plugins: []
};