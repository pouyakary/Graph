
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    var gulp    = require('gulp')
    var exec    = require('child_process').exec
    var util    = require('util')
    var fs      = require('fs-extra')
    var path    = require('path')
    // var ts      = require('gulp-typescript')

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

    gulp.task('typescript', function( cb ) {
        shell('tsc', cb)
    })

    gulp.task('uglifyjs', ['typescript'], function( cb ) {
        shell(`uglifyjs -m -o ${resultDirPath}/core.js ${resultDirPath}/core.js`, cb)
    })

//
// ─── COPY FILES ─────────────────────────────────────────────────────────────────
//

    gulp.task('copyfiles', function ( cb ) {
        copyToBinaryFromDir('resources')
        copyToBinaryFromDir('view')
    })

    gulp.task('lessc', function( cb ) {
        shell(`lessc sheets/style.less ${resultDirPath}/style.css`, cb)
    })

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    gulp.task('default', ['uglifyjs', 'copyfiles'])

// ────────────────────────────────────────────────────────────────────────────────