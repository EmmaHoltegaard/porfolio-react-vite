import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "da" : "en");
    };

    return (
        <button onClick={toggleLanguage}>
            {i18n.language === "en" ? "Da" : "Eng"}
        </button>
    )
}

export default LanguageSwitcher;