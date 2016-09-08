'use strict';

import gulp from 'gulp';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import path from 'path';
import gulpSequence from 'gulp-sequence';
import sync from 'browser-sync';
import cssmin from 'gulp-cssmin';
import uglify from 'gulp-uglify';
// var uglify = require('uglify');

var browserSync = sync.create();

gulp.task('less', () => {
  return gulp.src('./style/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer({
      browsers: [
        '> 1%',
        'last 2 versions',
        'firefox >= 4',
        'safari 7',
        'safari 8',
        'IE 8',
        'IE 9',
        'IE 10',
        'IE 11'
      ],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./style'))
    .pipe(browserSync.stream());
});

// Static Server + watching less/html files
gulp.task('serve', ['less', 'buildJS'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./style/*.less", ['less']);
    gulp.watch("./prescript/*.js", ['buildJS']);
    gulp.watch(["./*.html", "./script/*.js"]).on('change', browserSync.reload);
});

//Dev
gulp.task('dev', (done) => {
    gulpSequence(
        ['serve'],
    done);
});

//Build
gulp.task('build', (done) => {
    gulpSequence(
        ['less'],
        ['buildJS'],
    done);
});

// /*** uglify JS ***/
gulp.task('buildJS', () =>{
  return gulp.src('./prescript/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./script'));
});

//Default
gulp.task('default', ['build']);
