
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

    function newdotat( x: number, y: number ): KaryGraph.Dot {
        return new KaryGraph.Dot( x , y ); 
    }

//
// ─── NEW DOTS ───────────────────────────────────────────────────────────────────
//

    function newdots( howmuch: number ): Array<KaryGraph.Dot> {
        var dots = new Array<KaryGraph.Dot>( );
        for ( var counter = 0; counter < howmuch; counter++ ) {
            dots.push( KaryGraph.API.AbstractionLayer.AddNewDot( ) );
        }
        return dots;
    }

//
// ─── GETDOT ─────────────────────────────────────────────────────────────────────
//

    function getdot( numberId: number ): KaryGraph.Dot {
        return KaryGraph.API.AbstractionLayer.GetDotByNumberId( numberId );
    }

//
// ─── GET DOTS ───────────────────────────────────────────────────────────────────
//

    function getdots( ...ids: number[ ] ): Array<KaryGraph.Dot> {
        let result = new Array<KaryGraph.Dot>( );
        ids.forEach( id => {
            result.push( getdot( id ) );
        });
        return result;
    }

//
// ─── CONNECT ────────────────────────────────────────────────────────────────────
//

    function connect( args: Array<KaryGraph.API.AbstractionLayer.DotObjectOrDotID> ): boolean {
        let result = false;
        for ( var i = 1; i < args.length; i++ ) {
            let d1 = KaryGraph.API.AbstractionLayer.DotByDotOrId( args[ i - 1 ] );
            let d2 = KaryGraph.API.AbstractionLayer.DotByDotOrId( args[ i ] );
            result = d1.ConnectTo( d2 );
        }
        return result;
    }

//
// ─── CONNECT AS FAN ─────────────────────────────────────────────────────────────
//

    function fan( args: Array<KaryGraph.API.AbstractionLayer.DotObjectOrDotID> ): boolean {
        let result = false;
        for ( var i = 1; i < args.length; i++ ) {
            let d1 = KaryGraph.API.AbstractionLayer.DotByDotOrId( args[ 0 ] );
            let d2 = KaryGraph.API.AbstractionLayer.DotByDotOrId( args[ i ] );
            result = d1.ConnectTo( d2 );
        }
        return result;
    }

//
// ─── DISCONNECT ─────────────────────────────────────────────────────────────────
//

    function disconnect( a: KaryGraph.API.AbstractionLayer.DotObjectOrDotID, 
                         b: KaryGraph.API.AbstractionLayer.DotObjectOrDotID ): boolean {
        let d1 = KaryGraph.API.AbstractionLayer.DotByDotOrId( a );
        let d2 = KaryGraph.API.AbstractionLayer.DotByDotOrId( b );
        return d1.DisconnectFrom( d2 );
    }

//
// ─── Has Edge ─────────────────────────────────────────────────────────────────
//

      function hasEdge( start: KaryGraph.API.AbstractionLayer.DotObjectOrDotID, 
                        end: KaryGraph.API.AbstractionLayer.DotObjectOrDotID ) {
          let d1 = KaryGraph.API.AbstractionLayer.DotByDotOrId( start );
          let d2 = KaryGraph.API.AbstractionLayer.DotByDotOrId( end );
          return d1.IsConnectedTo( d2 );
      }

//
// ─── CLEAN SCREEN ───────────────────────────────────────────────────────────────
//

    function reset ( ) {
        KaryGraph.API.AbstractionLayer.Reset( );
    }

//
// ─── GET MATRIX OF GRAPH ────────────────────────────────────────────────────────
//

    function matrix ( ): number[][] {
        return KaryGraph.API.AbstractionLayer.CreateMatrix( );
    }

//
// ─── CREATE GRAPH FROM MATRIX ───────────────────────────────────────────────────
//

    function graphfrommatrix ( matrix: number[][] ) {
        var numberOfNodes = matrix.length;
        for ( var i = 0; i < numberOfNodes; i++ ) {
            if ( matrix[ i ].length != numberOfNodes ) {
                // KaryGraph.UI.Console.PrintError( "Invalid matrix." );
                return ;
            }
        }
        var offset = countdots( ) + 1;
        newdots( numberOfNodes );
        for ( var m = 0; m < numberOfNodes; m++ ) {
            for ( var n = 0; n < numberOfNodes; n++ ) {
                if ( matrix[ m ][ n ] == 1 && !hasEdge( m + offset, n + offset ) ) {
                    connect([ m + offset , n + offset ]);
                }
            }
        }
    }

//
// ─── GET COUNT OF DOTS ──────────────────────────────────────────────────────────
//

    function countdots( ): number {
        return KaryGraph.Dot.TotalDots;
    }

//
// ─── MOVE COMMAND ───────────────────────────────────────────────────────────────
//

    function move( dot: KaryGraph.API.AbstractionLayer.DotObjectOrDotID, x: number, y: number ) {
        KaryGraph.API.AbstractionLayer.DotByDotOrId( dot ).MoveTo( x, y );
    }

//
// ─── MOVE TO X ──────────────────────────────────────────────────────────────────
//

    function movex( dot: KaryGraph.API.AbstractionLayer.DotObjectOrDotID, x: number ) {
        let d = KaryGraph.API.AbstractionLayer.DotByDotOrId( dot );
        d.MoveTo( x, d.Y );
    }

