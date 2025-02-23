import Intro from './sections/Intro'
import Tech from './sections/Tech'
import Skills from './sections/Skills'
import FeaturedProjects from './sections/FeaturedProjects'
import Contact from './sections/Contact'
import GlobalStyles from './styles/GlobalStyles'
import FadeInSection from "./components/FadeInSection";

function App() {

  return (
    <>
      <GlobalStyles />
      <FadeInSection><Intro /></FadeInSection>
      <FadeInSection><Tech /></FadeInSection>
      <FadeInSection><FeaturedProjects /></FadeInSection>
      <FadeInSection><Skills /></FadeInSection>
      <FadeInSection><Contact /></FadeInSection>
    </>
  )
}

export default App
