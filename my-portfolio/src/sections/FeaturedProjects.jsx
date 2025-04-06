import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import SectionTitle from "../components/SectionTitle.js";
import { useTranslation } from "react-i18next";
import FadeInSection from "../components/FadeInSection.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { Link } from "react-router-dom"
import ContentWrapperVert from "../components/ContentWrapperVert.js";

const FeaturedProjects = () => {
    const { t } = useTranslation();
    const n = 5; // Number of project to display
    const projectsList = t("projects.projectList", { returnObjects: true }).slice(0, n); //returns array of projects (only first n)

    return (
        <SectionContainer id="projects" bg="#fffaed">
            <FadeInSection>
                <ContentWrapperVert >
                    <SectionTitle>{t("projects.title")}</SectionTitle>
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
                                codeLink={project.codeLink}
                                demoLink={project.demoLink}
                            />
                            ))
                        } 
                    </ProjectListWrapper>
                    <ButtonWrapper>
                        <StyledLink to="/projects"><MoreButton>{t("projects.more")}<Icon src="/icons/arrowblack.png" /></MoreButton></StyledLink>
                    </ButtonWrapper>
                </ContentWrapperVert>
            </FadeInSection>
        </SectionContainer>
    )
}

export default FeaturedProjects;


const ProjectListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    //border: 2px dotted red;
    gap: 60px;
    padding-top: 60px;
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 250px;
    margin: 120px auto 20px;
`

const MoreButton = styled.button`
    // background: #2d2b2b;
    // color: #E4EDED;
    color: #2d2b2b;
    border: #2d2b2b 2px solid;
    //background: #BDB153;
    background: #fffaed;
    border-radius: 10px;
    font-size: 1.2rem;
    padding: 15px 25px;
    font-weight: bold;
    cursor: pointer;
    //border: none;
    transition: border 0.2s ease-in-out;
    font-family: "Poppins", serif;
    display: flex;
    align-items: center;
    gap: 12px;


    &:hover {
        //border-right: 3px solid #2d2b2b;
        //border-bottom: 4px solid #2d2b2b;
        border: 3px solid #2d2b2b;
    }
`

const StyledLink = styled(Link)`
   text-decoration: none;
`

const Icon = styled.img`
    height: 25px;
    width: 25px;
    transform: rotate(180deg)
`