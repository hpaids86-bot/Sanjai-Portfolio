/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmBeige: '#F3EBDD',
        softCream: '#FAF7EF',
        lightBeige: '#E9E2D2',
        sageGreen: '#A8C3A0',
        mintGreen: '#C7DFC5',
        deepForest: '#17231A',
        forestCard: '#26382B',
        footerBg: '#0F1812',
        oliveGray: '#59645A',
        darkSageGray: '#647066',
        borderSage: '#CBD5C5',
        neonLime: '#C8FF3D',
        electricMint: '#39FF88',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-subtle': '0 0 20px rgba(200, 255, 61, 0.18)',
        'neon-hover': '0 0 30px rgba(57, 255, 136, 0.3)',
        'soft-card': '0 10px 30px -10px rgba(23, 35, 26, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
