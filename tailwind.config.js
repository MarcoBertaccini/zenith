/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0C0E',
          900: '#131417',
          800: '#1C1E22',
          700: '#26282E',
        },
        line: '#2A2D33',
        fg: {
          DEFAULT: '#EDEDEF',
          muted: '#9A9CA3',
          subtle: '#6B6D74',
        },
        accent: {
          400: '#7CB3B8',
          500: '#5B9AA0',
          600: '#457780',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
