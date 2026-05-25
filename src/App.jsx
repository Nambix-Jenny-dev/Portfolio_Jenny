
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Skills from "./pages/public/Skills";
import Projects from "./pages/public/Projects";
import Contact from "./pages/public/Contact";
import Formation from "./pages/public/Formation";

function AppContent() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'all 0.3s' }}>
      <Navbar />

      <main className="scroll-smooth">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="formation">
          <Formation />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
