import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        border: 'hsl(214 32% 20%)',
        input: 'hsl(214 32% 20%)',
        ring: 'hsl(181 100% 50%)',
        background: 'hsl(220 22% 6%)',
        foreground: 'hsl(210 40% 96%)',
        primary: {
          DEFAULT: 'hsl(181 100% 50%)',
          foreground: 'hsl(220 22% 6%)'
        },
        muted: {
          DEFAULT: 'hsl(216 16% 14%)',
          foreground: 'hsl(215 20% 70%)'
        },
        card: {
          DEFAULT: 'hsl(216 18% 10%)',
          foreground: 'hsl(210 40% 96%)'
        }
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    }
  },
  plugins: []
} satisfies Config;
