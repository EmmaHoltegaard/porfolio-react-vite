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
                    {i18n.language === "en" ? "da" : "eng"}
                </Button>
            </InnerWrapper>
        </OuterWrapper>
    )
}

export default LanguageSwitcher;



const Button = styled.button`
  position: relative;
  padding: 8px 10px;
  background: #7b7325;
  color: white;
  border: none;
  font-size: 0.8em;
  border-radius: 13px;
  font-family: "Poppins", serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  cursor: pointer;
  overflow: hidden;
  z-index: 0;
  transition: color 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255,255,255,0.15), rgba(255,255,255,0));
    transition: left 0.4s ease-in-out;
    z-index: 1;
  }

  &:hover::after {
    left: 0;
  }

  &:hover {
    color: #ffffff; /* Optional: a touch brighter on hover */
  }
`;

const InnerWrapper = styled.div`
    width: 70px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //border: blue dotted 1px;
`

const OuterWrapper = styled.div`
    display: flex;
    width: 80px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    margin-left: 10px;
    //border: 2px solid green;
`