const em = (size, base = 16) => {
  return size / base + "em";
};

const object = (limit, base = 16) => {
  return {
    ...[...Array(limit + 1)].reduce((object, _, index) => {
      object[`${index}`] = `${index / base}rem`;
      return object;
    }, {}),
  };
};

module.exports = {
  content: ["src/**/*.{html,js,jsx}"],
  theme: {
    spacing: object(200),
    colors: {
      default: "#1a1a1a",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["游ゴシック体", "YuGothic", "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "sans-serif"],
    },
    fontSize: object(80),
    fontWeight: {
      bold: 700,
      medium: 500,
      normal: 400,
      light: 300,
    },
    lineHeight: {
      xl: 2,
      lg: 1.75,
      md: 1.5,
      sm: 1.2,
      xs: 1,
    },
    letterSpacing: {
      xl: "0.2em",
      lg: "0.1em",
      md: "0.06em",
      sm: "0",
    },
    borderRadius: {
      DEFAULT: "0.625rem",
    },
    extend: {
      screens: {
        pc: { raw: `all and (max-width: ${em(1365)})` },
        tb: { raw: `only screen and (max-width: ${em(1023)})` },
        sp: { raw: `only screen and (max-width: ${em(767)})` },
        print: { raw: "print" },
      },
    },
  },
  plugins: [
    require("./plugins/tailwind-vw-calc.js")({
      extend: {},
    }),
    require("./plugins/tailwind-animation-delay.js"),
  ],
};
