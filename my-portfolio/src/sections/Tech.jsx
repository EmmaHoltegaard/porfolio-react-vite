import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import ContentWrapperHori from "../components/ContentWrapperHori.js";
import SectionTitle from "../components/SectionTitle.js";
import { useTranslation } from "react-i18next";

const Tech = () => {
    return (
        <SectionContainer>
            <ContentWrapperHori bg="#EA362F">
                <SectionTitle>Tech</SectionTitle>
                <Text>JavaScript, React, HTML/CSS, Flexbox, Java, Python, Node.js, APIs, mob-programming, pair-programming, GitHub, BitBucket</Text>
            </ContentWrapperHori>
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
`
