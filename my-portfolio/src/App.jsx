import Intro from './sections/Intro'
import Tech from './sections/Tech'
import Skills from './sections/Skills'
import FeaturedProjects from './sections/FeaturedProjects'
import Contact from './sections/Contact'
import GlobalStyles from './styles/GlobalStyles'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {

  return (
    <>
      <GlobalStyles />
      <LanguageSwitcher />
      <Intro />
      <Tech />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </>
  )
}

export default App
