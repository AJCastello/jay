'use strict';

const gulp = require('gulp');

return gulp.src('./src/**/*.css')
  .pipe(gulp.dest('./dist'));
