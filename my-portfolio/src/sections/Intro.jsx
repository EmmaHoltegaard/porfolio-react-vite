import { useTranslation } from "react-i18next";
import styled from "styled-components";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import FadeInSection from "../components/FadeInSection.jsx";
import IconBar from "../components/IconBar.jsx";
import Background from "../assets/background.png"
import ContentWrapperVert from "../components/ContentWrapperVert.js";


const Intro = () => {
    const { t } = useTranslation();

    return (
        <IntroSectionContainer>
            <LanguageSwitcher />
                <IntroContentWrapper>
                    <ContentWrapperVert>
                        <TopWrapper>
                            <h1>Portfolio</h1>
                            <h2>Emma Holtegaard</h2>
                            <p>{t("intro.teaser")}</p>
                        </TopWrapper>
                        <BottomWrapper>
                            <p>{t("intro.bio")}</p>
                            <IconBar />
                        </BottomWrapper>
                    </ContentWrapperVert>
                </IntroContentWrapper>
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
  min-height: 100vh;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 20px 0px 20px;
  //border: dotted purple 2px;
`

const IntroContentWrapper = styled.div`
width: 80%;
max-width: 1200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
//border: dotted blue 2px;
border-radius: 40px;
background:#E4EDED;

@media (max-width: 500px){
        width: 90%;
    }

@media (max-width: 500px){
    width: 95%;
}
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
      font-size: 1rem;
      text-align: center;
      padding-bottom: 7px;
    }

    // Name
    h2 {
      font-weight: 700;
      font-style: normal;
      font-size: 3rem;
      text-align: center;
      line-height: 1;
      margin-bottom: 15px;   
    }


    @media (max-width: 420px){
        h2{
            font-size: 2rem;
        }
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
    margin-top: 50px;
    
    // Decription
    p {
      font-weight: 500;
      font-style: normal;
      font-size: 1.125rem;
      text-align: justify;
      margin-bottom: 55px;
      width: 90%;
      max-width: 750px;
    }
`
