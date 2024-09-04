module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  container: {
    center: true,
    padding: '2rem',
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

