var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var size = require('gulp-filesize');
var plumber = require('gulp-plumber');
var validator = require('gulp-html');
var browserSync = require('browser-sync').create();

// Variables
var autoprefixerOptions = {
	browsers: [ 'last 4 versions', '> 5%', 'Firefox ESR' ]
};
var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

var style_input = './assets/sass/**/*.scss';
var style_output = './_site/assets/css';
var js_input = './assets/js/dev/**/*.js';
var js_output = './_site/assets/js/prod';
var html_input = [ './_pages/**/*.{html,htm}' ];
var html_output = './_site';

// Wait for html-build, then launch the Server
gulp.task('browser-sync', [ 'build' ], function() {
	browserSync.init({
		server: {
			baseDir: '_site'
		}
	});
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run html & reload BrowserSync
 */
gulp.task('watch', function() {
	gulp.watch('assets/sass/**', [ 'sass' ]);
	gulp.watch('assets/js/dev/**', [ 'js' ]);
	gulp.watch(html_input, [ 'html' ]);
});
gulp.task('reload', function() {
	browserSync.reload();
});

gulp.task('js', function() {
	return gulp
		.src(js_input)
		.pipe(plumber())
		.pipe(uglify())
		.pipe(plumber.stop())
		.pipe(size())
		.pipe(gulp.dest(js_output))
		.pipe(browserSync.stream());
});

gulp.task('sass', function() {
	return (gulp
			.src(style_input)
			.pipe(plumber())
			// .pipe(sourcemaps.init())
			.pipe(sass(sassOptions))
			// .pipe(sourcemaps.write())
			.pipe(autoprefixer(autoprefixerOptions))
			.pipe(plumber.stop())
			.pipe(size())
			.pipe(gulp.dest(style_output))
			.pipe(browserSync.stream()) );
});

gulp.task('html', function() {
	gulp.start('images');
	gulp.start('root_images');
	gulp.start('fonts');
	gulp.start('video');
	gulp.start('pdfs');
	return gulp.src(html_input).pipe(gulp.dest(html_output)).pipe(browserSync.stream());
});
gulp.task('root_images', function() {
	return gulp.src([ './favicon.png' ]).pipe(gulp.dest('_site'));
});
gulp.task('images', function() {
	return gulp.src([ './assets/images/**/*.{gif,jpg,png,svg}' ]).pipe(gulp.dest('_site/assets/images'));
});
gulp.task('video', function() {
	return gulp.src([ './assets/video/bg-video.mp4' ]).pipe(gulp.dest('_site/assets/video'));
});
gulp.task('pdfs', function() {
	return gulp.src([ './assets/pdfs/**/*.{pdf}' ]).pipe(gulp.dest('_site/assets/pdfs'));
});

gulp.task('fonts', function() {
	return gulp.src([ './assets/fonts/**/*.{woff,woff2,ttf,svg}' ]).pipe(gulp.dest('_site/assets/fonts'));
});

gulp.task('default', [ 'browser-sync', 'watch' ]);

gulp.task('build', [ 'sass', 'js', 'html' ]);
