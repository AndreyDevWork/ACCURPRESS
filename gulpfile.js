var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('server', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "./" // Укажите путь к корневой папке вашего проекта
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./**/*.js").on('change', browserSync.reload);
    gulp.watch("./sass/style.css").on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('server'));