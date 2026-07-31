/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        matte: "#050505",
        surface: "#0A0A0A",
        neon: "#00FF66",
        borderDark: "#1A1A1A",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}