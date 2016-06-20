
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    var gulp = require('gulp')
    var exec = require('child_process').exec
    var util = require('util')
    var fs   = require('fs-extra')
    var path = require('path')
    var ugly = require('gulp-uglify')
    var less = require('gulp-less')

//
// ─── CONSTS ─────────────────────────────────────────────────────────────────────
//

    const resultDirPath = '_compiled'

//
// ─── TOOLS ──────────────────────────────────────────────────────────────────────
//

    /** Run shell commands easy! */
    function shell( command , cb ) {
        exec(command, function( err ) {
            if ( err ) return cb( err )
            cb( )
        })
    }

//
// ─── COPY DIR FILES ─────────────────────────────────────────────────────────────
//

    /** Copy to binary from dir */
    function copyToBinaryFromDir( dir ) {
        console.log(`Copying files from ${dir} to`)
        fs.readdir( dir , function ( err , files ) {
            // if error
            if ( err ) {
                console.log(`Could not get files from directory ${dir}`)
            }
            // if right
            files.forEach( function ( name ) {
                copyFile(
                    getLocalPath( path.join( dir , name ) ),
                    getLocalPath( path.join( resultDirPath , name ) )
                )
            })
        })
    }

    /** Copy file `A` to `B` */
    function copyFile( A , B ) {
        fs.copy( A, B, function ( err ) {
            if ( err ) return console.error( err )
            console.log(`--> Copied ${A} to ${B}`)
        })
    }

    /** Get Local Path in the current directory */
    function getLocalPath( adrs ) {
        return path.join( path.dirname( ) , adrs )
    }

//
// ─── COMPILING TYPE SCRIPT ──────────────────────────────────────────────────────
//

    /** Compiles the TypeScript code */
    gulp.task('typescript', function( cb ) {
        shell('tsc', cb)
    })

//
// ─── UGLIFYING ──────────────────────────────────────────────────────────────────
//

    /** Minifies the result code from TypeScript */
    gulp.task( 'uglifyjs', ['typescript'], function( cb ) {
        //return gulp.src( `${ resultDirPath }/*.js` )
        //  .pipe( ugly( ) )
        //.pipe( gulp.dest( `${ resultDirPath }` ) )
        cb()
    })

//
// ─── COPY FILES ─────────────────────────────────────────────────────────────────
//

    /** Copies static resource files into the result directory */
    gulp.task( 'copyfiles', function ( cb ) {
        copyToBinaryFromDir( 'resources' )
        copyToBinaryFromDir( 'view' )
        copyToBinaryFromDir( 'electron' )
        copyToBinaryFromDir( 'wrappers' )
        copyToBinaryFromDir( 'libs' )
    })

//
// ─── SHEETS ─────────────────────────────────────────────────────────────────────
//

    /** Compiles the Less style sheets */
    gulp.task( 'sheets', function( cb ) {
        return gulp.src( getLocalPath( 'sheets/*.less' ) )
            .pipe( less ({
                paths: [ path.join( __dirname , 'sheets' ) ]
            }))
            .pipe( gulp.dest( `${ resultDirPath }` ))
    })

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    /** Where everything starts */
    gulp.task('default', ['typescript', 'copyfiles', 'sheets'])

// ────────────────────────────────────────────────────────────────────────────────