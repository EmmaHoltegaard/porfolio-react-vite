import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import ContentWrapperVert from "../components/ContentWrapperVert.js";
import FadeInSection from "../components/FadeInSection.jsx";
import IconBar from "../components/IconBar.jsx";
import Background  from "../assets/watercolor-img.png"
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    const user = "emmaholtegaard";
    const domain = "proton.me"

    return (
        <SectionContainer id="contact" bgImg={Background}>
            <FadeInSection>
                <ContentWrapperVert>
                    <UpperContainer>
                        <h2>{t("contact.call")}</h2>
                        <img src="/projects/gul.JPG" />
                    </UpperContainer>
                    <MiddleContainer>
                        <p>Emma Holtegaard Hansen</p>
                        <a href={`mailto:${user}@${domain}`}>{user}@{domain}</a>
                    </MiddleContainer>
                    <IconBar />
                </ContentWrapperVert>
            </FadeInSection>
        </SectionContainer>
        
    )
}

export default Contact;

const UpperContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    h2 {
        font-size: 2.2rem;
        font-weight: 600;
    }

    img {
        height: 190px;
        width: 190px;
        border-radius: 100px;
    }

`

const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 40px auto 40px auto;
    color: white;

    p {
        font-size: 1rem;
        font-weight: 500;
    }

    a {
        text-decoration: none;
        color: white;
        font-weight: 500;
        font-size: 1rem;
    }
`

const BottomContainer = styled.div``
