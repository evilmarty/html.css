const { series, src, dest, watch } = require('gulp')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')
const browserSync = require('browser-sync').create()

const plugins = [
  cssnext({ features: { rem: false } }),
  cssnano(),
]

const srcPath = './src'
const htmlGlob = srcPath + '/*.html'
const cssGlob = srcPath + '/*.css'
const distPath = './dist'

function css() {
  return src(cssGlob)
    .pipe(postcss(plugins))
    .pipe(dest(distPath))
    .pipe(browserSync.stream())
}

function html() {
  return src(htmlGlob)
    .pipe(dest(distPath))
}

function serve() {
  browserSync.init({ server: distPath })

  watch(htmlGlob, html).on('change', browserSync.reload)
  watch(cssGlob, css)
}

exports.css = css
exports.html = html
exports.serve = series(css, html, serve)
exports.default = series(css, html)
