import { useTranslation } from "react-i18next";
import styled from "styled-components";
import SectionContainer from "../components/SectionContainer";
import ContentWrapperHori from "../components/ContentWrapperHori.js";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";

const Intro = () => {
    const { t } = useTranslation();

    return (
        <SectionContainer bg="white">
            <LanguageSwitcherWrapper>
                <LanguageSwitcher />
            </LanguageSwitcherWrapper>
            <ContentWrapperHori>
                <TopWrapper>
                    <h1>Portfolio</h1>
                    <h2>Emma Holtegaard</h2>
                    <p>{t("intro.teaser")}</p>
                </TopWrapper>
                <CenterWrapper>
                    <p>billede</p>
                </CenterWrapper>
                <BottomWrapper>
                    <p>{t("intro.bio")}</p>
                    <p>indsæt ikoner her</p>
                </BottomWrapper>
            </ContentWrapperHori>
        </SectionContainer>
    )
}

export default Intro;

const LanguageSwitcherWrapper = styled.div`
    display: flex;
    width: 75%;
    flex-direction: row;
    align-items: flex-end;
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
      font-size: 1.1rem;
      text-align: center;
    }

    h2 {
      font-weight: 700;
      font-style: normal;
      font-size: 4rem;
      text-align: center;
    }
`

const CenterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 40px 0px;
`

const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 80%;
    font-family: "Poppins", serif;

    
    p {
      font-weight: 500;
      font-style: normal;
      font-size: 1.1rem;
      text-align: center;
    }
`