

//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace Graph.ScriptEngine.EventHandler {

    //
    // ─── INTERFACES ─────────────────────────────────────────────────────────────────
    //

        export interface IDotEventFunction {
            ( dotId: string ): void;
        };

        export interface IDotEvents {
            [key: string]: IDotEventFunction[ ];
        }


    //
    // ─── EVENT RUNNER ───────────────────────────────────────────────────────────────
    //

        export function RunEvents ( kind: string, dotId: string ) {
            Storage.DotEvents[ kind ].forEach( eventFunc => {
                try {
                    eventFunc( Storage.Nodes[ dotId ]);
                } catch ( e ) {};
            });
        }

    // ────────────────────────────────────────────────────────────────────────────────

}