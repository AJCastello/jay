declare type SectionType = {
    id?: string;
    tag?: string;
    style?: string;
    events?: Array<{
        name: string;
        callback: (e: Event) => void;
    }>;
    content: string | Function | Node | any;
    className?: string | Function;
    attributes?: Array<{
        name: string;
        value: string;
    }>;
};
export declare const Section: (props: SectionType) => HTMLElement;
export {};
//# sourceMappingURL=Section.d.ts.map