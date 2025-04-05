import { useTranslation } from "react-i18next";
import styled from "styled-components";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import IconBar from "../components/IconBar.jsx";
import Background from "../assets/watercolor-img.png"


const Intro = () => {
    const { t } = useTranslation();

    return (
        <IntroSectionContainer id="intro">
            <MenuWrapper>
                <NavBar>
                    <a href="#tech">{t("nav.tech")}</a>
                    <a href="#education">{t("nav.education")}</a>
                    <a href="#projects">{t("nav.projects")}</a>
                    <a href="#skills">{t("nav.skills")}</a>
                    <a href="#contact">{t("nav.contact")}</a>
                </NavBar>
                <LanguageSwitcher />
            </MenuWrapper>
            
            <IntroContentWrapper>
                <TopWrapper>
                    <h1>Emma <br />Holtegaard</h1>
                    <p>{t("intro.bio")}</p>
                    <IconBar />
                </TopWrapper>

                <BottomWrapper>
                    <p>{t("intro.teaser")}</p>
                </BottomWrapper>
            </IntroContentWrapper>
        </IntroSectionContainer>
    )
}

export default Intro;


const IntroSectionContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 20px 0px 20px;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  //overflow: hidden;
  color: white;
  //border: dotted purple 2px;
`


const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
    //border: 2px dotted blue;
`

const NavBar = styled.nav`
    display: flex;
    //border: 2px dotted pink;
    justify-content: center;
    align-items: center;
    gap: 40px;
    a {
        text-decoration: none;
        color: white;
        font-size: 1.25rem;
        &:hover {
            text-decoration:underline
        }
    }
`

const IntroContentWrapper = styled.div`
width: 80%;
max-width: 1200px;
min-height: 80vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
//border: dotted blue 2px;
border-radius: 40px;


@media (max-width: 500px){
        width: 90%;
    }

@media (max-width: 500px){
    width: 95%;
}

@media (max-width: 1050px){
    align-items: center;
}
`

const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: "Poppins", serif;
    margin-top: 20px;
    //border: red dotted 2px;
    @media (max-width: 1050px){
    align-items: center;
}

    // Name
    h1 {
      font-weight: 300;
      font-style: normal;
      font-size: 5rem;
      text-align: left;
      line-height: 1;
      margin-bottom: 50px;
      
      @media (max-width: 1050px){
        text-align: center;
        }   
    }

    p {
      font-weight: 400;
      font-style: no5rmal;
      font-size: 1.5rem;
      text-align: justify;
      line-height: 1.6;
      margin-bottom: 40px;
      width: 90%;
      max-width: 750px;
      @media (max-width: 1050px){
        text-align: center;
        }   

    }


    @media (min-width: 1400px){
        margin-top: 60px;
    }
    
    @media (min-width: 1550px){
        margin-top: 100px;
    }  

    @media (max-width: 550px){
        h1{
            font-size: 4rem;
        }
      }

    @media (max-width: 420px){
        h1{
            font-size: 3rem;
        }
      }

`

/*
const MiddleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-family: "Poppins", serif;
    margin-top: 50px;
    
    // Decription
    p {
      font-weight: 500;
      font-style: normal;
      font-size: 1.3rem;
      text-align: justify;
      line-height: 1.6;
      margin-bottom: 55px;
      width: 90%;
      max-width: 750px;
    }
`*/

const BottomWrapper=styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    justify-content: center;
    font-family: "Poppins", serif;
    margin-top: 50px;

    @media (max-width: 1050px){
        align-items: center;
        } 

    p {
        font-weight: 300;
      font-style: normal;
      font-size: 1.6rem;
      text-align: right;
      line-height: 1.6;
      margin-bottom: 20px;
      width: 90%;
      max-width: 750px;

      @media (max-width: 1050px){
        text-align: center;
        }   
      
      }
`
