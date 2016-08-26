'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import path from 'path';
import gulpSequence from 'gulp-sequence';
import sync from 'browser-sync';
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
    .pipe(gulp.dest('./style'))
    .pipe(browserSync.stream());
});

//perziureti
gulp.task('babel', () => {
  return gulp.src('./script_es6/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./script'));
});

// Static Server + watching less/html files
gulp.task('serve', ['less', 'babel'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./style/*.less", ['less']);
    gulp.watch('./script/*.js').on('change', browserSync.reload); //pasiziureti kas cia dedas dabar
    gulp.watch("./*.html").on('change', browserSync.reload);
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
    done);
});

//Default
gulp.task('default', ['build']);
