import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/Landing'
import ProjectsPage from './pages/ProjectsPage'
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
