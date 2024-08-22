/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'Roboto-serif': ['Roboto-serif', 'serif'],
        'DM-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        dark: '#0C0C0C',
        lightGreen: '#64CCC5',
        offWhite: '#FBFBFB',
        lightGray: '#F4F4F4',
        lightBlack: '0C0C0C',
      },
      borderRadius: {
        '2.5xl': '20px',
      },
      lineHeight: {
        40: '40px',
        45: '45px',
        52: '52px',
        64: '64px',
        74: '74px',
      },
      spacing: {
        18: '72px',
        23: '92px',
        38: '152',
        39: '156px',
        45: '180px',
        60: '240px',
        74: '298px',
      },
    },
  },
  plugins: [],
};
