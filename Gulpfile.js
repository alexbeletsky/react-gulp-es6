var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('browserify', function () {
	gulp.src('js/app.jsx')
		.pipe(browserify({
			transform: ['babelify', 'reactify']
		}))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('build'));
});

gulp.task('default', function() {
});