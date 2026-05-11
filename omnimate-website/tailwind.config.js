/** @type {import('tailwindcss').Config} */
export default {
   corePlugins: {
    container: false,  // Disable Tailwind's container
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: '#F4F7FA',
        dark: '#080A0E',
        surface: '#11151B',
        'surface-light': '#1A2029',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
