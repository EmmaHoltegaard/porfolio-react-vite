import SectionTitle from "../components/SectionTitle"
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useState } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";

const ProjectsPage = () => {
    const { t } = useTranslation();
    const projectsList = t("projects.projectList", { returnObjects: true }); //returns array of projects (only first 5)

    // State for "selected"-filter
    const  [selectedFilter, setSelectedFilter] = useState(null);

    // Extracted list of all labels in the projectList
    const allLabelsSet = new Set(projectsList.flatMap((project) => project.labels)); //Sets only store uinque values
    const allLabels = Array.from(allLabelsSet); // convert to array

    // function to toggle/update selectedFilter state
    const handleFilterClick = (label) => {
        // If selected label is already set as selectedFilter, change to null. Otherwise change to selected label.
        setSelectedFilter((prevFilter) => (prevFilter === label ? null : label));
    }

    // Create a filtered list of projects
    let filteredProjects;
    if (selectedFilter) { // Components are re-rendered on changes to state
        // if a filter is selected, filter projects:
        filteredProjects = projectsList.filter((project) => {
            return project.labels.includes(selectedFilter);
        });
    } else {
        // If no filter is selected, show all projects:
        filteredProjects = projectsList;
    }


    return(
        <SectionContainer>
            <LanguageSwitcher />
            <ContentWrapper>
                    <SectionTitle>{t("projects.titleAll")}</SectionTitle>
                    <FiltersContainer>
                    {/* Create a FilterButton for each label */}
                    {allLabels.map((label) => (
                        <FilterButton
                            key={label}
                            $isActive={selectedFilter === label} // Passes custom prop. True if selected filter matches button's label, otherwise false.
                            onClick={() => handleFilterClick(label)}
                        >
                            {label}
                        </FilterButton>
                        ))}
                    </FiltersContainer>
                    <ProjectListWrapper>
                        {/* Map over array of projects, and call ProjectCard for each + pass projectinfo as props */}
                        {filteredProjects.map((project, index) => (
                            <ProjectCard 
                                key={index}
                                title={project.title}
                                image={project.image}
                                labels={project.labels}
                                description={project.description}
                                code={project.code}
                                codeLink={project.codeLink}
                                demo={project.demo}
                                demoLink={project.demoLink}
                            />
                            ))
                        } 
                    </ProjectListWrapper>
                </ContentWrapper>
        </SectionContainer>
    )
}

export default ProjectsPage;

const SectionContainer = styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 20px 30px 20px;
    //border: dotted purple 2px;
    background: #E4EDED;
    `

const ContentWrapper = styled.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
    //border: dotted blue 2px;
    background: ${({ bg }) => bg || "none"};

    
    @media (max-width: 900px) {
     width: 90%;   
    }

    @media (max-width: 580px) {
     width: 100%;   
    }
`

const FiltersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin: 30px auto 60px auto;
`

const FilterButton = styled.button`
    background: ${(props) => (props.$isActive ? "#2d2b2b" : "#E4EDED")};
    color: ${(props) => (props.$isActive ? "#E4EDED" : "#2d2b2b")};
    border-radius: 7px;
    padding: 5px 10px;
    border: none;
    border: 2px #2d2b2b solid;
    font-size: 0.8em;
    font-family: "Poppins", serif;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #2d2b2b;
        color: #E4EDED;

    }
` 

const ProjectListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    //border: 2px dotted red;
    gap: 50px;
`