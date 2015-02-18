var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var open = require('gulp-open');
var watch = require('gulp-watch');

gulp.task('browserify', function () {
	gulp.src('js/app.jsx')
		.pipe(browserify({
			transform: ['babelify', 'reactify']
		}))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('build'));
});

gulp.task('connect', function () {
	connect.server({
		hostname: 'localhost',
		port: 7012
	});
});

gulp.task('watch', function () {
	watch(['js/**/*.js', 'js/**/*.jsx'], function () {
		gulp.start('browserify');
	});
});

gulp.task('start', ['browserify', 'connect', 'watch'],  function () {
	var options = {
		url: 'http://localhost:7012'
	};
	gulp.src('./index.html')
		.pipe(open('', options));
});

gulp.task('default', ['browserify']);