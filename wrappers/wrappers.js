
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// To reduce TypeScript's decleration complexities, these wrappers introduce 
// simpler ways to model their functioning. 
//

//
// ─── PRISM HIGHLIGHTING WRAPPER ─────────────────────────────────────────────────
//

    function PrismHighlight( code ) {
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


    function ReadFile ( address, callback ) {
        fs.readDir( address , callback );
    }

    function ReadDirSync ( address ) {
        return fs.readDirSync( address );
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

// ────────────────────────────────────────────────────────────────────────────────