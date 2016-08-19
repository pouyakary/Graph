
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

module KaryFoundation.Comment {

    //
    // ─── GLOBALS ────────────────────────────────────────────────────────────────────
    //

        export enum Style { Section, Ending };

    //
    // ─── MAIN ───────────────────────────────────────────────────────────────────────
    //

        export function Generate ( style: Style, 
                       languageCharacter: string,
                                 tabSize: number,
                            insertSpaces: boolean,
                                   text?: string,
                                   flag?: number ): string {
            // here
            oneLineCommentSign          = languageCharacter;
            currentLineString           = text;
            currentTabSize              = tabSize;
            currentInsertSpacesStatus   = insertSpaces;

            // line processing...
            processCurrentLine( );

            // switcher
            switch ( style ) {
                case Style.Section:
                    return generateSectionCommentBasedOnIndentation( );

                case Style.Ending:
                    return onGenerateLineComment( );
            }
        }

    //
    // ─── CONSTANTS ──────────────────────────────────────────────────────────────────
    //

        const commentLineCharacter = '\u2500';
        const lineFormat = /^\s*([a-z ]|[0-9][0-9\.]*)+\s*$/i;

    //
    // ─── INTERFACES ─────────────────────────────────────────────────────────────────
    //

        interface IFirstLineSpacings {
            tabs: number;
            spaces: number;
        }

    //
    // ─── DEFS ───────────────────────────────────────────────────────────────────────
    //

        // Environmental information
        var oneLineCommentSign:         string;
        var currentLineString:          string;
        var currentInsertSpacesStatus:  boolean;
        var currentTabSize:             number;

        // Information for processing...
        var linesFirstSpacing:          IFirstLineSpacings;
        var realIndentationSize:        number;
        var relativeIndentationSize:    number;

    //
    // ─── PROCESS CURRENT LINE ───────────────────────────────────────────────────────
    //

        function processCurrentLine ( ) {
            linesFirstSpacing       = getFirstSpacingOfTheLine( );
            realIndentationSize     = getRealIndentationSize( );
            relativeIndentationSize = getKFCSRelativeIndentation( realIndentationSize );
        }

    //
    // ─── GET SPACING FOR THE FIRST OF THE LINE ──────────────────────────────────────
    //

        function getFirstSpacingOfTheLine ( ) {
            let tabs = 0;
            let spaces = 0;
            let index = 0;

            while ( index < currentLineString.length ) {
                switch ( currentLineString[ index ] ) {
                    case '\t':
                        tabs++;
                        index++;
                        break;

                    case ' ':
                        spaces++;
                        index++;
                        break;

                    default:
                        return { 'tabs': tabs, 'spaces': spaces };
                }
            }
            return { 'tabs': tabs, 'spaces': spaces };
        }

    //
    // ─── GET INDENTATION SIZE ───────────────────────────────────────────────────────
    //

        function getRealIndentationSize ( ) {
            return linesFirstSpacing.tabs + Math.floor( linesFirstSpacing.spaces / currentTabSize );
        }

    //
    // ─── GET RELATIVE INDENTATION SIZE ──────────────────────────────────────────────
    //

        function getKFCSRelativeIndentation ( realIndentation ) {
            return Math.floor( realIndentation / 2 );
        }

    //
    // ─── INDENT BASED ON THE INDENTATION INFO ───────────────────────────────────────
    //

        function generateIndentation ( ) {
            return repeat( ' ' , linesFirstSpacing.spaces ) + computeTabs( linesFirstSpacing.tabs );
        }

    //
    // ─── REPEAT TEXT ────────────────────────────────────────────────────────────────
    //

        function repeat ( text, times ) {
            let result = '';
            for ( let index = 0; index < times; index ++ ) {
                result += text;
            }
            return result;
        }

    //
    // ─── GET TAB ────────────────────────────────────────────────────────────────────
    //

        function computeTabs ( tabs ) {
            if ( currentInsertSpacesStatus ) {
                return repeat( ' ' , currentTabSize * tabs );
            } else {
                return repeat( '\t' , tabs );
            }
        }

    //
    // ─── GENERATE ADDITIONAL SPACINGS ───────────────────────────────────────────────
    //

        function generateAdditionalSpacingsForComments ( ) {
            let spacings = `\n${ generateIndentation( ) }`;
            if ( relativeIndentationSize < 2 ) {
                spacings += computeTabs( 1 );
            }
            return spacings;
        }

    // ────────────────────────────────────────────────────────────────────────────────



    //
    // ────────────────────────────────────────────────────────────────────────── II ──────────
    //  :::::: S E L E C T I O N   C O M M E N T : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────
    //

    //
    // ─── GENERATE COMMENT ───────────────────────────────────────────────────────────
    //

        function generateSectionComment ( width ) {
            const text = currentLineString.toUpperCase( ).trim( );
            const indentationText = generateIndentation( );

            // line 1
            let result = `${ indentationText }${ oneLineCommentSign }\n`;

            // line 2
            result += `${ indentationText }${ oneLineCommentSign } ${ repeat( commentLineCharacter , 3 )} ${ text } ${ repeat( commentLineCharacter, width - text.length - 5 ) }\n`;

            // line 3
            result += `${ indentationText }${ oneLineCommentSign }\n`

            // done
            return result;
        }

    //
    // ─── GENERATE INSECTION COMMENTS ────────────────────────────────────────────────
    //

        function generateInSectionComments ( ) {
            const text = currentLineString.toUpperCase( ).trim( );
            const indentationText = generateIndentation( );

            // line 1
            let result = `${ indentationText }${ oneLineCommentSign }\n`;

            // line 2
            result += `${ indentationText }${ oneLineCommentSign } ${ text }\n`;

            // line 3
            result += `${ indentationText }${ oneLineCommentSign }\n`

            // done
            return result;
        }


    //
    // ─── GENERATE COMMENT BASED ON INDENTATION ──────────────────────────────────────
    //

        function generateSectionCommentBasedOnIndentation ( ): string {

            let comment;

            switch ( relativeIndentationSize ) {
                case 0:
                    comment = generateSectionComment( 80 );
                    break;
                case 1:
                    comment = generateSectionComment( 65 );
                    break;
                default:
                    comment = generateInSectionComments( );
                    break;
            }

            return comment + generateAdditionalSpacingsForComments( );
        }

    // ────────────────────────────────────────────────────────────────────────────────




    //
    // ──────────────────────────────────────────────────────────────── III ──────────
    //  :::::: L I N E   C O M M E N T : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────
    //

    //
    // ─── GENERATE LINE COMMENT ──────────────────────────────────────────────────────
    //

        function generateLineComment ( width ) {
            return `${ generateIndentation( ) }${ oneLineCommentSign } ${ repeat( commentLineCharacter, width ) }\n`;
        }

    //
    // ─── GENERATE SEPARATOR COMMENTS ────────────────────────────────────────────────
    //

        function generateSeparatorComments ( ) {
            return `${ generateIndentation( ) }${ oneLineCommentSign } • • • • •`;
        }

    //
    // ─── ON GENERATE LINE ───────────────────────────────────────────────────────────
    //

        function onGenerateLineComment ( ): string {
            switch ( relativeIndentationSize ) {
                case 0:
                    return generateLineComment( 80 );
                case 1:
                    return generateLineComment( 65 );
                default:
                    return generateSeparatorComments( );
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}