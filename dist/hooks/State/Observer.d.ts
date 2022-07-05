export declare type DataType = string | Array<string> | boolean;
export declare type StateType = {
    set: (newData: any) => void;
    get: () => any;
    data: DataType;
    changes: any;
    observable: any;
};
export declare const Observer: (state: StateType, change?: undefined | (() => any), execute?: boolean) => (setProp: Function, obj: any) => void;
//# sourceMappingURL=Observer.d.ts.map