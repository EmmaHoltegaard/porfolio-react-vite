import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import da from "./locales/da.json";
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      resources: {
        en: { translation: en },
        da: { translation: da }
      },
      lng: "en", // Default language
      fallbackLng: "en", // Fallback if translation is missing
      interpolation: { escapeValue: false },
      detection: {
        order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage', 'cookie']
      }
    });
  
export default i18n;