import "./NavBar.style.css";
declare type NavBarType = {
    id?: string;
    tag?: string;
    style?: Partial<CSSStyleDeclaration>;
    content: string | Function | Node | any;
    className?: string | Function;
    attributes?: Array<[string, string]>;
};
export declare const NavBar: (props: NavBarType) => HTMLElement;
export {};
