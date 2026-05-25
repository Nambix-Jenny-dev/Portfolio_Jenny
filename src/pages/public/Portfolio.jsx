// src/pages/public/Portfolio.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Home from "./Home";
import About from "./About";
import Formation from "./Formation";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <Home />
        <About />
        <Formation />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}