export interface GetBrowserLocaleOptions<LanguageCode> {
    cookieKey?: string;
    fallbackLanguageCodes?: LanguageCode[];
}
export declare function getBrowserLocale<LanguageCode extends string>({ cookieKey, fallbackLanguageCodes }?: GetBrowserLocaleOptions<LanguageCode>): LanguageCode;
export interface SetBrowserLocaleOptions<LanguageCode> {
    cookieKey?: string;
}
export declare function setBrowserLocale<LanguageCode extends string>(languageCode: LanguageCode, { cookieKey }?: SetBrowserLocaleOptions<LanguageCode>): void;
