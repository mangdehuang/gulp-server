var gulp = require('gulp'),
    tmodjs = require('gulp-tmod'),
    webserver = require('gulp-webserver');

gulp.task('testtmod', function(){
    var stream = gulp.src('dist/')
        .pipe(tmodjs({
            templateBase: 'template'
        }))
        .pipe(gulp.dest('src/'))
        .pipe(gulp.dest('dist/'));
    return stream;
});

gulp.task('webserver', function(){
    gulp.src('dist/')
        .pipe(webserver({
            port: 8888,//端口
            host: '172.16.81.117',//域名
            liveload: true,//实时刷新代码。不用f5刷新
            open:true,
            directoryListing: {
                path: 'dist/',  
                enable: true,
            }
    }))
});

gulp.task("default",["testtmod","webserver"]);
