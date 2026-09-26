/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080A',
          900: '#0F0F12',
          800: '#16161A',
          700: '#1E1E23',
        },
        line: 'rgb(255 255 255 / 0.08)',
        fg: {
          DEFAULT: '#F5F5F4',
          muted: 'rgb(245 245 244 / 0.5)',
          body: '#BDBDBA',
          subtle: '#7A7A78',
        },
        accent: {
          400: '#FFD89A',
          500: '#FFB547',
          600: '#E69A2E',
        },
        success: '#3DDC97',
        info: '#7CC4FF',
        paper: {
          DEFAULT: '#F5F5F4',
          ink: '#08080A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"General Sans"', '"Inter Tight"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
};
