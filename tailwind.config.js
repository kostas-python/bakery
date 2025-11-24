// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-gold': '#B8860B',
        'luxury-gold-light': '#FFD700',
        'luxury-brown': '#3E2723',
        'luxury-cream': '#FFF8E1',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float-in': 'floatIn 1s ease-out forwards',
        'slide-left': 'slideInLeft 1s ease-out forwards',
        'scale-in': 'scaleIn 1s ease-out forwards',
        'gold-shimmer': 'goldShimmer 3s ease infinite',
      },
      keyframes: {
        floatIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        goldShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B8860B 0%, #FFD700 25%, #B8860B 50%, #FFD700 75%, #B8860B 100%)',
      }
    },
  },
  plugins: [],
}