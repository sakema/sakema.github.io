var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
	gulp.src('./less/style.less')
		.pipe(less())
  		.pipe(autoprefixer())
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
		gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);