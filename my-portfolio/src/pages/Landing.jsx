import Intro from "../sections/Intro";
import Tech from "../sections/Tech";
import FeaturedProjects from "../sections/FeaturedProjects";
import Skills from "../sections/Skills"
import Contact from "../sections/Contact";
import FloatingNav from "../components/FloatingNav";
import Education from "../sections/Education";

const LandingPage = () => {
    return (
        <>
            <Intro />
            <Tech />
            <Education />
            <FeaturedProjects />
            <Skills />
            <Contact />
            <FloatingNav />
        </>
    )
}

export default LandingPage;