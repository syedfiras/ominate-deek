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
        lime: '#C8FF00',
        dark: '#080808',
        surface: '#141414',
        'surface-light': '#1A1A1A',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
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