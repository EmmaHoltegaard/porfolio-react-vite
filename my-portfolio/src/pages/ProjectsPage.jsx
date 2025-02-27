import SectionTitle from "../components/SectionTitle"
import SectionContainer from "../components/SectionContainer";
import FadeInSection from "../components/FadeInSection";
import ContentWrapperHori from "../components/ContentWrapperHori";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ProjectsPage = () => {
    const { t } = useTranslation();
    const projectsList = t("projects.projectList", { returnObjects: true }); //returns array of projects (only first 5)


    return(
        <SectionContainer>
            <FadeInSection>
                <ContentWrapperHori>
                    <SectionTitle>{t("projects.titleAll")}</SectionTitle>
                    <ProjectListWrapper>
                        {/* Map over array of projects, and call ProjectCard for each + pass projectinfo as props */}
                        {projectsList.map((project, index) => (
                            <ProjectCard 
                                key={index}
                                title={project.title}
                                image={project.image}
                                labels={project.labels}
                                description={project.description}
                                code={project.code}
                                demo={project.demo}
                            />
                            ))
                        } 
                    </ProjectListWrapper>
                </ContentWrapperHori>
            </FadeInSection>
        </SectionContainer>
    )
}

export default ProjectsPage;

const ProjectListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px dotted red;
    gap: 25px;
`