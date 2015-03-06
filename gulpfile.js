var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('welcome', function(){
    console.log('Welcome to Gulp!');
});

gulp.task('hello',['welcome'], function () {
    console.log('Hello World.');
});

gulp.task('js', function(){
    gulp.src(['ng/module.js','ng/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('assets'));
});
