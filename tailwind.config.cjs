module.exports = {
  mode: "jit",
  content: ["./src/**/*.vue", "index.php", "header.php", "footer.php", "home.php", "contacts.php", "about.php", "404.php", "inc/**/*.php"],
  theme: {
    content: {},
    // container: {
    //   center: true,
    //   padding: "4rem",
    // },
    /*===================================<Breakpoints>===================================*/
    screens: {
      md4: "479.98px",
      // => @media (min-width: 479.98px) { ... }
      md3: "767.98px",
      // => @media (min-width: 767.98px) { ... }
      md2: "991.98px",
      // => @media (min-width: 991.98px) { ... }
      lg: "1199.98px",
      // => @media (min-width: 1199.98px) { ... }
      xl: "1439.98px",
      // => @media (min-width: 1439.98px) { ... }
    },
    /*===================================<Colors>===================================*/
    colors: {
      inherit: "inherit",
      primary: {
        main: "#00aec5",
        shadow: "#008B9E",
      },
      turquoise: "#40E2E2",
      blue: "#6DC8FF",
      purple: "#AD86F5",
      red: "#E96283",
      orange: "#FA905E",
      yellow: "#FCCD20",
      neutral: {
        10: "#FFFFFF",
        20: "#eeeeef",
        30: "#e8e8e9",
        40: "#dcddde",
        50: "#c3c4c6",
        60: "#a4a5a9",
        70: "#808288",
        80: "#6f7279",
        90: "#555860",
        100: "#1c202c",
      },
    },
    /*===================================<Extend>===================================*/
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {},
      borderRadius: {},
      borderWidth: {},
      gap: {},
      outlineWidth: {},
      maxWidth: {},
      minWidth: {},
      minHeight: {},
      fontSize: {},
      letterSpacing: {},
      dropShadow: {},
      backgroundImage: {},
    },
    /*===================================<Plugins>===================================*/
  },
  plugins: [],
};