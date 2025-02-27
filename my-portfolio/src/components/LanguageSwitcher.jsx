import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "da" : "en");
    };

    return (
        <Wrapper>
            <Button onClick={toggleLanguage}>
                {i18n.language === "en" ? "DA" : "ENG"}
            </Button>
        </Wrapper>
    )
}

export default LanguageSwitcher;

const Button = styled.button`
    padding: 8px 16px;
    background: #2d2b2b;
    color: #f9edf6;
    border: none;
    font-size: 0.7em;
    border-radius: 13px;
    font-family: "Poppins", serif;
    font-weight: 400;
    cursor: pointer;
    transition: border 0.2s ease-in-out, padding 0.2s ease-in-out;


    &:hover {
    border-right: 3px solid #BDB153;
    border-bottom: 5px solid #BDB153;
    //padding: 10px 18px; /* Slight padding change to prevent jump effect */

    }
    
`

const Wrapper = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    //border: blue dotted 1px;
`