
//
// Copyright 2016 Kary Foundation, Inc.
//   Authors: Pouya Kary <k@karyfoundation.org>
//            Micha Hanselmann <h@karyfoundation.org>
//            Sina Bakhtiari <sinabakh@karyfoundation.org>
//


//
// ────────────────────────────────────────────────── I ──────────
//  :::::: G R A P H : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

//
// ─── CREATE DOT ─────────────────────────────────────────────────────────────────
//

    /**
     * Creates a new dot at a random coordination.
     * https://github.com/karyfoundation/graph/wiki/API#new-dot
     */
    function newdot ( ): Graph.Dot {
        return Graph.API.AbstractionLayer.AddNewDot( );
    }

//
// ─── NEW DOT AT ─────────────────────────────────────────────────────────────────
//

    /**
     * Creates a new dot at a specified coordination.
     * https://github.com/karyfoundation/graph/wiki/API#new-dot-at
     */
    function newdotat ( x: number, y: number ): Graph.Dot {
        return new Graph.Dot( x , y );
    }

//
// ─── NEW DOTS ───────────────────────────────────────────────────────────────────
//

    /**
     * Creates a number of dots at some random places.
     * https://github.com/karyfoundation/graph/wiki/API#new-dots
     */
    function newdots ( howmuch: number ): Array<Graph.Dot> {
        var dots = new Array<Graph.Dot>( );
        for ( var counter = 0; counter < howmuch; counter++ )
            dots.push( Graph.API.AbstractionLayer.AddNewDot( ) );
        return dots;
    }

//
// ─── GETDOT ─────────────────────────────────────────────────────────────────────
//

    /**
     * gets a dot with it's numerical id.
     * https://github.com/karyfoundation/graph/wiki/API#get-dot
     */
    function getdot ( numberId: number ): Graph.Dot {
        return Graph.API.AbstractionLayer.GetDotByNumberId( numberId );
    }

//
// ─── GET DOTS ───────────────────────────────────────────────────────────────────
//

    /**
     * returns an array of dots based on the array of their ids.
     * https://github.com/karyfoundation/graph/wiki/API#get-dots
     */
    function getdots ( ids: Array<number> ): Array<Graph.Dot> {
        let result = new Array<Graph.Dot>( );
        for ( let id of ids )
            result.push( getdot( id ) );
        return result;
    }

//
// ─── FOR ALL DOTS DO ────────────────────────────────────────────────────────────
//

    /**
     * Does a function to each dot in the array.
     */
    function foreachdot ( dots: Array<Graph.API.AbstractionLayer.DotObjectOrDotID>,
                          f: ( dot: Graph.Dot ) => void ) {
        for ( let dotOrId of dots )
            f( Graph.API.AbstractionLayer.GetDotByDotOrId( dotOrId ) );
    }

//
// ─── FOR ALL DOTS DO ────────────────────────────────────────────────────────────
//

    /**
     * Does a function to all the dots around.
     */
    function foralldots ( f: ( dot: Graph.Dot ) => void ) {
        Object.keys( Graph.Storage.Nodes ).forEach( key => {
            f( Graph.Storage.Nodes[ key ] );
        });
    }

//
// ─── ALL  ───────────────────────────────────────────────────────────────────────
//

    /**
     * Returns an array of dot's of all the dots.
     */
    function all ( ): Array<number> {
        return range( 1 , Graph.Dot.TotalDots );
    }

//
// ─── CONNECT ────────────────────────────────────────────────────────────────────
//

    /**
     * Connects an array of dots together
     * https://github.com/karyfoundation/graph/wiki/API#connect
     */
    function connect ( args: Array<Graph.API.AbstractionLayer.DotObjectOrDotID> ): boolean {
        let result = false;
        for ( var i = 1; i < args.length; i++ ) {
            let d1 = Graph.API.AbstractionLayer.GetDotByDotOrId( args[ i - 1 ] );
            let d2 = Graph.API.AbstractionLayer.GetDotByDotOrId( args[ i ] );
            d1.ConnectTo( d2 );
            //FIXME Should be true only if the connection is really established.
            result = true;
        }
        return result;
    }

