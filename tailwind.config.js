/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
   backgroundImage: {
      radial: 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      'radial-at-b':
          'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
      
    },
    },
  },
  plugins: [],
}
