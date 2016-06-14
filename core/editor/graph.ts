
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

/// <reference path="dot/dot.ts" />
/// <reference path="../ui/view.ts" /> 
/// <reference path="../constants.ts" />

module KaryGraph {

    //
    // ─── CREATE NODE ────────────────────────────────────────────────────────────────
    //

        export function CreateNode ( x: number, y: number ) {
            var circle = new Dot( x, y );
            Graph.push( circle ); 
        }

    //
    // ─── GENERATE RANDOM NODES ──────────────────────────────────────────────────────
    //

        /** Generates some random nodes on the screen */
        export function GenerateSomeRandomNodes( howManyNodes: number ) {
            for ( var counter = 0; counter < howManyNodes; counter++ ) {
                var x: number = GenerateRandomCoordinations( GraphWidth );
                var y: number = GenerateRandomCoordinations( GraphHeight );
                CreateNode( x, y );
            }   
        }

        /** Generates a random screen cordinates */
        function GenerateRandomCoordinations ( input: number ) {
            input /= 2;
		    return ( input / 2 ) + Random( input ) - 30;
        }

        /** Gets a random number in range of ***0..input*** */
        function Random( input: number ) {
            return Math.floor( Math.random( ) * input );
        }

    //
	// ─── CONNECT NODES RANDOMLY ─────────────────────────────────────────────────────
	//
        
        /** Connects some of the dots to each other randomly */
        export function AddRandomConnections ( howManyTimes: number ) {
            for ( var index = 0; index < howManyTimes; index++ ) {
                var d1 = GetRandomDot( );
                var d2 = GetRandomDot( );
                d1.ConnectTo(  d2 );
            }
        }

        /** Picks up a dot randomly */
        function GetRandomDot( ) {
            return Graph[ Random( Graph.length ) ];
        }

    // ────────────────────────────────────────────────────────────────────────────────
    
} 