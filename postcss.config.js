module.exports = {
  plugins: {
    // postcss-import: {},
    tailwindcss: {},
    autoprefixer: {},
    autoprefixer: {
      flexbox: "no-2009"
    },
    stage: 3,
    features: {
      "custom-properties": false
    }
  }
};
