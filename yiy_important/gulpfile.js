var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync=require('browser-sync'),
    reload = browserSync.reload,
    sass = require('gulp-sass');









gulp.task('sassfile',function(){
    return gulp.src('yiyi/css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest( 'yiyi/css/' ));
});

gulp.task('watch',['sassfile'],function(){
	gulp.watch(['yiyi/css/style.scss'],[ 'sassfile' ])
})


gulp.task('see',['watch'],function(){
    browserSync({
        server:{
        	baseDir:'./'
        }
    });
    gulp.watch("index.html").on('change',reload);
});
