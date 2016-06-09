
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── SCREEN TOOLS ───────────────────────────────────────────────────────────────
//
    
    // gets the width and height from computed style.
    function getPaperComputedSizes( ) {
		var paperObject = document.getElementById( paperId );
		var paperStyle  = window.getComputedStyle( paperObject, null );
		var width       = parseInt( paperStyle.getPropertyValue('width') );
		var height      = parseInt( paperStyle.getPropertyValue('height') );
        var top         = paperObject.getBoundingClientRect().top;
		return [ width, height, top ];
	}

    // generate random screen corordinates
	function generateScreenCoordinate ( input ) {
        input /= 2;
		return ( input / 2 ) + ( Math.floor( Math.random( ) * input ) ) - 30;
	}

//
// ─── DRAG ───────────────────────────────────────────────────────────────────────
//

    circleDragMove = function ( dx, dy, posx, posy ) {
        posy -= screenTop;
        this.attr({ 
            cx: posx, 
            cy: posy, 
        });
        transformLinesBasedOnCircle( this, posx, posy ); 
    }

    circleDragStrat = function ( ) {
        transformCircleOnStart( this );
        this.animate({ r: radiusHoverSize }, 40 );
    }

    circleDragStop = function ( ) {
        this.animate({ r: radiusSize }, 100 );
    }

//
// ─── CIRCLE ─────────────────────────────────────────────────────────────────────
//

    // generats some 
    function generateSomeCircle( howManyCircle ) {
        for ( var counter = 0; counter < howManyCircle; counter++ ) {
            circles.push( generateRandomCircle( counter ) );
        }
    }

    // generate random circle
    function generateRandomCircle( counter ) {
        var x = ( screenWidth / 13 ) * ( counter + 2 );
        var y = generateScreenCoordinate( screenHeight );
        return createCircle( x , y );
    }

    // creates a circle object
    function createCircle( x , y ) {
        var circle = paper.circle( x , y , radiusSize );
        circle.drag( circleDragMove, circleDragStrat, circleDragStop );
        return circle;
    }

    // to change state at move
    function transformCircleOnMove( circle , dx, dy ) {
        circle.attr({
            transform: circle.data('origTransform') + (circle.data('origTransform') ? "T" : "t") + [ dx, dy ]
        });
    }

    // to change state at drag's start
    function transformCircleOnStart( circle ) {
        circle.data('origTransform', circle.transform().local );
    }

//
// ─── DRAG LINE HANDLERS ─────────────────────────────────────────────────────────
//

    // transforms the lines of a circle 
    // based on the new circle coordinates.
    function transformLinesBasedOnCircle( circle, x, y ) {
        // defs
        circleEntry = connections[ circle.id ];
        var leftLines = circleEntry['left'];
        var rightLines = circleEntry['right'];
        // body
        if ( leftLines.length !== 0 ) {
            transformLineArray( leftLines , { 
                x2: x, y2: y 
            });
        }
        if ( rightLines.length !== 0 ) {
            transformLineArray( rightLines , {
                x1: x, y1: y
            });
        }
    }

    function transformLineArray( arr, attributes ) {
        for ( var counter = 0; counter < arr.length; counter++ ) {
            var line = arr[ counter ];
            line.attr( attributes );
        }
    } 

//
// ─── LINES ──────────────────────────────────────────────────────────────────────
//
    
    // creates a line object
    function createLine( x1, y1, x2, y2 ) {
        var line = paper.line( 
            x1 + radiusSize, 
            y1 + radiusSize, 
            x2 + radiusSize, 
            y2 + radiusSize
        );
        line.attr({
            stroke: 'black',
			strokeWidth: 4,
			strokeLinecap: 'round'
        });
        return line;
    }

//
// ─── ATTACHING LINES ────────────────────────────────────────────────────────────
//

    // attach lines ot circles
    function attachLinesToModel( ) {
        var countOfCircles = circles.length;
        initConnectionStructure( countOfCircles );
        if ( countOfCircles > 1 ) {
            for ( var index = 1; index < countOfCircles; index++ ) {
                var c1 = circles[ index - 1];
                var c2 = circles[ index ];
                connectCircles( c1, c2 );
            }
        }
    }

    function connectCircles( c1, c2 ) {
        var line = createLineBasedOnCircles( c1, c2 );
        attachLineToCircle( c1, line, 'right' );
        attachLineToCircle( c2, line, 'left' );
    }

    // create a line based on circles
    function createLineBasedOnCircles( c1, c2 ) {
        var c1bb = c1.getBBox( );
        var c2bb = c2.getBBox( );
        return createLine( c1bb['x'], c1bb['y'], c2bb['x'], c2bb['y'] );
    }

    // inits the base structure of the connection struct
    function initConnectionStructure( countOfCircles ) {
        for ( var count = 0; count < countOfCircles; count++ ) {
            var circleId = circles[ count ].id;
            connections[ circleId ] = {
                'right': [ ],
                'left': [ ],
            };
        }
    }

    // Attach line to circle
    function attachLineToCircle( circle, line, where ) {
        connections[ circle.id ][ where ].push( line );
    }

//
// ─── INIT ───────────────────────────────────────────────────────────────────────
//

    // initing parameters...
    function initParameters( ) {
        // paper...
           paper = Snap(`#${ paperId }`);
        // Generate groups
           graph = { };
           lines = [ ]
           circles = [ ]
           connections = { };
        // Init Screen Size
           var windowStyle = getPaperComputedSizes( );
           screenWidth = windowStyle[ 0 ];
           screenHeight = windowStyle[ 1 ];
           screenTop = windowStyle[ 2 ];
    }

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    // where the program starts
    function main( ) {
        initParameters( );
        generateSomeCircle( 10 );
        attachLinesToModel( );
    }

// ────────────────────────────────────────────────────────────────────────────────


