import "./TextField.style.css";
declare type TextFieldType = {
    id?: string;
    tag?: string;
    type?: string;
    style?: Partial<CSSStyleDeclaration>;
    value?: string;
    events?: Array<{
        name: string;
        callback: (e: Event) => void;
    }>;
    className?: string | Function;
    attributes?: Array<[string, string]>;
    placeholder?: string;
    keyup?: (e: Event) => void;
    change?: (e: Event) => void;
    keydown?: (e: Event) => void;
    keypress?: (e: Event) => void;
};
export declare const TextField: (props: TextFieldType) => HTMLInputElement;
export {};
