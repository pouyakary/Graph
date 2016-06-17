
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//


//
// ────────────────────────────────────────────────── I ──────────
//  :::::: G R A P H : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

//
// ─── CREATE DOT ─────────────────────────────────────────────────────────────────
//

    function newdot( ): KaryGraph.Dot {
        return KaryGraph.API.AbstractionLayer.AddNewDot( );
    }

//
// ─── NEW DOT AT ─────────────────────────────────────────────────────────────────
//

    function newdotat( x: number, y: number ) {
        return KaryGraph.API.AbstractionLayer.NewDotAt( x, y );
    }

//
// ─── NEW DOTS ───────────────────────────────────────────────────────────────────
//

    function newdots( howmuch: number ) {
        for ( var counter = 0; counter < howmuch; counter++ ) {
            newdot();
        }
    }

//
// ─── GETDOT ─────────────────────────────────────────────────────────────────────
//

    function getdot( numberId: number ): KaryGraph.Dot {
        return KaryGraph.API.AbstractionLayer.GetDotByNumberId( numberId );
    }

//
// ─── CONNECT ────────────────────────────────────────────────────────────────────
//

    function connect( a: any, b: any ): boolean {
        try {
            return a.ConnectTo( b );
        } catch ( err ) {
            let d1 = getdot( a );
            let d2 = getdot( b );
            return d1.ConnectTo( d2 );
        }
    }

//
// ─── DISCONNECT ─────────────────────────────────────────────────────────────────
//

    function disconnect( a: any, b: any ): boolean {
        try {
            return a.DisconnectFrom( b );
        } catch ( err ) {
            let d1 = getdot( a );
            let d2 = getdot( b );
            return d1.DisconnectFrom( b );
        }
    }

//
// ─── CLEAN SCREEN ───────────────────────────────────────────────────────────────
//

    function reset ( ) {
        KaryGraph.API.AbstractionLayer.Reset( );
    }

//
// ─── GET COUNT OF DOTS ──────────────────────────────────────────────────────────
//

    function countdots( ): number {
        return KaryGraph.API.AbstractionLayer.GetCountOfDots( );
    }

//
// ─── MOVE COMMAND ───────────────────────────────────────────────────────────────
//

    function move( dot: any, x: number, y: number ) {
        try {
            ( <KaryGraph.Dot> dot ).MoveTo( x, y );
        } catch ( err ) {
            dot = getdot( dot );
            dot.MoveTo( x, y );
        }
    }

// ────────────────────────────────────────────────────────────────────────────────



    function completegraph( size: number ) {
        KaryGraph.API.StandardLibrary.CreateCompleteGraph( size );
    }



//
// ────────────────────────────────────────────────────── II ──────────
//  :::::: C O N S O L E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

//
// ─── PRINT ──────────────────────────────────────────────────────────────────────
//

    function print( input: any ) {
        KaryGraph.UI.Console.Print( input );
    }

//
// ─── CLS ────────────────────────────────────────────────────────────────────────
//

    function cls( ) {
        KaryGraph.UI.Console.Clean( );
    }

// ────────────────────────────────────────────────────────────────────────────────