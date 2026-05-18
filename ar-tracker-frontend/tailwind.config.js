/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#5f6b7a",
        panel: "#f7f9fc",
        line: "#dbe3ef",
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          500: "#326fe8",
          600: "#245bd0",
          700: "#1f47a6"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 32, 51, 0.08)"
      }
    }
  },
  plugins: []
}
