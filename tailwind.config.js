/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#002855", // Azul Marino
        secondary: "#008751", // Verde Esmeralda
        'aeri-azul-marino': '#004080',
        'aeri-azul-real': '#1e6df9',
        'aeri-cyan-vivo': '#00a0e1',
        'aeri-blanco-puro': '#ffffff',
        'aeri-celeste': '#39c3ef',
        'aeri-cobalto': '#034c8c',
        'aeri-azul-cielo': '#05aff2',
        'aeri-turquesa': '#3dd1f2',
        'aeri-azul-medianoche': '#023e73',
        'aeri-azul-ceruleo': '#049dd9',
        'aeri-azul-pacifico': '#04b2d9',
        'aeri-azul-dodger': '#117cd9',
        'aeri-azul-nube': '#9bdaf2',
        'aeri-azul-aciano': '#63b0f2',
        'aeri-azul-electrico': '#1660d7',
        'aeri-negro-suave': '#0d0d0d',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
