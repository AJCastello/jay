declare type Route = {
    path: string;
    element: () => HTMLElement;
    target: HTMLElement;
};
declare type MatchType = {
    result: Array<string>;
    route: Route;
};
declare type ParamsType = {
    [key: string]: string;
};
export declare const getParams: () => ParamsType;
export declare const getPotentialMatch: () => MatchType;
export declare const Router: (routes?: Route[]) => void;
export declare const Navigate: (path: string) => void;
export {};
