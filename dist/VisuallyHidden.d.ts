/// <reference types="react" />
import { ElementProps } from '@nodestrap/element';
export declare const usesVisuallyHiddenLayout: () => import("@cssfn/cssfn").StyleCollection;
export declare const usesVisuallyHidden: () => import("@cssfn/cssfn").StyleCollection;
export declare const useVisuallyHiddenSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export interface VisuallyHiddenProps<TElement extends HTMLElement = HTMLElement> extends ElementProps<TElement> {
}
export declare function VisuallyHidden<TElement extends HTMLElement = HTMLElement>(props: VisuallyHiddenProps<TElement>): JSX.Element;
export { VisuallyHidden as default };
