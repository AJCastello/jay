export declare type DataType = string | Array<string> | boolean;
export declare type StateType = {
    set: (newData: any) => void;
    get: () => any;
    data: any;
    changes: any;
    observable: any;
};
export declare const State: <T>(data: T) => StateType;
//# sourceMappingURL=State.d.ts.map