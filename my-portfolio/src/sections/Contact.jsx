import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import ContentWrapperHori from "../components/ContentWrapperHori.js";
import FadeInSection from "../components/FadeInSection.jsx";

const Contact = () => {
    return (
        <SectionContainer>
            <FadeInSection>
                <ContentWrapperHori>
                    <h1>Contact</h1>
                    <p>This is where the Contact will go</p>
                </ContentWrapperHori>
            </FadeInSection>
        </SectionContainer>
        
    )
}

export default Contact;

const ProjectListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px dotted red;
    gap: 25px;
`