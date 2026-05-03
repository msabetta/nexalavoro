import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#060b14',
        secondary: '#0d1525',
        card: '#111c30',
        'card-hover': '#162238',
        'text-primary': '#e8edf5',
        'text-secondary': '#b0bfd1',
        'text-muted': '#7a8ba3',
        cyan: '#00e5ff',
        blue: '#4d7cff',
        purple: '#a855f7',
        green: '#22d3a0',
        amber: '#f59e0b',
        rose: '#f43f5e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;