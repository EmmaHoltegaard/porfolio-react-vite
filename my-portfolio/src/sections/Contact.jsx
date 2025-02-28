import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import ContentWrapperHori from "../components/ContentWrapperHori.js";
import FadeInSection from "../components/FadeInSection.jsx";
import IconBar from "../components/IconBar.jsx";

const Contact = () => {
    const user = "emmaholtegaard";
    const domain = "proton.me"

    return (
        <SectionContainer>
            <FadeInSection>
                <ContentWrapperHori>
                    <UpperContainer>
                        <h2>Let's talk!</h2>
                        <img src="/projects/gul.JPG" />
                    </UpperContainer>
                    <MiddleContainer>
                        <p>Emma Holtegaard Hansen</p>
                        <a href={`mailto:${user}@${domain}`}>{user}@{domain}</a>
                    </MiddleContainer>
                    <IconBar />
                </ContentWrapperHori>
            </FadeInSection>
        </SectionContainer>
        
    )
}

export default Contact;

const UpperContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    h2 {
        font-size: 2.2rem;
        font-weight: bold;
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

    p {
        font-size: 1rem;
        font-weight: bolder;
    }

    a {
        text-decoration: none;
        color: #2d2b2b;
        font-weight: bolder;
        font-size: 1rem;
    }
`

const BottomContainer = styled.div``
