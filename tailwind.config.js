module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Steel Blue
        primary: {
          50: "#F0F4F8", // steel-blue-50
          100: "#D9E2EC", // steel-blue-100
          200: "#BCCCDC", // steel-blue-200
          300: "#9FB3C8", // steel-blue-300
          400: "#829AB1", // steel-blue-400
          500: "#627D98", // steel-blue-500
          600: "#486581", // steel-blue-600
          700: "#334E68", // steel-blue-700
          800: "#1E3A5F", // steel-blue-800
          900: "#102A43", // steel-blue-900
          DEFAULT: "#1E3A5F", // steel-blue-800
        },
        
        // Secondary Colors - Gray
        secondary: {
          50: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          300: "#CBD5E0", // gray-300
          400: "#A0AEC0", // gray-400
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-700
          800: "#1A202C", // gray-800
          900: "#171923", // gray-900
          DEFAULT: "#2D3748", // gray-700
        },

        // Accent Colors - Safety Orange
        accent: {
          50: "#FFF5F0", // orange-50
          100: "#FFEBE0", // orange-100
          200: "#FFD6CC", // orange-200
          300: "#FFB8A3", // orange-300
          400: "#FF9A7A", // orange-400
          500: "#FF6B35", // orange-500
          600: "#E55A2B", // orange-600
          700: "#CC4A21", // orange-700
          800: "#B33A17", // orange-800
          900: "#992A0D", // orange-900
          DEFAULT: "#FF6B35", // orange-500
        },

        // Background Colors
        background: "#FAFBFC", // slate-50
        surface: "#F1F5F9", // slate-100

        // Text Colors
        text: {
          primary: "#1A202C", // gray-800
          secondary: "#4A5568", // gray-600
        },

        // Status Colors
        success: {
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          500: "#38A169", // green-500
          600: "#2F855A", // green-600
          DEFAULT: "#38A169", // green-500
        },
        
        warning: {
          50: "#FFFFF0", // yellow-50
          100: "#FEFCBF", // yellow-100
          500: "#ECC94B", // yellow-500
          600: "#D69E2E", // yellow-600
          DEFAULT: "#D69E2E", // yellow-600
        },
        
        error: {
          50: "#FED7D7", // red-100
          100: "#FEB2B2", // red-200
          500: "#E53E3E", // red-500
          600: "#C53030", // red-600
          DEFAULT: "#E53E3E", // red-500
        },

        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // gray-200
          light: "#F7FAFC", // gray-50
        },
      },
      
      fontFamily: {
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'system-ui', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elevation': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}