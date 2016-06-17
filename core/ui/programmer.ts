
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

declare function GetProgrammerCode( ): string;

module KaryGraph.UI.Programmer {

        export function RunCode( ) {
            let code = GetProgrammerCode( );
            KaryGraph.ScriptEngine.Run( code );
        }

}