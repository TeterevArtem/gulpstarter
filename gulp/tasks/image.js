module.exports = function () {
  $.gulp.task('image:dev', function(){
    return $.gulp.src($.paths.dev.images)
      .pipe($.gulp.dest($.paths.build.images))
  });
  
  $.gulp.task('image:build', function(){
    return $.gulp.src($.paths.dev.images)
        .pipe($.imagemin([
          $.imagemin.gifsicle({interlaced: true}),
          $.imagemin.mozjpeg({quality: 75, progressive: true}),
          $.imagemin.optipng({optimizationLevel: 5}),
          $.imagemin.svgo({
              plugins: [
                  {removeViewBox: true},
                  {cleanupIDs: false}
              ]
          })
      ]))
        .pipe($.gulp.dest($.paths.build.images))
  });


  
}