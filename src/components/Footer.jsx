import {
  FaGithub,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">

        {/* Contenu principal */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Présentation */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Nambix.dev
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed text-sm">
              Développeur web passionné par React,
              Node.js et les systèmes modernes.
            </p>

            <p className="mt-4 text-sm text-cyan-400 font-medium">
              Disponible pour projets et collaborations
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-cyan-400 transition">Accueil</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">À propos</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition">Compétences</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition">Projets</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact + réseaux */}
          <div>
            <h3 className="font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              {/* GitHub */}
              <a
                href="https://github.com/Nambix-Jenny-dev"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-lg" />
                <span>GitHub - Nambix-Jenny-dev</span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/nambix.jenny/"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-lg" />
                <span>Facebook - Nambix Jenny</span>
              </a>

              {/* Email */}
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

        {/* Bas du footer */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nambix. Tous droits réservés.
          </p>

          <p className="text-sm text-gray-500">
            Développé avec React + Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;