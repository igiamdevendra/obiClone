import i18n from "i18next";
import { initReactI18next } from "react-i18next";

async function setupI18n() {
  await i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          welcome: "Welcome to my app!",
          description: "This is an i18next example.",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });
}

export default setupI18n;
