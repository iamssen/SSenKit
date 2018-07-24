export interface FromTo {
    from: Date;
    to: Date;
    description?: string;
}
export interface From {
    from: Date;
    description?: string;
}
export interface Period {
    second: number;
    description?: string;
}
export interface Latest {
    latest: string;
    description?: string;
}
export declare type DateRange = FromTo | From | Period | Latest;
export declare function isFromTo(obj: any): boolean;
export declare function isFrom(obj: any): boolean;
export declare function isPeriod(obj: any): boolean;
export declare function isLatest(obj: any): boolean;
