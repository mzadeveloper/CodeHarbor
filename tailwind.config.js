module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
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

