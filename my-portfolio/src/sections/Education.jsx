import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import SectionTitle from "../components/SectionTitle.js";
import { useTranslation } from "react-i18next";
import FadeInSection from "../components/FadeInSection.jsx";
import ContentWrapperVert from "../components/ContentWrapperVert.js";
import Background from "../assets/watercolor2.png"

const Education = () => {
    const { t } = useTranslation();
    const education = t("education", { returnObjects: true });

    return (
        <SectionContainer bgImg={Background} id="education">
            <FadeInSection>
                <ContentWrapperVert>
                    <SectionTitle>{t("education.title")}</SectionTitle>
                    {education.items.map((item, index) => (
                        <Element key={index}>
                            <h3>{item.title}</h3>
                            <h4>{item.year}</h4>
                            <p>{item.description}</p>
                        </Element>
                    ))}
                </ContentWrapperVert>
            </FadeInSection>
        </SectionContainer>
    )
}

export default Education;


const Element = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0px 40px 0px;
    max-width: 800px;
    //border: 1px dotted orange;

    // Title
    h3 {
        font-size: 1.5rem;
        padding-bottom: 5px;
    }

    //year
    h4 {
        font-weight: 500;
        padding-bottom: 10px;
        font-size: 1rem;

    }

    // Description
    p {
        font-size: 1.25rem;
        line-height: 1.5;

    }
`



const Text = styled.p`
    font-weight: 500;
    font-style: normal;
    font-size: 1.2rem;
    text-align: center;
    padding: 10px;
    max-width: 850px;
`


