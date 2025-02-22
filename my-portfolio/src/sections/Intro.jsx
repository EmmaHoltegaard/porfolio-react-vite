import { useTranslation } from "react-i18next";
import SectionContainer from "../components/SectionContainer";
import ContentWrapperHori from "../components/ContentWrapperHori.js";

const Intro = () => {
    const { t } = useTranslation();

    return (
        <SectionContainer bg="pink">
            <ContentWrapperHori>
                <h1>{t("intro.title")}</h1>
                <p>{t("intro.description")}</p>
            </ContentWrapperHori>
        </SectionContainer>
    )
}

export default Intro;