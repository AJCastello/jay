import "./Button.style.css";
export declare type ButtonType = {
    id?: string;
    tag?: string;
    style?: Partial<CSSStyleDeclaration>;
    events?: Array<{
        name: string;
        callback: (e: Event) => void;
    }>;
    content: string | Function | Node | any;
    className?: string | Function;
    attributes?: Array<[string, string]>;
    click?: () => void;
};
export declare const Button: (props: ButtonType) => HTMLElement;
