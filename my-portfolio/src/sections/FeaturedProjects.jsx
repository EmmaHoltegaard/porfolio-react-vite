import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import ContentWrapperHori from "../components/ContentWrapperHori.js";
import SectionTitle from "../components/SectionTitle.js";
import { useTranslation } from "react-i18next";

const FeaturedProjects = () => {
    const { t } = useTranslation();
    return (
        <SectionContainer>
            <ContentWrapperHori>
                <SectionTitle>{t("projects.title")}</SectionTitle>
                <p>This is where the Featured Projects will go</p>
            </ContentWrapperHori>
        </SectionContainer>
    )
}

export default FeaturedProjects;