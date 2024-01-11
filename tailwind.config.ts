/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 5s linear reverse infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    },
    colors: {
      black: "#010101",
      white: "#fcfcfc",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: '#122642',
        secondary: '#1EABE3',
        accent: '#0f4b9e',
        text: '#252525',
        white: '#FCFCFC',
        black: '#010101',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: '#f9f9f9',
        foreground: "hsl(var(--foreground))",

      },
      borderRadius: {
        lg: "10px",
        md: "6px",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'hero': 'linear-gradient(to bottom, rgb(0,0,0), rgba(0,0,0,50%))',
        'contact-gradient': 'linear-gradient(to bottom, rgb(0,0,0) 10%, rgba(0,0,0,70%))',
        'black-gradient': 'linear-gradient(to bottom, rgb(0,0,0) 10%, rgba(0,0,0,0%))',
        'solutions': 'linear-gradient(to bottom, rgb(18,38,66), rgb(113,75,103))'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