//
// ─── CONNECT AS FAN ─────────────────────────────────────────────────────────────
//

    /**
     * Connects an array of dots like a fan.
     * https://github.com/karyfoundation/graph/wiki/API#fan
     */
    function fan ( args: Array<Graph.API.AbstractionLayer.DotObjectOrDotID> ): boolean {
        let result = false;
        for ( var i = 1; i < args.length; i++ ) {
            let d1 = Graph.API.AbstractionLayer.GetDotByDotOrId( args[ 0 ] );
            let d2 = Graph.API.AbstractionLayer.GetDotByDotOrId( args[ i ] );
            d1.ConnectTo( d2 );
        }
        return result;
    }

//
// ─── DISCONNECT ─────────────────────────────────────────────────────────────────
//

    /**
     * Disconnects two dots from each other.
     * https://github.com/karyfoundation/graph/wiki/API#disconnect
     */
    function disconnect ( a: Graph.API.AbstractionLayer.DotObjectOrDotID,
                          b: Graph.API.AbstractionLayer.DotObjectOrDotID ): boolean {
        let d1 = Graph.API.AbstractionLayer.GetDotByDotOrId( a );
        let d2 = Graph.API.AbstractionLayer.GetDotByDotOrId( b );
        return d1.DisconnectFrom( d2 );
    }

//
// ─── Has Edge ─────────────────────────────────────────────────────────────────
//

    /**
     * Checks if two dots are connected to each other.
     * https://github.com/karyfoundation/graph/wiki/API#has-edge
     */
    function hasEdge ( start: Graph.API.AbstractionLayer.DotObjectOrDotID,
                         end: Graph.API.AbstractionLayer.DotObjectOrDotID ) {
          let d1 = Graph.API.AbstractionLayer.GetDotByDotOrId( start );
          let d2 = Graph.API.AbstractionLayer.GetDotByDotOrId( end );
          return d1.IsConnectedTo( d2 );
    }

//
// ─── CLEAN SCREEN ───────────────────────────────────────────────────────────────
//

    /**
     * Removes all dots and resets the environment.
     * https://github.com/karyfoundation/graph/wiki/API#reset
     */
    function reset ( ) {
        Graph.API.AbstractionLayer.Reset( );
    }

//
// ─── GET MATRIX OF GRAPH ────────────────────────────────────────────────────────
//

    /**
     * Returns the adjacency matrix of the the specified dots in graph.
     * https://github.com/karyfoundation/graph/wiki/API#matrix
     */
    function matrix ( input?: Array<Graph.API.AbstractionLayer.DotObjectOrDotID>): number[][] {
        if ( input === undefined ) {
            return Graph.API.AbstractionLayer.CreateMatrix( all( ) );
        } else {
            return Graph.API.AbstractionLayer.CreateMatrix( input );
        }
    }

//
// ─── CREATE GRAPH FROM MATRIX ───────────────────────────────────────────────────
//

    /**
     * Creates the graph represented by an adjacency matrix.
     * https://github.com/karyfoundation/graph/wiki/API#graph-from-matrix
     */
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

    /**
     * Returns the number of dots.
     * https://github.com/karyfoundation/graph/wiki/API#count-dots
     */
    function countdots ( ): number {
        return Graph.Dot.TotalDots;
    }

//
// ─── MOVE COMMAND ───────────────────────────────────────────────────────────────
//

    /**
     * Moves a dot to coordinates (x, y).
     * https://github.com/karyfoundation/graph/wiki/API#move
     */
    function move ( dot: Graph.API.AbstractionLayer.DotObjectOrDotID, x: number, y: number ) {
        Graph.API.AbstractionLayer.GetDotByDotOrId( dot ).MoveTo( x, y );
    }

//
// ─── MOVE TO X ──────────────────────────────────────────────────────────────────
//

    /**
     * Moves a dot to the given x coordinate.
     * https://github.com/karyfoundation/graph/wiki/API#move-to-x
     */
    function movex ( dot: Graph.API.AbstractionLayer.DotObjectOrDotID, x: number ) {
        let d = Graph.API.AbstractionLayer.GetDotByDotOrId( dot );
        d.MoveTo( x, d.Position.Y );
    }

