
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph {

    //
    // ─── GENERATE RANDOM NODES ──────────────────────────────────────────────────────
    //

        /** Generates some random nodes on the screen */
        export function GenerateSomeRandomNodes( howManyNodes: number ) {
            // defs
            const baseUnit = 120;
            const widthUnit = Math.floor( GraphWidth / baseUnit );
            const heightUnit = Math.floor( GraphHeight / baseUnit );
            const paddingLeftRight = 1;
            const paddingTopBottom = 1;

            // places map
            var map: Array<number> = CreatePlacesArray( widthUnit, heightUnit );

            // funcs
            function isPlaceNotTakenAt( x: number, y: number ) {
                return ( map[ ( widthUnit * y ) + x ] == 0 );
            }
            function takeMapAt( x: number, y: number ) {
                map[ ( widthUnit * y ) + x ] = 1;
            }
            function ComputeRealXCoordinate( unit: number ) {
                return ( GraphWidth / ( widthUnit + 3 * paddingLeftRight ) ) * ( unit + 2 *  paddingLeftRight );
            }
            function ComputeRealYCoordinate( unit: number ) {
                return ( GraphHeight / ( heightUnit + 2 * paddingTopBottom ) ) * ( unit + paddingTopBottom );
            }

            // body
            var counter = 0;
            while ( counter < howManyNodes ) {
                var x: number = Random( widthUnit  );
                var y: number = Random( heightUnit );
                if ( isPlaceNotTakenAt( x, y ) ) {
                    new Dot(
                        ComputeRealXCoordinate( x ),
                        ComputeRealYCoordinate( y )
                    );
                    takeMapAt( x , y );
                    counter++;
                }
            }
        }

        /** Gets a random number in range of ***0..input*** */
        export function Random( input: number ) {
            return Math.floor( Math.random( ) * input );
        }

    //
	// ─── CONNECT NODES RANDOMLY ─────────────────────────────────────────────────────
	//
        
        /** Connects some of the dots to each other randomly */
        export function AddRandomConnections ( howManyTimes: number ) {
            // generate
            for ( var index = 0; index < howManyTimes; ) {
                var d1 = GetRandomDot( );
                var d2 = GetRandomDot( );
                if ( d1.ConnectTo( d2 ) ) {
                    index++;
                }
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
            var keys = Object.keys( Storage.Nodes );
            return Storage.Nodes[ keys[ Random( keys.length ) ] ];
        }

    // ────────────────────────────────────────────────────────────────────────────────

}