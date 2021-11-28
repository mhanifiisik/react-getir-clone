module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-purple": "#4c3398",
        "primary-home-purple": "#5d3ebc",
        "primary-yellow": "#ffd300",
        "primary-gray-dark": "#3e3e3e",
        "primary-header-gray": "#dbdbff",
      },
      backgroundImage: (theme) => ({
        "mobile-app":
          "url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
