
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
        'advantages-background': "url('/interior.jpg')",
        'moreCars-background': "url('/morecars.png')",
        'hero-background': "url('/pc.jpg')",
        "contact-background": "url('/lixiang.jpg')"
      },

      screens: {
        'lg': '1060',
      }
      
    },
  },
  plugins: [],
};
