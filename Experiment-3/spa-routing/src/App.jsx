import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>

      <div className="container mt-3">
        <Link to="/" className="btn btn-primary me-2">Home</Link>
        <Link to="/about" className="btn btn-success me-2">About</Link>
        <Link to="/contact" className="btn btn-warning me-2">Contact</Link>
        <Link to="/project" className="btn btn-danger">Project</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
