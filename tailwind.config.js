/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,ts}"] /* para q sepa donde buscar el css */,
   safelist: ["bg-blue-400", "bg-green-400", "bg-red-400"],
   theme: {
      extend: {},
   },
   plugins: [],
};
