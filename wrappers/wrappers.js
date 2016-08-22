
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── VERY IMPORTANT MESSAGE ─────────────────────────────────────────────────────
// Graph uses TypeScript's own module system not CommonJS and that makes loading &
// using node modules impossible inside the 'KaryGraph' and other modules of the
// same kind. Hence this wrappers are used to provide a very simple bridge for
// providing node functionality inside the core modules.
//

//
// ─── PRISM HIGHLIGHTING WRAPPER ─────────────────────────────────────────────────
//

    function PrismHighlight ( code ) {
        return Prism.highlight( code, Prism.languages.javascript );
    }

//
// ─── NODE JS COMMON TOOLS ───────────────────────────────────────────────────────
//

    function JoinPath ( addresses ) {
        let result = '';
        addresses.forEach( address => {
            result = path.join( result , address );
        });
        return result;
    }

//
// ─── NODE READ FILE ─────────────────────────────────────────────────────────────
//

    function ReadFile ( address, callback ) {
        fs.readFile( address, 'utf8 ', callback );
    }

    function ReadFileSync ( address ) {
        return fs.readFileSync( address, 'utf8' );
    }

//
// ─── GET DIRECTORY ──────────────────────────────────────────────────────────────
//

    function ReadDir ( address, callback ) {
        fs.readdir( address , callback );
    }

    function ReadDirSync ( address ) {
        return fs.readdirSync( address );
    }

//
// ─── FS STATS ───────────────────────────────────────────────────────────────────
//

    function FSStatsSync ( address ) {
        return fs.statSync( address );
    }

//
// ─── FS EXISTS ──────────────────────────────────────────────────────────────────
//

    function FSExistsSync ( address ) {
        return fs.existsSync( address );
    }

//
// ─── GET HOME DIR ───────────────────────────────────────────────────────────────
//

    function GetHomeDir ( ) {
        return process.env.HOME;
    }

//
// ─── NODE REQUIRE ───────────────────────────────────────────────────────────────
//

    var NodeRequire = require;

// ────────────────────────────────────────────────────────────────────────────────