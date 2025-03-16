import { title } from "framer-motion/client";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Roboto Mono"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
