var gulp = require('gulp');
var tsc = require('gulp-typescript');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');
var wrap = require('gulp-wrap-js');
var fs = require('fs');

var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('compile', function () {
	var template = fs.readFileSync('template.js', { encoding: 'utf-8' });
	
    var ts = gulp
    	.src('jQuery.SyntaxHighlighter.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc());
	
	var js = ts.js
		.pipe(wrap(template))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
		
	var dts = ts.dts
		.pipe(gulp.dest('.'));
	
	return merge([js, dts]);
});

gulp.task('browserify', ['compile'], function () {
	
	return gulp
		.src('bundled.js')
		.pipe(sourcemaps.init())
		.pipe(browserify())
		.pipe(rename('browserified.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('.'));

});

gulp.task('default', ['compile']);
