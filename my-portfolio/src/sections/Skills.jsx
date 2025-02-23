import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import ContentWrapperHori from "../components/ContentWrapperHori.js";
import SectionTitle from "../components/SectionTitle.js";
import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();
    return (
        <SectionContainer bg="#772F2F">
            <ContentWrapperHori>
                <SectionTitle color="white">{t("skills.title")}</SectionTitle>
                <p>This is where the Skills will go</p>
            </ContentWrapperHori>
        </SectionContainer>
    )
}

export default Skills;