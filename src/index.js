import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import intl from "react-intl-universal";
import ThemeLyra from "./ThemeLyra";
import { locales } from "./locales";

const App = props => {
  useEffect(() => {
    let newLanguage = "pt-BR";

    if (window.navigator.language && locales[window.navigator.language]) {
      newLanguage = window.navigator.language;
    }

    intl
      .init({
        locales,
        fallbackLocale: "pt-BR",
        currentLocale: newLanguage
      })
      .then(() => {});
  }, []);

  return <ThemeLyra />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
