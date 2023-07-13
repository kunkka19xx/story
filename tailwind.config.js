/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{tsx}',
    './src/pages/**/*.{tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    }
  },
  plugins: [],
}

