module.exports = function () {
  $.gulp.task("script:dev", function () {
    return $.gulp.src($.paths.dev.js)
      .pipe($.pn())
      .pipe($.gulp.dest($.paths.build.js))
      .pipe($.bs.stream())
  });

  $.gulp.task("script:lib", function () {
    return $.gulp.src(
      [
        $.paths.dev.libs + 'jquery/dist/jquery.min.js', 
        $.paths.dev.libs + 'bootstrap/dist/js/bootstrap.min.js'
      ]) 
      .pipe($.pn())
      .pipe($.gp.concat('libs.js'))      
      .pipe($.gp.rename({
        basename: "libs",
        suffix: ".min",
        extname: ".js"
      }))
      .pipe($.gulp.dest($.paths.build.js))
      .pipe($.bs.stream())
  });

  $.gulp.task("script:build", function () {
    return $.gulp.src($.paths.dev.js)
      .pipe($.pn())
      .pipe($.gp.concat("scripts.js"))
      .pipe($.gp.uglify())
      .pipe($.gp.rename({
        basename: "scripts",
        suffix: ".min",
        extname: ".js"
      }))
      .pipe($.gulp.dest($.paths.build.js))
  });
}