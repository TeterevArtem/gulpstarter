module.exports = function () {
  $.gulp.task("sass:dev", function() {
    return $.gulp.src($.paths.dev.sass)
      .pipe($.pn())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.paths.build.css))
      .pipe($.bs.stream());
  });

  $.gulp.task("sass:build", function() {
    return $.gulp.src($.paths.dev.sass)
      .pipe($.pn())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.cleancss())
      .pipe($.gp.rename({
        basename: "style",
        suffix: ".min",
        extname: ".css"
      }))
      .pipe($.gulp.dest($.paths.build.css))
  });

}