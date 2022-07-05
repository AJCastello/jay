import "./NavBar.style.scss";
declare type NavBarType = {
    id?: string;
    tag?: string;
    style?: string;
    content: string | Function | Node | any;
    className?: string | Function;
    attributes?: Array<{
        name: string;
        value: string;
    }>;
};
export declare const NavBar: (props: NavBarType) => HTMLElement;
export {};
//# sourceMappingURL=NavBar.d.ts.map