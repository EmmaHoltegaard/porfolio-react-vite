import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "da" : "en");
    };

    return (
        <OuterWrapper>
            <InnerWrapper>
                <Button onClick={toggleLanguage}>
                    {i18n.language === "en" ? "DA" : "ENG"}
                </Button>
            </InnerWrapper>
        </OuterWrapper>
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
    font-weight: bold;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: border 0.2s ease-in-out, padding 0.2s ease-in-out;


    &:hover {
    border-right: 3px solid #BDB153;
    border-bottom: 5px solid #BDB153;
    //padding: 10px 18px; /* Slight padding change to prevent jump effect */

    }
    
`

const InnerWrapper = styled.div`
    width: 70px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    //border: blue dotted 1px;
`

const OuterWrapper = styled.div`
    display: flex;
    width: 75%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 0px;
    //border: 2px solid green;
`