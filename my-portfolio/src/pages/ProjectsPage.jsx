import SectionTitle from "../components/SectionTitle"
import SectionContainer from "../components/SectionContainer";
import ContentWrapperVert from "../components/ContentWrapperVert";
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
        setSelectedFilter(selectedFilter === label ? null : label );
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
                <ContentWrapperVert>
                    <LanguageSwitcher />
                    <FiltersContainer>
                        {/* Create a FilterButton for each label */}
                        {allLabels.map((label) => (
                            <FilterButton
                                key={label}
                                $isActive={selectedFilter === label} // Passes custom prop. True if selected filter matches button's label, otherwise false.
                                onClick={() => setSelectedFilter(selectedFilter === label ? null : label)}                            >
                                {label}
                            </FilterButton>
                        ))}
                    </FiltersContainer>
                    <SectionTitle>{t("projects.titleAll")}</SectionTitle>
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
                </ContentWrapperVert>
        </SectionContainer>
    )
}

export default ProjectsPage;

const FiltersContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
`

const FilterButton = styled.button`
    background: ${(props) => (props.$isActive ? "#007bff" : "#fff")};
    color: ${(props) => (props.$isActive ? "white" : "black")};
    border-color: ${(props) => (props.$isActive ? "#007bff" : "#ccc")};

    &:hover {
        background: #f0f0f0;
    }
` 

const ProjectListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px dotted red;
    gap: 50px;
`