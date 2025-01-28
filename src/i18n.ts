import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Todos os pagamentos no alcance das suas mãos.": "All payments at your fingertips.",
          "Seja bem-vindo(a) à Trio: líder de mercado em alto volume de transações corporativas ágeis, livres de erros e conciliadas de ponta-a-ponta.": "Welcome to Trio: the market leader in high-volume, agile, error-free, end-to-end reconciled corporate transactions."
        }
      },
      pt: {
        translation: {}
      }
    },
    lng: localStorage.getItem("i18n") || "pt",
    fallbackLng: localStorage.getItem("i18n") || "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18next
