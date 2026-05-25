import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Projects from "../pages/public/Projects";
import Skills from "../pages/public/Skills";
import Contact from "../pages/public/Contact";
import Formation from "../pages/public/Formation";
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import Portfolio from "../pages/public/Portfolio";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* ===== PUBLIC ===== */}
        <Route path="/" element={<Portfolio/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formation" element={<Formation />} />

      {/* ===== ADMIN ===== */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
