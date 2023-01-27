const mix = require("laravel-mix");
const path = require("path");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");
require("mix-html-builder");
require("mix-tailwindcss");
require("laravel-mix-replace-in-file");
require("laravel-mix-clean");
require("laravel-mix-imagemin");
require("laravel-mix-webp");
require("svgo");

mix
  .alias({
    "@": path.join(__dirname, "/src"),
    "@img": path.join(__dirname, "/images"),
  })
  .setPublicPath("dist")
  .options({
    processCssUrls: false,
  })
  .js(`src/assets/js/app.js`, `dist/js`)
  .vue()
  .sass(`src/assets/scss/style.scss`, `dist/css`)
  .tailwind()
  .webpackConfig({
    plugins: [
      // Create an svg sprite with icons
      new SVGSpritemapPlugin(
        "src/assets/images/svg/*.svg", // Relative path to webpack.mix.js
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
            prefix: "", // The prefix for the id of the icons in the sprite will look like 'icon-$filename'
            generate: {
              title: false, // Do not add <title> tags to the sprite
            },
          },
        }
      ),
      // Copy images from "src" directory to "dist" directory
      new CopyWebpackPlugin({
        patterns: [{
          from: "src/assets/images", // Relative path to catalog with webpack.mix.js
          to: "images", // Relative path to "dist/"
          globOptions: {
            ignore: ["**/svg/**"], // Ignoring the directory with icons
          },
        }, ],
      }),
    ],
  })
  // .copy(`src/assets/fonts`, `dist/fonts`)
  // .copy(`src/assets/favicons`, `dist/favicons`)
  // .copy(`src/assets/videos`, `dist/videos`)
  .browserSync({
    // server: {
    // 	baseDir: `dist`,
    // },
    proxy: "mavericks.test",
    files: [`src/assets/**/*.html`, `src/assets/**/*.php`, `src/assets/js`, `src/assets/**/*.htm`, `src/assets/img/**/*.*`, '*.php'],
  })
  .clean();

if (mix.inProduction()) {
  mix
    .options({
      processCssUrls: true,
    })
    .webpackConfig({
      plugins: [
        // Optimizing image quality
        new ImageminPlugin({
          test: /\.(jpe?g|png|gif)$/i,
          optipng: {
            optimizationLevel: 3,
          },
          plugins: [
            imageminMozjpeg({
              quality: 80,
              progressive: true,
            }),
          ],
        }),
      ],
    })
    .ImageWebp({
      from: "src/assets/images",
      to: "dist/images",
      imageminWebpOptions: {
        quality: 70,
      },
    })
    .sourceMaps()
    .version();
}