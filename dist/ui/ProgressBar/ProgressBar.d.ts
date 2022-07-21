import "./ProgressBar.style.css";
declare type ProgressBarType = {
    id?: string;
    tag?: string;
    size?: "small" | "medium" | "large";
    style?: Partial<CSSStyleDeclaration>;
    events?: Array<{
        name: string;
        callback: (e: Event) => void;
    }>;
    className?: string | Function;
    attributes?: Array<[string, string]>;
    value?: number;
};
interface ProgressBarInterface extends HTMLElement {
    set: (value: number) => void;
}
export declare const ProgressBar: (props: ProgressBarType) => ProgressBarInterface;
export {};
