import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import IconBar from "../components/IconBar.jsx";
import Background from "../assets/watercolor-img.png"


const Intro = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false); // toggle for navbar at top of page
    const navRef = useRef();

    // Hook that listens for click anywhere on the document outside navRef (navbar)
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            navRef.current &&
            !navRef.current.contains(event.target) &&
            menuOpen
          ) {
            setMenuOpen(false);
          }
        };
      
        document.addEventListener("mousedown", handleClickOutside);
      
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [menuOpen]);

    return (
        <IntroSectionContainer id="intro">
            <MenuWrapper>
                <NavbarBurger onClick={() => setMenuOpen(!menuOpen)}>
                    <span />
                    <span />
                    <span />
                </NavbarBurger>
                <NavBar ref={navRef} menuOpen={menuOpen}>
                    <CloseButton onClick={() => setMenuOpen(false)}>×</CloseButton>
                    <a href="#tech" onClick={() => setMenuOpen(false)}>{t("nav.tech")}</a>
                    <a href="#education" onClick={() => setMenuOpen(false)}>{t("nav.education")}</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>{t("nav.projects")}</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>{t("nav.skills")}</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>{t("nav.contact")}</a>
                </NavBar>
                <LanguageSwitcher />
            </MenuWrapper>
            
            <IntroContentWrapper>
                <TopWrapper>
                    <h1>Emma <br />Holtegaard</h1>
                    <p>{t("intro.bio1")}</p>
                    <p>{t("intro.bio2")}</p>
                    <IconBar />
                </TopWrapper>

                <BottomWrapper>
                    <p>{t("intro.teaser")}</p>
                    <p></p>
                </BottomWrapper>
            </IntroContentWrapper>
        </IntroSectionContainer>
    )
}

export default Intro;


const IntroSectionContainer = styled.section`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 20px 0px 20px;
  background-color: #D39DAB;
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

    @media (max-width: 1050px){
        width: 90%;
        justify-content: center;
    } 

    @media (max-width: 800px){
    width: 95%;
    flex-direction: row-reverse;
    justify-content: flex-start;
    }  
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

    @media (max-width: 800px) {
    flex-direction: column;
    position: absolute;
    top: 40px;
    right: 20px;
    background: rgba(30, 30, 30, 0.90);
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.4);
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    z-index: 10;

    a {
      font-size: 1rem;
      margin: 10px 0;
    }

    }
`

const NavbarBurger = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    padding: 10px;

    span {
      width: 25px;
      height: 3px;
      background: white;
      border-radius: 2px;
      transition: 0.3s ease;
    }
  }
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  margin-bottom: 10px;

  @media (min-width: 801px) {
    display: none;
  }
`;


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
      margin-bottom: 35px;
      
      @media (max-width: 1050px){
        text-align: center;
        }   
    }

    p {
      font-weight: 400;
      font-style: no5rmal;
      font-size: 1rem;
      text-align: justify;
      line-height: 1.8;
      margin-bottom: 10px;
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
