//Copyright 2018 Google LLC.
//SPDX-License-Identifier: Apache-2.0

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const extReplace = require('gulp-ext-replace');
const webp = require('imagemin-webp');

gulp.task('imagemin', () => {
    return gulp.src('chamber/images/*')
        .pipe(imagemin([
            pngquant({ quality: [0.5, 0.5] }),
            mozjpeg({ quality: 50 }),
        ]))
        .pipe(gulp.dest('chamber/images/'));
});

gulp.task('webp', () => {
    return gulp.src('chamber/images/')
        .pipe(imagemin([
            webp({ quality: 50 })
        ]))
        .pipe(extReplace('.webp'))
        .pipe(gulp.dest('chamber/images/'))
});