
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
            var circle = new Dot( x , y );
            Graph.push( circle ); 
        }

    //
    // ─── GENERATE RANDOM NODES ──────────────────────────────────────────────────────
    //

        /** Generates some random nodes on the screen */
        export function GenerateSomeRandomNodes( howManyNodes: number ) {
            // defs
            const widthUnit = 10;
            const heightUnit = 4;
            const padding = 2;
            var map: Array<number> = CreatePlacesArray( widthUnit, heightUnit );
            // funcs
            function isPlaceNotTakenAt( x: number, y: number ) {
                return ( map[ widthUnit * x + y ] === 0 );
            }
            function takeMapAt( x: number, y: number ) {
                map[ widthUnit * x + y ] = 1;
            }
            function ComputeRealXCoordinate( unit: number ) {
                return ( ( ( padding + unit ) * GraphWidth ) / ( widthUnit + 2 * padding ) ) * 2;
            }
            function ComputeRealYCoordinate( unit: number ) {
                return ( ( ( padding + unit ) * GraphHeight ) / ( heightUnit + 2 * padding ) ) * 1.1;
            }
            // body
            var counter = 0;
            while ( counter < howManyNodes ) {
                var x: number = Random( widthUnit  );
                var y: number = Random( heightUnit );
                if ( isPlaceNotTakenAt( x, y ) ) {
                    CreateNode( 
                        ComputeRealXCoordinate( x ),
                        ComputeRealYCoordinate( y )
                    );
                    takeMapAt( x , y );
                    counter++;
                }
            }   
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
            // defs
            var widthUnit = 10;
            var heightUnit = 6;
            var places: Array<number> = CreatePlacesArray( widthUnit, heightUnit );
            // generate
            for ( var index = 0; index < howManyTimes; index++ ) {
                var d1 = GetRandomDot( );
                var d2 = GetRandomDot( );
                d1.ConnectTo( d2 );
            }
        }

        /** Populates the places array */
        function CreatePlacesArray( w: number, h: number ): Array<number> {
            var result = new Array<number> ( );
            for ( var counter = 0; counter < ( w * h ); counter++ ) {
                result.push( 0 );
            }
            return result;
        }

        /** Picks up a dot randomly */
        function GetRandomDot( ) {
            return Graph[ Random( Graph.length ) ];
        }

    // ────────────────────────────────────────────────────────────────────────────────
    
} 