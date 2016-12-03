
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

namespace Graph.UI {

    //
    // ─── LOAD IMAGES ────────────────────────────────────────────────────────────────
    //

        /** Loads some of the necessary images to remove image loading lags. */
        export function LoadImagesAtStart ( ) {
            const listOfImages = [
                'toolbar-tabs-algorithms.png',
                'toolbar-tabs-programmer.png',
            ];
            listOfImages.forEach( imageResource => {
                let tempImage = new Image( );
                tempImage.src = imageResource;
            })
        }

    // ────────────────────────────────────────────────────────────────────────────────

}