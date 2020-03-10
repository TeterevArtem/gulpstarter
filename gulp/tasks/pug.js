module.exports = function () {
  var YOUR_LOCAL = '';
  $.gulp.task("pug", function(){    
    return $.gulp.src($.paths.dev.pug)
      .pipe($.pn())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.pug({
        pretty: true
        // locals: JSON.parse($.fs.readFileSync(YOUR_LOCAL, 'utf-8'))
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.paths.build.html))
      .pipe($.bs.stream());
  });
}