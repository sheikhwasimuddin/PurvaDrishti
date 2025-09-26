/** @type {import('tailwindcss').Config} */
export default {
  // This content array now correctly scans ALL of your component folders.
  // This is the permanent fix for the "No utility classes" warning.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
