const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Paths
const paths = {
    scss: './src/resources/scss/**/*.scss',
    css: './src/'
};

// Compile SCSS to CSS
function compileSCSS() {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename('App.css'))
        .pipe(gulp.dest(paths.css));
}

// Watch for changes
function watchFiles() {
    gulp.watch(paths.scss, compileSCSS);
}

// Define complex tasks
const build = gulp.series(compileSCSS, watchFiles);

// Export tasks
exports.compileSCSS = compileSCSS;
exports.watchFiles = watchFiles;
exports.default = build;
