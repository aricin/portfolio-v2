/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'galaxy-gradient': `linear-gradient(#14153b, #000000),
                            radial-gradient(circle at 50% 50%, #0d0735 0%, transparent 70%),
                            radial-gradient(circle at 40% 45%, #1b1b3a 0%, transparent 60%),
                            radial-gradient(circle at 60% 55%, #2b3763 0%, transparent 50%)`
      },
    },
  },
  plugins: [],
}
