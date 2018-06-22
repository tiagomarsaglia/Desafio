
var gulp = require('gulp')
var uglify = require('gulp-uglify')
var bower = require('gulp-bower-files')
var concat = require('gulp-concat')
var browserify = require('gulp-browserify')
var gulpFilter = require('gulp-filter')
var rename = require('gulp-rename')
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var src = {

  js: ['app/configs/*.js'],
  bower: ['bower.json', '.bowerrc']
}

var publishdir = 'public'
var dist = {
  js: publishdir + '/static/',
  vendor: publishdir + '/static/'
}

gulp.task('bower', function() {
  var jsFilter = gulpFilter('**/*.js' , {restore: true})
  return bower()
    .pipe(jsFilter)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(dist.js))
    .pipe(gulp.dest(dist.vendor))
})

gulp.task('sass', function () {
    return gulp.src('sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', ['sass']);
});



gulp.task('default', ['bower','sass','watch']) // development
