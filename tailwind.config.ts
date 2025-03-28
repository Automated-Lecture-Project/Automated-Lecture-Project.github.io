import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(10 88% 20%)',
          foreground: 'hsl(0 0% 98%)'
        },
        secondary: {
          DEFAULT: 'hsl(220 13% 13%)',
          foreground: 'hsl(0 0% 98%)'
        },
        muted: {
          DEFAULT: 'hsl(220 13% 20%)',
          foreground: 'hsl(0 0% 70%)'
        },
        accent: {
          DEFAULT: 'hsl(10 50% 30%)',
          foreground: 'hsl(0 0% 98%)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Oswald', 'sans-serif']
      },
      borderRadius: {
        lg: '0.25rem',
        md: '0.125rem',
        sm: '0.0625rem'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
        'fade-in-right': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-10px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)' 
          },
        },
        'tactical-fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)' 
          },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
        'tactical-fade-in': 'tactical-fade-in 0.5s ease-out forwards',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
