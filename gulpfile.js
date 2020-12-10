let {src,watch, dest} = require('gulp');
let htmlmin = require('gulp-htmlmin');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let image = require('gulp-imagemin');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let babel = require('gulp-babel');

function fnCopyIndex(){
    return src('./src/index.html').pipe(dest('./dist'));
}
function fnPages(){
    return src('./src/pages/*.html').pipe(htmlmin()).pipe(dest('./dist/pages'));
}
function fnCSS(){
    return src('./src/sass/*.scss').pipe(sass({outputStyle : "expanded"})).pipe(rename({suffix : '.min'})).pipe(dest('./dist/css'));
}
function fnImg(){
    return src('./src/img/*').pipe(dest('./dist/img'));
}
function fnJS(){
    return src('./src/js/*.js').pipe(babel({presets: ['@babel/env']})).pipe(uglify()).pipe(rename({suffix : '.min'})).pipe(dest('./dist/js'));
}
function fnWatch(){
    watch('./src/index.html',fnCopyIndex);
    watch('./src/sass/*.scss',fnCSS);
    watch('./src/js/*.js',fnJS);
    watch('./src/pages/*.html',fnPages);
}

exports.copyIndex = fnCopyIndex;
exports.js = fnJS;
exports.css = fnCSS;
exports.image = fnImg;
exports.page = fnPages;
exports.default = fnWatch;