//
// ─── MOVE TO Y ──────────────────────────────────────────────────────────────────
//

    function movey( dot: KaryGraph.API.AbstractionLayer.DotObjectOrDotID, y: number ) {
        let d = KaryGraph.API.AbstractionLayer.DotByDotOrId( dot );
        d.MoveTo( d.X, y );
    }

//
// ─── MOVE BY X ──────────────────────────────────────────────────────────────────
//

    function movebx( dot: KaryGraph.API.AbstractionLayer.DotObjectOrDotID, x: number ) {
        let d = KaryGraph.API.AbstractionLayer.DotByDotOrId( dot );
        d.MoveTo( d.X + x, d.Y );
    }

//
// ─── MOVE BY Y ──────────────────────────────────────────────────────────────────
//

    function moveby( dot: KaryGraph.API.AbstractionLayer.DotObjectOrDotID, y: number ) {
        let d = KaryGraph.API.AbstractionLayer.DotByDotOrId( dot );
        d.MoveTo( d.X, d.Y + y );
    }

//
// ─── RENDERING ──────────────────────────────────────────────────────────────────
//

    function render( option: string ) {
        KaryGraph.API.AbstractionLayer.Render( option );
    }

//
// ─── SORT BY INPUTS ─────────────────────────────────────────────────────────────
//

    function sort( ) {
        KaryGraph.API.StandardLibrary.Sortings.Tree( );
    }

//
// ─── GET ORDER OF GRAPH ─────────────────────────────────────────────────────────
//

    function order( ): number {
        return countdots();
    }

//
// ─── GET SIZE OF GRAPH ──────────────────────────────────────────────────────────
//

    function size( ): number {
        var size: number = 0;
        for ( var i = 0; i < countdots(); i++ ) {
            size += getdot(i + 1).NumberOfInputs();
        }
        return size;
    }

//
// ─── GET DEGREE OF VERTEX ───────────────────────────────────────────────────────
//

    function degree( dot: any ): number {
        return KaryGraph.API.AbstractionLayer.DotByDotOrId( dot ).GetDegree( );
    }

//
// ─── CHECK IF DOTS ARE NEIGHBORS ────────────────────────────────────────────────
//

    function neighbors( a: any, b: any ): boolean {
        try {
            return ( <KaryGraph.Dot> a ).IsConnectedTo( b );
        } catch ( err ) {
            let d1 = getdot( a );
            let d2 = getdot( b );
            return d1.IsConnectedTo( d2 );
        }
    }

//
// ─── GET NEIGHBORHOOD ───────────────────────────────────────────────────────────
//

    function neighborhood( dot: any ): KaryGraph.Dot[] {
        try {
            return ( <KaryGraph.Dot> dot ).GetNeighbors( );
        } catch ( err ) {
            return getdot( dot ).GetNeighbors( );
        }
    }

//
// ─── RESTART SCREEN ─────────────────────────────────────────────────────────────
//

    function cls( ) {
        KaryGraph.UI.Programmer.ClearNotebookScreen( );
    }

// ────────────────────────────────────────────────────────────────────────────────






//
// ──────────────────────────────────────────────────────────────────────── III ──────────
//  :::::: S T A N D A R D   L I B R A R Y : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────
//

//
// ─── RANGE ──────────────────────────────────────────────────────────────────────
//

    function range( start: number, end: number ): Array<number> {
        return Array.from( new Array( end - start + 1 ), ( x, i ) => i + start )
    }

//
// ─── COMLETE GRAPH ──────────────────────────────────────────────────────────────
//

    function completegraph( size: number ) {
        KaryGraph.API.StandardLibrary.CreateCompleteGraph( size );
    }


//
// ─── EULERIAN PATH ? ────────────────────────────────────────────────────────────
//

    function eulerianpath( ): boolean {
        var verticesWithOddDegree = KaryGraph.API.AbstractionLayer.NumberOfOddVertices();
        return (verticesWithOddDegree == 0 || verticesWithOddDegree == 2);
    }

//
// ─── EULERIAN CYCLE ? ───────────────────────────────────────────────────────────
//

    function euleriancycle( ): boolean {
        var verticesWithOddDegree = KaryGraph.API.AbstractionLayer.NumberOfOddVertices( );
        return ( verticesWithOddDegree == 0 );
    }

//
// ─── BFS Without Steps ──────────────────────────────────────────────────────────────
//

    function bfs( start: number ) {
        return KaryGraph.API.StandardLibrary.Algorithms.BFS( getdot( start ), -1 );
    }

// ────────────────────────────────────────────────────────────────────────────────



//
// ──────────────────────────────────────────────── IV ──────────
//  :::::: M A T H : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────
//

//
// ─── RND ────────────────────────────────────────────────────────────────────────
//

    function rnd( num: number ): number {
        return KaryGraph.Random( num );
    }

//
// ─── RADIAN ─────────────────────────────────────────────────────────────────────
//

    function radian( num: number ): number {
        return num * ( Math.PI / 180 );
    }

//
// ─── SIN ────────────────────────────────────────────────────────────────────────
//

    function sin( num: number ): number {
        return Math.sin( radian( num ) );
    }

//
// ─── COS ────────────────────────────────────────────────────────────────────────
//

    function cos( num: number ): number {
        return Math.cos( radian( num ) );
    }

// ────────────────────────────────────────────────────────────────────────────────
