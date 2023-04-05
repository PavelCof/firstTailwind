/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '798px',
      lg: '976px',
      xl: '1680px',
    },      

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borders:{
        '1':'1ram'
      } ,  
      colors: {
            'blue': '#1fb6ff',
            'blue01': '#1fbfff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'red1':'#bb0d3540',
            'red2':'#bb0d35a1',
            'sitered':'#bb0d35',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'graylight': '#d3dfff',
            'white': '#fff',
          },    
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}