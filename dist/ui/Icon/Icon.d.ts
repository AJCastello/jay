declare type IconType = {
    id?: string;
    tag?: string;
    name?: string;
    style?: string;
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
export declare const Icon: (props: IconType) => HTMLElement;
export {};
