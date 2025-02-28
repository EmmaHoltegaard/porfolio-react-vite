import { useTranslation } from "react-i18next";
import styled from "styled-components";
import SectionContainer from "../components/SectionContainer";
import ContentWrapperHori from "../components/ContentWrapperHori.js";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import FadeInSection from "../components/FadeInSection.jsx";
import IconBar from "../components/IconBar.jsx";
import Background from "../assets/background.png"
import ContentWrapperVert from "../components/ContentWrapperVert.js";


const Intro = () => {
    const { t } = useTranslation();

    return (
        <IntroSectionContainer>
            <FadeInSection>
            <ContentWrapperHori>
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
                    <IconBar />
                </BottomWrapper>
            </ContentWrapperHori>
            </ContentWrapperHori>
            </FadeInSection>
        </IntroSectionContainer>
    )
}

export default Intro;

const IntroSectionContainer = styled.section`
  background: #BDB153;
  background-image: url(${Background});
  background-size: 100% 100%;
  background-position: center;
  width: 100vw;
  min-height: 70vh;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 20px 30px 20px;
  //border: dotted purple 2px;
`

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
      font-size: 1.5rem;
      text-align: center;
      padding-bottom: 7px;
    }

    h2 {
      font-weight: 700;
      font-style: normal;
      font-size: 4rem;
      text-align: center;
      line-height: 1;
      margin-bottom: 15px;
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
    margin-bottom: 60px;
    
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
