
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Micha Hanselmann <m@karyfoundation.org>
//

module KaryGraph.Rendering {

    //
    // ─── SPIRAL RENDERING ───────────────────────────────────────────────────────────
    //

        /** Rearrange dots in a spiral way */
        export function RenderSpiral ( ) {

            // vars
            var x = GraphWidth / 2;
            var y = GraphHeight / 2;
            var i = 0;
            var direction = 0;
            var target = 1;
            var add = 2;

            // move
            let keys = Object.keys( Storage.Nodes );
            keys.forEach( key => {
                var dot: Dot = ( <Dot> Storage.Nodes[ key ] );
                dot.MoveTo( x, y );
                switch ( direction ) {
                    case 0:
                        y -= 40;
                        break;
                    case 1:
                        x -= 40;
                        break;
                    case 2:
                        y += 40;
                        break;
                    case 3:
                        x += 40;
                        break;
                    default:
                        break;
                }
                i++;
                if ( i == target ) {
                    direction = ( direction == 3 ) ? direction = 0 : direction += 1;
                    target += add++;
                }
            });

        }

    // ────────────────────────────────────────────────────────────────────────────────

}