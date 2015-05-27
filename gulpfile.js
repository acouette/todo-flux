/**
 * Created by acouette on 5/24/15.
 */
var gulp = require('gulp');
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Static Server + watching scss/html files
gulp.task('serve', ['browserify'], function () {

    browserSync.init({
        server: ["./dist", './app']
    });

    gulp.watch('app/scripts/**/*.js', ['js-watch']);

});

gulp.task('js-watch', ['browserify'], reload);


gulp.task('browserify', [], function () {
    return browserify('app/scripts/index.js',
        {debug: true})
        .transform(babelify)
        .bundle()
        .on("error", function (err) {
            console.log("Error : " + err.message);
        })
        .pipe(fs.createWriteStream("dist/bundle.js"));
});