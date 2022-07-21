export declare type ElementType = {
    id?: string;
    tag: string;
    style?: Partial<CSSStyleDeclaration>;
    events?: Array<{
        name: string;
        callback: (e: Event) => void;
    }>;
    content?: string | Function | Node;
    className?: string | Function;
    attributes?: Array<[string, string]>;
    defaultClassName?: string;
};
export declare const Element: (props: ElementType) => HTMLElement;
