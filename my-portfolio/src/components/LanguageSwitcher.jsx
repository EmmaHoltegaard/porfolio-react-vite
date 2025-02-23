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
    padding: 10px 20px;
    background: black;
    color: #f9edf6;
    border: none;
    font-size: 0.8em;
    border-radius: 10px;
    font-family: "Poppins", serif;
    font-weight: 400;
    cursor: pointer;
    transition: border 0.1s ease-in-out, padding 0.1s ease-in-out;


    &:hover {
    border-right: 7px solid #BDB153;
    border-bottom: 7px solid #BDB153;
    padding: 10px 18px; /* Slight padding change to prevent jump effect */

    }
    
`

const Wrapper = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //border: blue dotted 1px;
`