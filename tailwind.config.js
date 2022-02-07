module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "title-opacity": "custom-opacity 3.5s ease-in",
        "subtitle-opacity": "custom-opacity 1.5s ease-in backwards 2s",
        "btn-banner-opacity": "custom-opacity 1.5s ease-in backwards 3s",
        "video-opacity": "video-opacity 3.25s linear forwards",
      },
      backgroundImage: {
        "qurable-pattern-small": "url('/img/bg-texture-2-small.png')",
      },
      keyframes: {
        "custom-opacity": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "video-opacity": {
          "0%, 99%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      colors: {
        primary: "var(--primary)",
        danger: "var(--danger)",
        green: "var(--green)",
        turquoise: "var(--turquoise)",
        blue: "var(--blue)",
        purple: "var(--purple)",
        lemon: "var(--lemon)",

        text: "var(--text)",

        bg1: "var(--bg1)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",

        gray1: "var(--gray1)",
        gray2: "var(--gray2)",
        gray3: "var(--gray3)",
      },
      height: {
        62: "248px",
        87: "332px",
        animation: "345px",
        100: "400px",
        112: "448px",
      },
      margin: {
        22: "88px",
        25: "100px",
      },
      minWidth: { 90: "360px" },
      padding: {
        38: "152px",
        45: "180px",
      },
      rotate: {
        60: "60deg",
      },
      width: {
        30: "120px",
        50: "200px",
        58: "232px",
        62: "248px",
        route: "360px",
        122.5: "490px",
        animation: "345px",
        222: "890px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
