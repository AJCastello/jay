import "./Button.style.scss";
export declare type ButtonType = {
    id?: string;
    tag?: string;
    style?: string;
    events?: Array<{
        name: string;
        callback: (e: Event) => void;
    }>;
    content: string | Function | Node;
    className?: string | Function;
    attributes?: Array<{
        name: string;
        value: string;
    }>;
    click?: () => void;
};
export declare const Button: (props: ButtonType) => HTMLElement;
//# sourceMappingURL=Button.d.ts.map