import messages from 'generated/locales.json';
import React, { Context, createContext, ReactNode, useContext } from 'react';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
import { IntlProvider } from 'use-react-intl';
import { useLocale } from './context-states/useLocale';
import { LanguageCode } from './data-types/locale';

addLocaleData(en);
addLocaleData(ko);

export interface AppContextProviderProps {
  currentLocale: LanguageCode;
  children: ReactNode;
}

export interface AppContextState {
  locale: LanguageCode;
  updateLocale: (languageCode: LanguageCode) => void;
}

// @ts-ignore
const AppContext: Context<AppContextState> = createContext<AppContextState>();

export function AppContextProvider({children, currentLocale}: AppContextProviderProps) {
  const {locale, updateLocale} = useLocale(currentLocale);
  
  return (
    <IntlProvider locale={locale.slice(0, 2)} messages={messages[locale]}>
      <AppContext.Provider value={{
        locale,
        updateLocale,
      }}>
        {children}
      </AppContext.Provider>
    </IntlProvider>
  );
}

export function useAppContextState(): AppContextState {
  return useContext(AppContext);
}