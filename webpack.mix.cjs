const mix = require("laravel-mix");
const path = require("path");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
require("mix-tailwindcss");
require("laravel-mix-clean");
require("svgo");

mix
  .alias({
    "@": path.join(__dirname, "/src"),
    "@img": path.join(__dirname, "/images"),
  })
  .js(`src/js/app.js`, `dist/js`)
  .vue()
  .sass(`src/scss/style.scss`, `dist/css`)
  .tailwind()
  .webpackConfig({
    plugins: [
      // Create an svg sprite with icons
      new SVGSpritemapPlugin(
        "images/svg/*.svg", // Relative path to webpack.mix.js
        {
          output: {
            filename: "images/svgMap.svg", // Relative path to "dist/"
            svg4everybody: false, // Disable plugin "SVG for Everybody"
            svg: {
              sizes: false, // Removing inline dimensions of svg
            },
            chunk: {
              keep: true, // Turn it on to prevent errors during the building due to the lack of svgMap.js
            },
            svgo: {
              plugins: [{
                  name: "removeStyleElement", // Removing tags <style> from svg
                  overrides: {
                    removeStyleElement: true,
                  },
                },
                {
                  name: "removeAttrs",
                  params: {
                    attrs: ["fill", "stroke"], // Removing some attributes to control styles from CSS
                  },
                },
              ],
            },
          },
          sprite: {
            prefix: "icon-", // The prefix for the id of the icons in the sprite will look like 'icon-$filename'
            generate: {
              title: false, // Do not add <title> tags to the sprite
            },
          },
        }
      ),
    ],
  })
  .browserSync({
    proxy: "mavericks.site",
    files: ["dist/css", "dist/js", "images", "*.php", "inc"],
  })