var gulp = require('gulp');
var tsc = require('gulp-typescript');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');
var fs = require('fs');

var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('compile', function () {
    
    var ts = gulp
        .src('jQuery.SyntaxHighlighter.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc({
            declarationFiles: true
        }));
    
    var js = ts.js
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
        
    var dts = ts.dts
        .pipe(gulp.dest('./dist'));
    
    return merge([js, dts]);
    
});

gulp.task('browserify', ['compile'], function () {
    
    return gulp
        .src('bundled.js')
        .pipe(sourcemaps.init())
        .pipe(browserify())
        .pipe(uglify())
        .pipe(rename('browserified.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));

});

gulp.task('default', ['compile']);
