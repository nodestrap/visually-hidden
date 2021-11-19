// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
// nodestrap components:
import { Element, } from '@nodestrap/element';
// styles:
export const usesVisuallyHiddenLayout = () => {
    return composition([
        layout({
            // layouts:
            display: 'inline-block',
            // positions:
            position: 'absolute !important',
            // borders:
            border: '0 !important',
            // sizes:
            width: '1px !important',
            height: '1px !important',
            overflow: 'hidden !important',
            clip: 'rect(0,0,0,0) !important',
            // spacings:
            padding: '0 !important',
            margin: '-1px !important',
            // typos:
            whiteSpace: 'nowrap !important',
        }),
    ]);
};
export const usesVisuallyHidden = () => {
    return composition([
        imports([
            // layouts:
            usesVisuallyHiddenLayout(),
        ]),
    ]);
};
export const useVisuallyHiddenSheet = createUseSheet(() => [
    mainComposition([
        imports([
            usesVisuallyHidden(),
        ]),
    ]),
]);
export function VisuallyHidden(props) {
    // styles:
    const sheet = useVisuallyHiddenSheet();
    // jsx:
    return (<Element 
    // other props:
    {...props} 
    // semantics:
    tag={props.tag ?? 'span'} 
    // classes:
    mainClass={props.mainClass ?? sheet.main}>
            {props.children}
        </Element>);
}
export { VisuallyHidden as default };
