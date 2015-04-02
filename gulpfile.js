"use strict";

var gulp = require("gulp");
var fs = require("fs");
var sourcemaps = require("gulp-sourcemaps");
var tsc = require("gulp-typescript");
var wrap = require("gulp-wrap-js");
var uglify = require("gulp-uglify");
var merge = require("merge2");

var browserify = require("gulp-browserify");
var rename = require("gulp-rename");

gulp.task("compile", function (callback) {
    
    fs.readFile("template.js", { encoding: "utf-8" }, function (error, data) {
    
        if (error) {
            callback(error);
            return;
        }
        
        var ts = gulp
            .src("jQuery.SyntaxHighlighter.ts")
            .pipe(sourcemaps.init())
            .pipe(tsc({
                declarationFiles: true,
                sourceRoot: ".."
            }));
        
        var js = ts.js
            .pipe(wrap(data))
            .pipe(gulp.dest("dist"))
            .pipe(uglify())
            .pipe(rename("jQuery.SyntaxHighlighter.min.js"))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("dist"));
            
        var dts = ts.dts
            .pipe(gulp.dest("dist"));
        
        merge([js, dts]);
        callback();
        
    });
    
});

gulp.task("browserify", ["compile"], function () {
    
    return gulp
        .src("bundled.js")
        .pipe(browserify())
        .pipe(uglify())
        .pipe(rename("browserified.js"))
        .pipe(gulp.dest("."));

});

gulp.task("default", ["compile"]);
