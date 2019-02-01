export interface Result<LanguageCode> {
    locale: LanguageCode;
    updateLocale: (languageCode: LanguageCode) => void;
}
export declare function useLocale<LanguageCode extends string>(currentLocale: LanguageCode): Result<LanguageCode>;
