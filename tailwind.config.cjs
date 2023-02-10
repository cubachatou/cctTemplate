module.exports = {
  mode: "jit",
  content: ["./src/**/*.vue", "index.php", "header.php", "footer.php", "home.php", "contacts.php", "about.php", "404.php", "portfolio.php", "blog.php", "single-article.php", "single-case.php", "inc/**/*.php"],
  theme: {
    content: {},
    container: {
      center: true,
      padding: {
        mmd1: '15rem',
        mmd2: '4rem',
        mmd3: '4rem',
        mmd4: '2.5rem',
      },
    },
    /*===================================<Breakpoints>===================================*/
    screens: {
      mmd4: "414.98px",
      mmd3: "767.98px",
      mmd2: "1023.98px",
      mmd1: "1439.98px",
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