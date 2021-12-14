module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "title-opacity": "custom-opacity 3.5s ease-in",
        "subtitle-opacity": "custom-opacity 1.5s ease-in backwards 2s",
        "btn-banner-opacity": "custom-opacity 1.5s ease-in backwards 3s",
        "video-opacity": "video-opacity 3.25s linear forwards",
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
      backgroundImage: (theme) => ({
        "banner-last-frame":
          "url('https://dynamicdevscommon.blob.core.windows.net/web/banner-last-frame.png')",
      }),
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
        animation: "345px",
      },
      padding: {
        38: "152px",
        45: "180px",
      },
      width: {
        122.5: "490px",
        animation: "345px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
