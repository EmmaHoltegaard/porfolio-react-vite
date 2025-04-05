import styled from "styled-components";
import SectionContainer from "../components/SectionContainer"
import SectionTitle from "../components/SectionTitle.js";
import { useTranslation } from "react-i18next";
import FadeInSection from "../components/FadeInSection.jsx";
import ContentWrapperVert from "../components/ContentWrapperVert.js";
import Background  from "../assets/watercolor3.png"

const Skills = () => {
    const { t } = useTranslation();
    const codeSkills = ["JavaScript ES6", "HTML 5", "CSS3", "React.js", "Node.js", "Redux", "Styled Components", "Tailwind CSS", "Java", "Python", "Flask", "SQL"];
    const toolboxSkills = ["VSCode", "IntelliJ", "Figma", "Canva", "Postman", "Github", "Bitbucket", "Jira", "Slack", "Umbraco"];
    const upcomingSkills = ["Next.js", "Typescript", "Vue"];
    const moreSkills = t("skills.moreContent", { returnObjects: true });

    return (
        <SectionContainer bg="#d2d277" id="skills">
            <FadeInSection>
                <ContentWrapperVert>
                    <SectionTitle>{t("skills.title")}</SectionTitle>
                    <OuterWrapper>

                        {/* Code */}
                        <SkillSection>
                            <SkillTitle>{t("skills.code")}</SkillTitle>
                            {/* Map over codeSkills to create a ul with a li for each */}
                            <SkillList>
                                {codeSkills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </SkillList>
                        </SkillSection>

                        {/* Toolbox */}
                        <SkillSection>
                            <SkillTitle>{t("skills.toolbox")}</SkillTitle>
                            {/* Map over codeSkills to create a ul with a li for each */}
                            <SkillList>
                                {toolboxSkills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </SkillList>
                        </SkillSection>

                        {/* Upcoming */}
                        <SkillSection>
                            <SkillTitle>{t("skills.upcoming")}</SkillTitle>
                            {/* Map over codeSkills to create a ul with a li for each */}
                            <SkillList>
                                {upcomingSkills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </SkillList>
                        </SkillSection>

                        {/* More */}
                        <SkillSection>
                            <SkillTitle>{t("skills.more")}</SkillTitle>
                       
                            <SkillList>
                                {moreSkills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </SkillList>
                        </SkillSection>
                    </OuterWrapper>
                </ContentWrapperVert>
            </FadeInSection>
        </SectionContainer>
    )
}

export default Skills;

const OuterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; // allows wrapping
    gap: 10px;
    justify-content: center;
`

const SkillSection = styled.div`
    display: flex;
    flex-direction: column;
    //background: lightgray;
    min-width: 170px;
    @media (min-width: 1040px) {
        width: calc(25% - 10px);
    }
    @media (max-width: 1040px) {
        width: calc(50% - 10px);
        //border: red 2px solid;
        padding: 30px;
    }
    @media (max-width: 820px) {
        width: calc(100% - 10px);
        padding-bottom: 30px;
    }
`

const SkillTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
    //border: #2d2b2b 2px solid;
    //border-radius: 7px;
    color:#2d2b2b;
    //border: 2px dotted red;
    width: 100%;
`

const SkillList = styled.ul`
    font-size: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    

`

//Make it responsive by changing the width of items at certain markers (25%, 50% 100%;)