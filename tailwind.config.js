import { transform } from 'esbuild';

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      keyframes: {
        wall: {
          "0%": {
            transform: "scale(0.7)"
          },
          "100%" : {
            transform: "scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}

