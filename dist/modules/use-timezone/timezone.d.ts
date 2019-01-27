export interface Timezone {
    countryCode: string;
    countryName: string;
    zoneName: string;
    gmtOffset: number;
    timestamp: number;
}
export declare const timezoneList: Timezone[];
export declare const timezoneMap: Map<string, Timezone>;
export declare function getTimezone(zoneName: string): Timezone;
export declare function getBrowserTimezone(cookieKey?: string): string;
export declare function setBrowserTimezone(nextTimezone: string | Timezone, cookieKey?: string): Timezone;
