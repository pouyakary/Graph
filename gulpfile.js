
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    var gulp    = require('gulp');
    var exec    = require('child_process').exec;
    var wrench  = require('wrench');
    var util    = require('util');

//
// ─── TOOLS ──────────────────────────────────────────────────────────────────────
//

    function shell( command , cb ) {
        exec(command, function( err ) {
            if ( err ) return cb( err );
            cb( );
        });
    }

//
// ─── COMPILING TYPE SCRIPT ──────────────────────────────────────────────────────
//

    gulp.task('typescript', function( cb ) {
        shell('tsc', cb);
    });

    gulp.task('uglifyjs', ['typescript'], function( cb ) {
        shell('uglifyjs -m -o binary/core.js binary/core.js', cb);
    });

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    gulp.task('default', ['uglifyjs']);
