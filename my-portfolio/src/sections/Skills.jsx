import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import ContentWrapperHori from "../components/ContentWrapperHori.js";
import SectionTitle from "../components/SectionTitle.js";
import { useTranslation } from "react-i18next";
import FadeInSection from "../components/FadeInSection.jsx";

const Skills = () => {
    const { t } = useTranslation();
    return (
        <SectionContainer bg="#BDB153">
            <FadeInSection>
                <ContentWrapperHori>
                    <SectionTitle>{t("skills.title")}</SectionTitle>
                    <p>This is where the Skills will go</p>
                </ContentWrapperHori>
            </FadeInSection>
        </SectionContainer>
    )
}

export default Skills;