module.exports = function () {
  $.gulp.task("browsersync",function () {
    $.bs.init({
        server: {
            baseDir: "./build"
        },
        port: 3000
    });
  });  
}