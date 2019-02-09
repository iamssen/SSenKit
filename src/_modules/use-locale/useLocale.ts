import LocaleCode from 'locale-code';
import { useCallback, useState } from 'react';
import { setBrowserLocale } from './locale';

export interface Result<LanguageCode> {
  locale: LanguageCode;
  updateLocale: (languageCode: LanguageCode) => void;
}

export interface UseLocaleOptions<LanguageCode> {
  cookieKey?: string;
}

export function useLocale<LanguageCode extends string>(currentLocale: LanguageCode, {cookieKey = 'locale'}: UseLocaleOptions<LanguageCode> = {}): Result<LanguageCode> {
  const [locale, setLocale] = useState<LanguageCode>(currentLocale);
  
  const updateLocale: (nextLanguageCode: LanguageCode) => void = useCallback((nextLanguageCode: LanguageCode) => {
    if (LocaleCode.validate(nextLanguageCode)) {
      setLocale(nextLanguageCode);
      setBrowserLocale(nextLanguageCode, {cookieKey});
    }
  }, []);
  
  return {
    locale,
    updateLocale,
  };
}