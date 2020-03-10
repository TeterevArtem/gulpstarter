module.exports = function () {
  $.gulp.task('fonts', function () {
    return $.gulp.src($.paths.dev.fonts)
    .pipe($.gulp.dest($.paths.build.fonts))
  })
}