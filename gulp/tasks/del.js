module.exports = function () {
  $.gulp.task("del", function () {
    return $.gulp.src($.paths.clean, { read: false })
        .pipe($.gp.clean());
  });
}