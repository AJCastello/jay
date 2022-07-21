declare type IconType = {
    id?: string;
    tag?: string;
    name?: string;
    style?: Partial<CSSStyleDeclaration>;
    events?: Array<{
        name: string;
        callback: (e: Event) => void;
    }>;
    className?: string | Function;
    attributes?: Array<[string, string]>;
};
export declare const Icon: (props: IconType) => HTMLElement;
export {};
