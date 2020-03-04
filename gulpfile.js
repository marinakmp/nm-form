const { src, dest, parallel } = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

function css() {
	return src('assets/scss/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())	
    .pipe(autoprefixer({
			cascade: false
	})) 
	.pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/css'))
}

function minify() {
	return src('assets/scss/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())	
    .pipe(autoprefixer({
			cascade: false
	})) 
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/css'))
}

exports.css = css;
exports.minify = minify;
exports.default = parallel(css,minify);