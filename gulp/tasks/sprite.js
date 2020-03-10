module.exports = function () {
  $.gulp.task('sprite', function(){
    return $.gulp.src($.paths.dev.images + '/icons/**/*.png')
      .pipe($.sp({
          imgName: 'sprite.png',
          cssName: '_sprite.sass',
          padding: 40
      }))
      .pipe($.gulp.dest($.paths.build.images + '/sprites'))
  });  
}