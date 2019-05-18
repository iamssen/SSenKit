import { get, set } from 'js-cookie';
import LocaleCode from 'locale-code';

export interface GetBrowserLocaleOptions<LanguageCode> {
  cookieKey?: string;
  fallbackLanguageCodes?: LanguageCode[];
}

export function getBrowserLocale<LanguageCode extends string>({cookieKey = 'locale', fallbackLanguageCodes = []}: GetBrowserLocaleOptions<LanguageCode> = {}): LanguageCode {
  const languageCode: string | undefined = get(cookieKey);
  
  if (languageCode && LocaleCode.validate(languageCode)) {
    return languageCode as LanguageCode;
  } else {
    const userLanguage: string = navigator.language;
    const fallbackLanguageCode: LanguageCode = fallbackLanguageCodes.find((code: LanguageCode) => code === userLanguage) || fallbackLanguageCodes[0];
    set(cookieKey, fallbackLanguageCode);
    return fallbackLanguageCode;
  }
}

export interface SetBrowserLocaleOptions<LanguageCode> {
  cookieKey?: string;
}

export function setBrowserLocale<LanguageCode extends string>(languageCode: LanguageCode, {cookieKey = 'locale'}: SetBrowserLocaleOptions<LanguageCode> = {}) {
  if (LocaleCode.validate(languageCode)) {
    set(cookieKey, languageCode);
  }
}