import "./Card.style.css";
declare type CardType = {
    id?: string;
    tag?: string;
    style?: Partial<CSSStyleDeclaration>;
    content: string | Function | Node | any;
    className?: string | Function;
    attributes?: Array<{
        name: string;
        value: string;
    }>;
};
export declare const Card: (props: CardType) => HTMLElement;
export {};
