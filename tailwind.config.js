module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/spectrum-gradient.svg')",
      },
      fontFamily: {
        "PlayFair": ['Playfair Display'],
        "Lato": ['Lato'],
        "Inter" : ['Inter']
      },
    },
  },
  plugins: [],
}
