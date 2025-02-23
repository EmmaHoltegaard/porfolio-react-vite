import Intro from './sections/Intro'
import Tech from './sections/Tech'
import Skills from './sections/Skills'
import FeaturedProjects from './sections/FeaturedProjects'
import Contact from './sections/Contact'
import GlobalStyles from './styles/GlobalStyles'

function App() {

  return (
    <>
      <GlobalStyles />
      <Intro />
      <Tech />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
