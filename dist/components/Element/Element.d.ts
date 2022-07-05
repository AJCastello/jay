export declare type ElementType = {
    id?: string;
    tag: string;
    style?: string;
    events?: Array<{
        name: string;
        callback: (e: Event) => void;
    }>;
    content?: string | Function | Node;
    className?: string | Function;
    attributes?: Array<{
        name: string;
        value: string;
    }>;
    defaultClassName?: string;
};
export declare const Element: (props: ElementType) => HTMLElement;
//# sourceMappingURL=Element.d.ts.map