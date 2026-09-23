import { useContext, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });

    setOpen(false);
  };

  const links = [
    { label: "Accueil", id: "home" },
    { label: "À propos", id: "about" },
    { label: "Formation", id: "formation" },
    { label: "Compétences", id: "skills" },
    { label: "Projets", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          display: flex;
          justify-content: center;
          padding: 1rem 0;
          background: var(--panel-bg);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--border-color);
        }

        .navbar-inner {
          width: min(1120px, 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          gap: 1rem;
        }

        .navbar-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--accent);
          user-select: none;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          border: 1px solid var(--border-color);
          background: var(--card-soft);
          color: var(--text-primary);
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .theme-toggle:hover {
          transform: translateY(-1px);
          background: var(--accent-soft);
        }

        .navbar-links {
          display: flex;
          gap: 0.4rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-links li {
          position: relative;
          padding: 0.75rem 1.2rem;
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: 9999px;
          transition: 0.2s;
        }

        .navbar-links li:hover {
          color: var(--text-primary);
          background: var(--accent-soft);
        }

        @media (max-width:768px){
          .navbar-links {
            display:none;
          }

          .menu-btn {
            display:flex;
            align-items:center;
            justify-content:center;
            width:42px;
            height:42px;
            border-radius:50%;
            color:var(--text-primary);
            cursor:pointer;
            font-size:1.2rem;
            background:var(--card-soft);
            border:1px solid var(--border-color);
            transition:.3s;
          }

          .menu-btn:hover {
            background:var(--accent-soft);
            transform:scale(1.05);
          }

          .mobile-menu {
            position:absolute;
            top:85px;
            left:50%;
            transform:translateX(-50%);
            width:90%;
            max-width:340px;
            background:var(--panel-bg);
            backdrop-filter:blur(25px);
            border:1px solid var(--border-color);
            border-radius:24px;
            padding:1rem;
            display:flex;
            flex-direction:column;
            gap:.5rem;
            box-shadow: 0 10px 30px var(--shadow-soft);
            animation:menuAnimation .3s ease;
          }

          .mobile-menu li {
            padding:1rem;
            border-radius:14px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:var(--text-secondary);
            font-size:.95rem;
            font-weight:500;
            transition:.3s;
          }

          .mobile-menu li:hover {
            background:var(--accent-soft);
            color:var(--text-primary);
            transform:translateX(5px);
          }

          @keyframes menuAnimation {
            from {
              opacity:0;
              transform:translateX(-50%) translateY(-20px);
            }

            to {
              opacity:1;
              transform:translateX(-50%) translateY(0);
            }
          }
        }

        @media (min-width:769px){
          .menu-btn {
            display:none;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-logo">Nambix</div>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Changer le thème"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>

            <ul className="navbar-links">
              {links.map(({ label, id }) => (
                <li key={id} onClick={() => scrollTo(id)}>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {open && (
          <ul className="mobile-menu">
            {links.map(({ label, id }) => (
              <li key={id} onClick={() => scrollTo(id)}>
                {label}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}