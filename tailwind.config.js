/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "system-ui"],
    },
    extend: {
      backgroundImage: {
        "background-image":
          "url('https://images.unsplash.com/photo-1727976971228-ee2e309c90c1?q=80&w=1623&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      animation: {
        move: "move 3000ms linear infinite",
      },
      keyframes: {
        move: {
          "0%,100%": { left: "0" },
          "50%": { left: "calc(100% - 100px)" },
        },
      },
      plugins: [],
    },
  },
};
