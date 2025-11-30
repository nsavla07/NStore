import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e8ecff',
          200: '#cfd8ff',
          300: '#aab8ff',
          400: '#7f92ff',
          500: '#4c63ff',
          600: '#3a4dce',
          700: '#2f3fa6',
          800: '#283683',
          900: '#1f2a65'
        }
      }
    }
  },
  plugins: []
}

export default config
