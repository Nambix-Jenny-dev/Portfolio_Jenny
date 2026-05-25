import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });

    setOpen(false); // ferme menu mobile après clic
  };

  const links = [
    { label: "Accueil", id: "home" },
    { label: "À propos", id: "about" },
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
          background: rgba(2, 19, 49, 0.76);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid hsla(198, 92%, 15%, 0.14);
        }

        .navbar-inner {
          width: min(1120px, 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
        }

        .navbar-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #38bdf8;
          user-select: none;
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
          color: #cbd5e1;
          cursor: pointer;
          border-radius: 9999px;
          transition: 0.2s;
        }

        .navbar-links li:hover {
          color: #fff;
          background: rgba(56, 189, 248, 0.12);
        }

        

        /* MOBILE */
        @media (max-width:768px){

          .navbar-links{
            display:none;
          }

          .menu-btn{
            display:flex;
            align-items:center;
            justify-content:center;
            width:42px;
            height:42px;
            border-radius:50%;
            color:white;
            cursor:pointer;
            font-size:1.2rem;

            background:rgba(255,255,255,.05);
            border:1px solid rgba(255,255,255,.08);

            transition:.3s;
          }

          .menu-btn:hover{
            background:rgba(56,189,248,.15);
            transform:scale(1.05);
          }

          .mobile-menu{
            position:absolute;
            top:85px;
            left:50%;
            transform:translateX(-50%);

            width:90%;
            max-width:340px;

            background:rgba(15,23,42,.92);
            backdrop-filter:blur(25px);

            border:1px solid rgba(56,189,248,.15);
            border-radius:24px;

            padding:1rem;

            display:flex;
            flex-direction:column;
            gap:.5rem;

            box-shadow:
            0 10px 30px rgba(0,0,0,.4);

            animation:menuAnimation .3s ease;
          }

          .mobile-menu li{

            padding:1rem;
            border-radius:14px;

            display:flex;
            align-items:center;
            justify-content:center;

            color:#cbd5e1;
            font-size:.95rem;
            font-weight:500;

            transition:.3s;
          }

          .mobile-menu li:hover{

            background:rgba(56,189,248,.12);

            color:white;

            transform:translateX(5px);
          }

          @keyframes menuAnimation{

            from{
              opacity:0;
              transform:
              translateX(-50%)
              translateY(-20px);
            }

            to{
              opacity:1;
              transform:
              translateX(-50%)
              translateY(0);
            }

          }

        }

        @media (min-width:769px){

          .menu-btn{
            display:none;
          }

        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">

          {/* Logo */}
          <div className="navbar-logo">Nambix</div>

          {/* Desktop links */}
          <ul className="navbar-links">
            {links.map(({ label, id }) => (
              <li key={id} onClick={() => scrollTo(id)}>
                {label}
              </li>
            ))}
          </ul>

          {/* Mobile button */}
          <div className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile menu */}
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