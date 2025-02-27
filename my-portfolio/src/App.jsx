import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing'
import ProjectsPage from './pages/ProjectsPage'


function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
