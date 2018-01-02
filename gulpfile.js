const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')
const browserSync = require('browser-sync')
const { reload } = browserSync

const srcPath = './src'
const htmlGlob = srcPath + '/*.html'
const cssGlob = srcPath + '/*.css'
const distPath = './dist'

gulp.task('default', [ 'css', 'html' ])

gulp.task('html', () => {
  return gulp.src(htmlGlob)
    .pipe(gulp.dest(distPath))
    .pipe(reload({ stream: true }))
})

gulp.task('css', () => {
  const plugins = [
    cssnext({ features: { rem: false } }),
    cssnano(),
  ]

  return gulp.src(cssGlob)
    .pipe(postcss(plugins))
    .pipe(gulp.dest(distPath))
    .pipe(reload({ stream: true }))
})

gulp.task('serve', [ 'html', 'css' ], () => {
  const server = { baseDir: distPath }
  browserSync({ server })

  gulp.watch(htmlGlob, [ 'html' ])
  gulp.watch(cssGlob, [ 'css' ])
})
