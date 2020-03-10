'use strict'

global.$ = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  bs: require("browser-sync").create(),
  cleancss: require("gulp-clean-css"),
  pn: require("gulp-plumber-notifier"),
  imagemin: require("gulp-imagemin"),
  sp: require("gulp.spritesmith"),
  svgsp: require("gulp-svg-sprite"),
  fs: require("fs"),
  path: {
    tasks: require('./gulp/config/tasks.js')
  },
  paths: {
    build: {
      html: "build/",
      js: "build/js/",
      css: "build/css/",
      images: "build/images/",
      fonts: "build/fonts/"
    },
    dev: {
      html: "dev/*.{htm,html,php}",
      pug: ["dev/pug/**/*.pug", "!dev/pug/**/_*.pug"],
      js: "dev/scripts/*.js",
      sass: "dev/styles/*.sass",
      images: "dev/images/**/*.{jpg,png,svg,gif,ico}",
      // libs: "./node_modules/"
      // json: "dev/json/skills.json",
      fonts: "dev/fonts/**/*.*"
    },
    clean: "./build"
  }
};

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

//=======Tasks=======//

$.gulp.task("default", $.gulp.series(
  $.gulp.parallel('pug', 'sass:dev', 'image:dev', 'script:dev',
  'fonts'),
  $.gulp.parallel('watch', 'browsersync')
));

$.gulp.task("build", 
  $.gulp.series('del', 
    $.gulp.parallel('pug', 'sass:build', 'script:build', 'image:build')
  )
);
