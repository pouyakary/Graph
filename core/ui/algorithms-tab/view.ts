
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace KaryGraph.UI.AlgorithmsTab {

    //
    // ─── MAKE AN ALGORITHM CONTROL VIEW ─────────────────────────────────────────────
    //

        export function MakeAlgorithmControlView (
            algorithmObject: ScriptEngine.Algorithms.IAlgorithmObject ) {
            let view = MakeViewForAlgorithm( algorithmObject );
            document.getElementById( AlgorithmsControlContainerId ).appendChild( view );
        }

    //
    // ─── GET CONTROLLER ID ──────────────────────────────────────────────────────────
    //

        export function GetControllerId ( handle: string ) {
            return 'algorithm-box-' + handle;
        }

    //
    // ─── MAKE ALGORITHM VIEW ELEMENTS ───────────────────────────────────────────────
    //

        function MakeViewForAlgorithm (
            algorithmObject: ScriptEngine.Algorithms.IAlgorithmObject ) {

            let controller = document.createElement('div');
            controller.className = AlgorithmsControllerClass;
            controller.id = GetControllerId( algorithmObject.manifest.handle );

                let title = document.createElement('div');
                title.className = AlgorithmsControllerTitleClass;
                title.innerText = algorithmObject.manifest.name;
                controller.appendChild( title );

                let author = document.createElement('div');
                author.className = AlgorithmsControllerAuthorClass;
                author.innerText = `By ${ algorithmObject.manifest.author }`;
                controller.appendChild( author );

            return controller;
        }

    // ────────────────────────────────────────────────────────────────────────────────

}