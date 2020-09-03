let gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync");
sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function () {
  return gulp
    .src("app/sass/main.sass")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write("./app/css"))
    .pipe(gulp.dest("app/css"));
});

gulp.task("scss", function () {
  return gulp
    .src("app/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write("./app/css"))
    .pipe(gulp.dest("app/css"));
});

gulp.task("watch", function () {
  gulp.watch("app/scss/main.scss", gulp.parallel("scss"));
  gulp.watch("app/slick/slick-theme.scss", gulp.parallel("scss"));
});

gulp.task("browser-sync", function () {
  browserSync({
    server: {
      baseDir: "app",
    },
  });
});
