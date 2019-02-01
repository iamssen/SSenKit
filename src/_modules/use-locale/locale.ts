import { get, set } from 'js-cookie';
import LocaleCode from 'locale-code';

export function getBrowserLocale<LanguageCode extends string>(cookieKey: string = 'locale'): LanguageCode {
  const languageCode: string | undefined = get(cookieKey);
  
  if (languageCode && LocaleCode.validate(languageCode)) {
    return languageCode as LanguageCode;
  } else {
    return 'en-US' as LanguageCode;
  }
}

export function setBrowserLocale<LanguageCode extends string>(languageCode: LanguageCode, cookieKey: string = 'locale') {
  if (LocaleCode.validate(languageCode)) {
    set(cookieKey, languageCode);
  }
}