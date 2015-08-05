var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    clean        = require('gulp-clean'),
    notify       = require('gulp-notify'),
    plumber      = require('gulp-plumber'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: './'
        },
        host: "http://localhost",
    });
});

gulp.task('styles', function() {
  return gulp.src('sass/main.sass')
    .pipe(plumber())
    .pipe(sass({
      style: 'expanded',
      includePaths: ['node_modules/node-bourbon/node_modules/bourbon/app/assets/stylesheets']}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(gulp.dest('css'))
    .pipe(reload({stream:true}))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('clean', function() {
  return gulp.src(['stylesheets'], {read: false})
    .pipe(clean());
});


gulp.task('watch', function() {
  // Watch .sass files
  gulp.watch('sass/**/*.{sass,scss}', ['styles']);
  //Watch all files
  gulp.watch(['index.html', 'img/*', 'js/*.js', 'css/*.css'], reload);
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'browser-sync', 'watch');
});
