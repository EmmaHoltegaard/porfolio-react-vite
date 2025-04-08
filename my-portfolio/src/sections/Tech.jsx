import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import SectionTitle from "../components/SectionTitle.js";
import { useTranslation } from "react-i18next";
import FadeInSection from "../components/FadeInSection.jsx";
import ContentWrapperVert from "../components/ContentWrapperVert.js";

const Tech = () => {
    return (
        <SectionContainer bg="#fffaed" id="tech">
            <FadeInSection>
                <ContentWrapperVert>
                    <SectionTitle>Tech Stack</SectionTitle>
                    <Text>HTML, CSS, JavaScript ES6, JSX, <span>React</span>, React Hooks, Styled-components, Tailwind, Material UI, Flexbox, Node.js, MongoDB, SQL, <span>APIs</span>, Web Accessibility, Responsive Design, Android, <span>Java</span>, Python, Flask, mob-programming, pair-programming, GitHub, BitBucket</Text>
                </ContentWrapperVert>
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
    line-height: 2;

    span {
        background-color: #D2D277;
        padding: 0px 3px;
    }
`
