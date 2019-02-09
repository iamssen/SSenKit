export interface Result<LanguageCode> {
    locale: LanguageCode;
    updateLocale: (languageCode: LanguageCode) => void;
}
export interface UseLocaleOptions<LanguageCode> {
    cookieKey?: string;
}
export declare function useLocale<LanguageCode extends string>(currentLocale: LanguageCode, { cookieKey }?: UseLocaleOptions<LanguageCode>): Result<LanguageCode>;
