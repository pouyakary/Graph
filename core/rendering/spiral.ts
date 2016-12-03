
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Micha Hanselmann <m@karyfoundation.org>
//

namespace Graph.Rendering {

    //
    // ─── SPIRAL RENDERING ───────────────────────────────────────────────────────────
    //

        /** Rearrange dots in a spiral way */
        export function RenderSpiral ( ) {

            //
            // ─── ENUMS ───────────────────────────────────────────────────────
            //

                enum Direction {
                    Top, Left, Down, Right
                }

            //
            // ─── DEFS ────────────────────────────────────────────────────────
            //

                var x           = GraphWidth / 2;
                var y           = GraphHeight / 2;
                var iteration   = 0;
                var direction   = Direction.Top;
                var target      = 1;
                var add         = 2;

            //
            // ─── MOVE ────────────────────────────────────────────────────────
            //

                Object.keys( Storage.Nodes ).forEach( key => {

                    // • • • • •
                    var dot: Dot = ( <Dot> Storage.Nodes[ key ] );

                    // • • • • •
                    dot.MoveTo( x, y );

                    // • • • • •
                    switch ( direction ) {
                        case Direction.Top:
                            y -= 40;
                            break;
                        case Direction.Left:
                            x -= 40;
                            break;
                        case Direction.Down:
                            y += 40;
                            break;
                        case Direction.Right:
                            x += 40;
                            break;
                    }

                    // • • • • •
                    iteration++;

                    // • • • • •
                    if ( iteration == target ) {
                        direction = ( direction == 3 ) ? direction = 0 : direction += 1;
                        target += add++;
                    }
                });

            // ─────────────────────────────────────────────────────────────────
        }

    // ────────────────────────────────────────────────────────────────────────────────

}