declare type ImageType = {
    id?: string;
    tag?: string;
    src?: string | Function | Node | any;
    style?: Partial<CSSStyleDeclaration>;
    events?: Array<{
        name: string;
        callback: (e: Event) => void;
    }>;
    className?: string | Function;
    attributes?: Array<{
        name: string;
        value: string;
    }>;
};
export declare const Img: (props: ImageType) => HTMLImageElement;
export {};
