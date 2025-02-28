import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import ContentWrapperHori from "../components/ContentWrapperHori.js";
import SectionTitle from "../components/SectionTitle.js";
import { useTranslation } from "react-i18next";
import FadeInSection from "../components/FadeInSection.jsx";

const Tech = () => {
    return (
        <SectionContainer bg="#BDB153">
            <FadeInSection>
                <ContentWrapperHori>
                    <SectionTitle>Tech Stack</SectionTitle>
                    <Text>JavaScript, React, HTML/CSS, Flexbox, Node.js, APIs, Java, Python, mob-programming, pair-programming, GitHub, BitBucket</Text>
                </ContentWrapperHori>
            </FadeInSection>
        </SectionContainer>
    )
}

export default Tech;

const Text = styled.p`
    font-family: "Poppins", serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1.2rem;
    text-align: center;
    padding: 10px;
    max-width: 850px;
`
