declare type SectionType = {
    id?: string;
    tag?: string;
    style?: Partial<CSSStyleDeclaration>;
    events?: Array<{
        name: string;
        callback: (e: Event) => void;
    }>;
    content?: string | Function | Node | any;
    className?: string | Function;
    attributes?: Array<[string, string]>;
};
export declare const Section: (props: SectionType) => HTMLElement;
export {};
