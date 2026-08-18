/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        wastu: {
          50: "#F2F7F4",
          100: "#E1ECE5",
          200: "#C6DACE",
          300: "#9DBEAA",
          400: "#6D9A80",
          500: "#477A5D",
          600: "#356149",
          700: "#294C3A",
          800: "#223D30",
          900: "#1D3329",
          950: "#0D1D16",
        },

        charcoal: {
          900: "#111412",
          950: "#090B0A",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 20px 60px rgba(0, 0, 0, 0.12)",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
      },

      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "float-slow": "float 5s ease-in-out infinite",
      },
    },
  },

  plugins: [],
}