// react:
import {
    default as React,
}                           from 'react'         // base technology of our nodestrap components

// cssfn:
import {
    // compositions:
    composition,
    mainComposition,
    imports,
    
    
    
    // layouts:
    layout,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react

// nodestrap components:
import {
    // react components:
    ElementProps,
    Element,
}                           from '@nodestrap/element'



// styles:
export const usesVisuallyHiddenLayout = () => {
    return composition([
        layout({
            // layouts:
            display    : 'inline-block', // use inline block, so it takes the width & height as we set
            
            
            
            // positions:
            position   : 'absolute !important',
            
            
            
            // borders:
            border     : '0 !important',
            
            
            
            // sizes:
            width      : '1px !important',
            height     : '1px !important',
            overflow   : 'hidden !important',
            clip       : 'rect(0,0,0,0) !important',
            
            
            
            // spacings:
            padding    : '0 !important',
            margin     : '-1px !important', // Fix for https://github.com/twbs/bootstrap/issues/25686
            
            
            
            // typos:
            whiteSpace : 'nowrap !important',
        }),
    ]);
};

export const useVisuallyHiddenSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesVisuallyHiddenLayout(),
        ]),
    ]),
]);



// react components:

export interface VisuallyHiddenProps<TElement extends HTMLElement = HTMLElement>
    extends
        ElementProps<TElement>
{
}
export function VisuallyHidden<TElement extends HTMLElement = HTMLElement>(props: VisuallyHiddenProps<TElement>) {
    // styles:
    const sheet = useVisuallyHiddenSheet();
    
    
    
    // jsx:
    return (
        <Element<TElement>
            // other props:
            {...props}
            
            
            // semantics:
            tag={props.tag ?? 'span'}
            
            
            // classes:
            mainClass={props.mainClass ?? sheet.main}
        >
            { props.children }
        </Element>
    );
}
export { VisuallyHidden as default }
