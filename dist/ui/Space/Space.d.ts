import "./Space.style.css";
declare type SpaceType = {
    id?: string;
    tag?: string;
    size?: "small" | "medium" | "large";
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
export declare const Space: (props: SpaceType) => HTMLElement;
export {};
