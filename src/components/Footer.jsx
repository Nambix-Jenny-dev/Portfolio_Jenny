import {
  FaGithub,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-color)", marginTop: "5rem", background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
              Nambix.dev
            </h2>

            <p className="mt-4 leading-relaxed text-sm" style={{ color: "var(--text-muted)" }}>
              Développeur web passionné par React,
              Node.js et les systèmes modernes.
            </p>

            <p className="mt-4 text-sm font-medium" style={{ color: "var(--accent)" }}>
              Disponible pour projets et collaborations
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-5" style={{ color: "var(--text-primary)" }}>
              Navigation
            </h3>

            <ul className="space-y-3 text-sm" style={{ color: "var(--text-muted)" }}>
              <li><a href="#home" className="hover:text-cyan-400 transition">Accueil</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">À propos</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition">Compétences</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition">Projets</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5" style={{ color: "var(--text-primary)" }}>
              Contact
            </h3>

            <div className="space-y-4 text-sm" style={{ color: "var(--text-muted)" }}>
              <a
                href="https://github.com/Nambix-Jenny-dev"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-lg" />
                <span>GitHub - Nambix-Jenny-dev</span>
              </a>

              <a
                href="https://www.facebook.com/nambix.jenny/"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-lg" />
                <span>Facebook - Nambix Jenny</span>
              </a>

              <a
                href="mailto:nambixjenny@gmail.com"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
              >
                <FaEnvelope className="text-lg" />
                <span>nambixjenny@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid var(--border-color)" }}>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Nambix. Tous droits réservés.
          </p>

          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Développé avec React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;