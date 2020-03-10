module.exports = function () {
  $.gulp.task('svg-sprite', function(){
    return $.gulp.src($.paths.dev.images + '/icons/*.svg') // svg files for sprite
      .pipe($.svgsp({
        mode: {
          stack: {
            sprite: "../sprite.svg" //sprite file name
          }
        },
        shape: {
          dimension: { // Set maximum dimensions
            maxWidth: 25,
            maxHeight: 25
          },
          spacing: { // Add padding
            padding: 10,
            box: 'content'
          }
        },    
      }))
      .pipe($.gulp.dest($.paths.build.images + '/svg'));
  });
}