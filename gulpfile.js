const { series, src, dest, watch } = require('gulp')
const postcss = require('gulp-postcss')
const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')
const stylelint = require('gulp-stylelint')
const browserSync = require('browser-sync').create()

const plugins = [
  postcssPresetEnv({
    features: {
      'color-mod-function': { unresolved: 'warn' }
    }
  }),
  cssnano(),
]

const srcPath = './src'
const htmlGlob = srcPath + '/*.html'
const cssGlob = srcPath + '/*.css'
const distPath = './dist'

function css() {
  return src(cssGlob)
    .pipe(stylelint({
      failAfterError: true,
      reporters: [
        {formatter: 'verbose', console: true},
      ],
    }))
    .pipe(postcss(plugins))
    .pipe(dest(distPath))
    .pipe(browserSync.stream())
}

function html() {
  return src(htmlGlob)
    .pipe(dest(distPath))
}

function lint() {
  return src(cssGlob)
    .pipe(stylelint({
      failAfterError: true,
      reporters: [
        {formatter: 'verbose', console: true},
      ],
    }))
}

function serve() {
  browserSync.init({ server: distPath })

  watch(htmlGlob, html).on('change', browserSync.reload)
  watch(cssGlob, series(lint, css))
}

exports.css = series(lint, css)
exports.html = html
exports.lint = lint
exports.serve = series(lint, css, html, serve)
exports.default = series(lint, css, html)
