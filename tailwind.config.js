/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        meteor: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: 1 },
          '100%': { transform: 'translateX(500px) translateY(500px)', opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'meteor': 'meteor linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-delay-1': 'fadeIn 0.6s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fadeIn 0.6s ease-out 0.4s forwards',
        'fade-in-delay-3': 'fadeIn 0.6s ease-out 0.6s forwards',
        'fade-in-delay-4': 'fadeIn 0.6s ease-out 0.8s forwards',
        'fade-in-delay-5': 'fadeIn 0.6s ease-out 1s forwards',
        'fade-in-delay-6': 'fadeIn 0.6s ease-out 1.2s forwards',
      },
    },
  },
  plugins: [],
}