/**
 * Gulp Packages
 */

// General
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var watch = require('gulp-watch');


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});



gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('sass', function() {
    return gulp.src("*.scss")
        .pipe(sass())
        .pipe(gulp.dest(""))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);