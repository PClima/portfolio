//npx tailwindcss -i src/input.css -o dist/output.css --watch --minify

module.exports = {
  content: [    
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
