var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');


gulp.task('welcome', function(){
    console.log('Welcome to Gulp!');
});

gulp.task('hello',['welcome'], function () {
    console.log('Hello World.');
});

gulp.task('js', function(){
    gulp.src(['ng/module.js','ng/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate)
        .pipe(uglify())
        .pipe(gulp.dest('assets'));
});
