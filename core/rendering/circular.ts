
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryGraph.Rendering {

    //
    // ─── CIRCULAR RENDERING ─────────────────────────────────────────────────────────
    //

        /** Rearranges the dots in a circular way */
        export function RenderCircular ( ) {

            // defs
            let keys = Object.keys( Storage.Nodes );
            let radius = GetRadius( );
            let originX = GraphWidth / 2;
            let originY = GraphHeight / 2;
            let count = keys.length;
            let unit = 360 / count;

            // funcs
            function computeX ( index: number ) {
                return originX + Math.sin( ToRadians( count * index ) ) * radius;
            }

            function computeY ( index: number ) {
                return originY + Math.cos( ToRadians( count * index ) ) * radius;
            }

            // body
            for ( var i = 0; i < count; i++ ) {
                let x = computeX( i );
                let y = computeY( i );
                ( <Dot> Storage.Nodes[ keys[ i ] ] ).MoveTo( x, y );
            }
        }

    //
    // ─── GET RADIUS ─────────────────────────────────────────────────────────────────
    //

        function GetRadius ( ): number {
            return 0.35 * Math.min( GraphHeight, GraphWidth );
        }

    //
    // ─── TO RADIANS ─────────────────────────────────────────────────────────────────
    //

        /** Converts degrees to radians */
        function ToRadians ( angle: number ): number {
            return angle * ( Math.PI / 180 );
        }

    // ────────────────────────────────────────────────────────────────────────────────

}