//
// ─── MOVE TO Y ──────────────────────────────────────────────────────────────────
//

    /**
     * Moves a dot to the given x coordinate.
     * https://github.com/karyfoundation/graph/wiki/API#move-to-y
     */
    function movey ( dot: Graph.API.AbstractionLayer.DotObjectOrDotID, y: number ) {
        let d = Graph.API.AbstractionLayer.GetDotByDotOrId( dot );
        d.MoveTo( d.Position.X, y );
    }

//
// ─── MOVE BY X ──────────────────────────────────────────────────────────────────
//

    /**
     * Moves a dot by the given x coordinate.
     * https://github.com/karyfoundation/graph/wiki/API#move-by-x
     */
    function movebx ( dot: Graph.API.AbstractionLayer.DotObjectOrDotID, x: number ) {
        let d = Graph.API.AbstractionLayer.GetDotByDotOrId( dot );
        d.MoveTo( d.Position.X + x, d.Position.Y );
    }

//
// ─── MOVE BY Y ──────────────────────────────────────────────────────────────────
//

    /**
     * Moves a dot by the given y coordinate.
     * https://github.com/karyfoundation/graph/wiki/API#move-by-y
     */
    function moveby ( dot: Graph.API.AbstractionLayer.DotObjectOrDotID, y: number ) {
        let d = Graph.API.AbstractionLayer.GetDotByDotOrId( dot );
        d.MoveTo( d.Position.X, d.Position.Y + y );
    }

//
// ─── RENDERING ──────────────────────────────────────────────────────────────────
//

    function render ( option: string ) {
        Graph.API.AbstractionLayer.Render( option );
    }

//
// ─── SORT BY INPUTS ─────────────────────────────────────────────────────────────
//

    /**
     * Rearranges the (tree-based) graph to a tree.
     * https://github.com/karyfoundation/graph/wiki/API#tree
     */
    function sort ( ) {
        Graph.API.StandardLibrary.Sortings.Tree( );
    }

//
// ─── GET ORDER OF GRAPH ─────────────────────────────────────────────────────────
//

    /**
     * Returns the order of the graph.
     * https://github.com/karyfoundation/graph/wiki/API#order
     */
    function order ( ): number {
        return countdots();
    }

//
// ─── GET SIZE OF GRAPH ──────────────────────────────────────────────────────────
//

    /**
     * Returns the size of the graph made of the specified dots in array.
     * https://github.com/karyfoundation/graph/wiki/API#size
     */
    function size ( dots?: Array<Graph.API.AbstractionLayer.DotObjectOrDotID> ): number {
        var size: number = 0;
        if ( dots === undefined )
            for ( var i = 0; i < Graph.Dot.TotalDots; i++ )
                size += getdot(i + 1).NumberOfInputs();
        else
            for ( var i = 0; i < dots.length; i++ )
                size += Graph.API.AbstractionLayer.GetDotByDotOrId( dots[ i ] ).NumberOfInputs( );
        return size;
    }

//
// ─── GET DEGREE OF VERTEX ───────────────────────────────────────────────────────
//

    /**
     * Returns the degree of a vertex.
     * https://github.com/karyfoundation/graph/wiki/API#degree
     */
    function degree ( dot: Graph.API.AbstractionLayer.DotObjectOrDotID ): number {
        return Graph.API.AbstractionLayer.GetDotByDotOrId( dot ).GetDegree( );
    }

//
// ─── CHECK IF DOTS ARE NEIGHBORS ────────────────────────────────────────────────
//

    /**
     * Checks if two dots are neighbors.
     * https://github.com/karyfoundation/graph/wiki/API#neighbors
     */
    function neighbors ( a: Graph.API.AbstractionLayer.DotObjectOrDotID,
                         b: Graph.API.AbstractionLayer.DotObjectOrDotID ): boolean {
        let d1 = Graph.API.AbstractionLayer.GetDotByDotOrId( a );
        let d2 = Graph.API.AbstractionLayer.GetDotByDotOrId( b );
        return d1.IsConnectedTo( d2 );
    }

