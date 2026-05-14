/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#4F46E5', // Indigo
        'brand-accent': '#10B981',  // Emerald Green
        'pack-background': '#F9FAFB', // Light Gray
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}