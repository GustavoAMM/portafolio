import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Skills from "./pages/Skills.tsx";
import Projects from "./pages/Projects.tsx";
import Navbar from "./pages/Navbar.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
