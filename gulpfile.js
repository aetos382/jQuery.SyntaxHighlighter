var gulp = require('gulp');
var tsc = require('gulp-typescript');
var umd = require('gulp-umd');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compile', function () {
    gulp.src('jQuery.SyntaxHighlighter.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc())
        .pipe(umd({
            dependencies: function() { return ["jquery"]; },
            exports: function(file) { return 'JQuerySyntaxHighlighter'; },
            namespace: function(file) { return 'JQuerySyntaxHighlighter'; }
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['compile']);
