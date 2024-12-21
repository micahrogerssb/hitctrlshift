/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['RF Tone', 'Helvetica Neue', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
        mono: ['RF Tone', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
        serif: ['RF Tone', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      colors: {
        primary: '#FF2D4C',
        secondary: '#45D3FF',
        'punk-red': '#FF2D4C',
        'substack': '#FF6719',
      },
      animation: {
        'fade-in': 'fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'xl': '24px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}