module.exports = function () {
  $.gulp.task("watch", function() {
    $.gulp.watch($.paths.dev.pug, $.gulp.series("pug"));
    $.gulp.watch($.paths.dev.sass, $.gulp.series("sass:dev"));
    $.gulp.watch($.paths.dev.js, $.gulp.series("script:dev"));
  });  
}