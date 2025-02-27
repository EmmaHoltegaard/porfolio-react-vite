import { useTranslation } from "react-i18next";
import styled from "styled-components";
import SectionContainer from "../components/SectionContainer";
import ContentWrapperHori from "../components/ContentWrapperHori.js";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import FadeInSection from "../components/FadeInSection.jsx";


const Intro = () => {
    const { t } = useTranslation();

    return (
        <FadeInSection>
        <SectionContainer height="70vh">
            <LanguageSwitcherWrapper>
                <LanguageSwitcher />
            </LanguageSwitcherWrapper>
            <ContentWrapperHori>
                <TopWrapper>
                    <h1>Portfolio</h1>
                    <h2>Emma Holtegaard</h2>
                    <p>{t("intro.teaser")}</p>
                </TopWrapper>
                <BottomWrapper>
                    <p>{t("intro.bio")}</p>
                    <IconWrapper>
                        <a href="https://www.linkedin.com/in/emmaholtegaard/" target="_blank" rel="noopener noreferrer">
                        <Icon src="/icons/linkedin.svg" alt="LinkedIn"/>
                        </a>
                        <a href="https://github.com/EmmaHoltegaard/" target="_blank" rel="noopener noreferrer">
                        <Icon src="/icons/github.svg" alt="Github"/>
                        </a>
                    </IconWrapper>
                </BottomWrapper>
            </ContentWrapperHori>
        </SectionContainer>
    </FadeInSection>
    )
}

export default Intro;

const LanguageSwitcherWrapper = styled.div`
    display: flex;
    width: 75%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 0px;
    //border: 2px solid green;
`

const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", serif;

    h1, p {
      font-weight: 500;
      font-style: normal;
      font-size: 1.7rem;
      text-align: center;
    }

    h2 {
      font-weight: 700;
      font-style: normal;
      font-size: 5rem;
      text-align: center;
    }
`

const CenterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 0px;
`

const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", serif;
    margin-top: 60px;
    
    p {
      font-weight: 500;
      font-style: normal;
      font-size: 1.125rem;
      text-align: justify;
      margin-bottom: 45px;
      width: 90%;
      max-width: 750px;
    }
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    //border: 2px black dotted;
    gap: 20px;
`

const Icon = styled.img`
    width: 35px;
    height: 35px;
    //border: pink dotted 2px;
    transition: transform 0.2s ease-in-out;
    
    &:hover {
    transform: scale(1.1); /* Slightly enlarge */
    }
   

    `