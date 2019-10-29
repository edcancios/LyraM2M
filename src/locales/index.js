import intl from "react-intl-universal";

import ptBrJson from "./pt-BR.json";

export const suportedLocales = ["pt-BR"];

export const locales = {
  "pt-BR": ptBrJson
};

export const loadLocales = () => {
  let currentLocale;

  currentLocale = intl.determineLocale({
    urlLocaleKey: "lang",
    cookieLocaleKey: "lang"
  });

  if (!suportedLocales.find(language => language === currentLocale)) {
    currentLocale = "pt-BR";
  }

  return currentLocale;
};

export const updateLocales = language => {
  let currentLocale = intl.getInitOptions();
  currentLocale = currentLocale.currentLocale;

  if (!language) {
    currentLocale = intl.determineLocale({
      urlLocaleKey: "lang",
      cookieLocaleKey: "lang"
    });
  }

  if (suportedLocales.find(value => value === language)) {
    currentLocale = language;
  }

  return currentLocale;
};

export default {
  locales,
  loadLocales,
  updateLocales,
  suportedLocales
};