//
// ─── GET NEIGHBORHOOD ───────────────────────────────────────────────────────────
//

    /**
     * Returns the neighborhood of a dot.
     * https://github.com/karyfoundation/graph/wiki/API#get-neighborhood
     */
    function neighborhood ( dot: Graph.API.AbstractionLayer.DotObjectOrDotID ): Graph.Dot[] {
        return Graph.API.AbstractionLayer.GetDotByDotOrId( dot ).GetNeighbors( );
    }

//
// ─── RESTART SCREEN ─────────────────────────────────────────────────────────────
//

    /**
     * Cleans the notebook screen.
     * https://github.com/karyfoundation/graph/wiki/API#clear-screen
     */
    function cls ( ) {
        Graph.UI.Programmer.ClearNotebookScreen( );
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
        return Array.from( new Array( end - start + 1 ), ( x, i ) => i + start );
    }

//
// ─── COMPLETE GRAPH ─────────────────────────────────────────────────────────────
//

    function completegraph( size: number ) {
        Graph.API.StandardLibrary.CreateCompleteGraph( size );
    }


//
// ─── EULERIAN PATH ? ────────────────────────────────────────────────────────────
//

    /**
     * Checks if graph is an Eulerian Path.
     * https://github.com/karyfoundation/graph/wiki/API#eulerian-path
     */
    function eulerianpath( ): boolean {
        var verticesWithOddDegree = Graph.API.AbstractionLayer.NumberOfOddVertices( );
        return ( verticesWithOddDegree == 0 || verticesWithOddDegree == 2 );
    }

//
// ─── EULERIAN CYCLE ? ───────────────────────────────────────────────────────────
//

    /**
     * Checks if graph is an Eulerian Cycle.
     * https://github.com/karyfoundation/graph/wiki/API#eulerian-cycle
     */
    function euleriancycle( ): boolean {
        var verticesWithOddDegree = Graph.API.AbstractionLayer.NumberOfOddVertices( );
        return ( verticesWithOddDegree == 0 );
    }

//
// ─── BFS Without Steps ──────────────────────────────────────────────────────────────
//

    function bfs( start: number ) {
        return Graph.API.StandardLibrary.Algorithms.BFS( getdot( start ), -1 );
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

    function rnd ( num: number ): number {
        return Graph.Random( num );
    }

//
// ─── RADIAN ─────────────────────────────────────────────────────────────────────
//

    function radian ( num: number ): number {
        return num * ( Math.PI / 180 );
    }

//
// ─── SIN ────────────────────────────────────────────────────────────────────────
//

    function sin ( num: number ): number {
        return Math.sin( radian( num ) );
    }

//
// ─── COS ────────────────────────────────────────────────────────────────────────
//

    function cos ( num: number ): number {
        return Math.cos( radian( num ) );
    }

// ────────────────────────────────────────────────────────────────────────────────



//
// ──────────────────────────────────────────────────────────── V ──────────
//   :::::: G R A P H   V I E W : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//

//
// ─── WIDTH ──────────────────────────────────────────────────────────────────────
//

    function width ( ): number {
        return Graph.API.AbstractionLayer.GetGraphViewWidth( );
    }

//
// ─── HEIGHT ─────────────────────────────────────────────────────────────────────
//

    function height ( ): number {
        return Graph.API.AbstractionLayer.GetGraphViewHeight( );
    }

// ────────────────────────────────────────────────────────────────────────────────



//
// ──────────────────────────────────────────────────────────────────────────────────────── VI ──────────
//   :::::: K A R Y   F O U N D A T I O N   S P E C I A L S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────
//

//
// ─── KARY HORSE ─────────────────────────────────────────────────────────────────
//

    /** A very small easter... */
    function kary ( ) {
        Graph.API.KaryFoundation.CreateKaryHorseGraph( );
    }

// ────────────────────────────────────────────────────────────────────────────────



//
// ─── LANGUAGE EXTENSIONS ────────────────────────────────────────────────────────
//

    function using ( library: string ) {
        return NodeRequire( JoinPath([
                GetHomeDir( ),
                Graph.GraphUserFolderPath,
                Graph.GraphUserFolderForLibraries,
                library
        ]));
    }

// ────────────────────────────────────────────────────────────────────────────────
