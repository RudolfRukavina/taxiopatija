module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
theme: {
    extend: {
        fontFamily: {
             heading: ['Gluten', 'sans-serif'],
             body: ['Gluten', 'sans-serif']
        }
    }
},
  plugins: [
    require('flowbite/plugin')
  ],
}