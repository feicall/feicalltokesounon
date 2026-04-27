import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "site-language";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "fr";
    }

    return localStorage.getItem(STORAGE_KEY) || "fr";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isFrench: language === "fr",
      isEnglish: language === "en",
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
