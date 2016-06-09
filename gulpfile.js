var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('typescript', function( cb ) {
    exec('tsc', function( err ) {
        if ( err ) return cb( err ); 
        cb( ); 
    });
});

gulp.task('uglifyjs', ['typescript'], function( cb ) {
    exec('uglifyjs -m -o binary/core.js binary/core.js', function( err ) {
        if ( err ) return cb( err );
        cb( );
    });
});

gulp.task('default', ['uglifyjs']);