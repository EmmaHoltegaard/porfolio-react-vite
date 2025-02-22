import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Intro from './sections/Intro'
import Tech from './sections/Tech'
import Skills from './sections/Skills'
import FeaturedProjects from './sections/FeaturedProjects'
import Contact from './sections/Contact'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles />
      <Intro />
      <Tech />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </>
  )
}

export default App
