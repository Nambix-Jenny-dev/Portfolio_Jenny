import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGit,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiSymfony,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const iconMap = {
  React: FaReact,
  "Tailwind CSS": SiTailwindcss,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: SiJavascript,
  "Node.js": FaNode,
  Express: SiExpress,
  Symfony: SiSymfony,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Git: FaGit,
  GitHub: FaGithub,
  "VS Code": FaCode,
};

function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "Symfony"],
    },
    {
      title: "Base de données",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      title: "Outils",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 p-8 md:p-10" style={{ background: "var(--card-bg)", border: "1px solid var(--border-color)", borderRadius: "32px", boxShadow: "0 24px 80px var(--shadow-soft)" }}>
        <div className="mb-10">
          <span className="inline-flex items-center gap-3 uppercase tracking-[0.3em] text-xs font-medium mb-4" style={{ color: "var(--accent)" }}>
            <span className="block w-12 h-px" style={{ backgroundColor: "var(--accent)" }} />
            Mes compétences
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Compétences
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Un aperçu des technologies et outils que j'utilise pour construire des projets modernes et fiables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-3xl p-6 transition duration-300 hover:-translate-y-1"
              style={{ background: "var(--card-soft)", border: "1px solid var(--border-color)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                  {skill.title}
                </h3>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                  {skill.items.length}
                </span>
              </div>

              <ul className="mt-3 space-y-3" style={{ color: "var(--text-secondary)" }}>
                {skill.items.map((item, i) => {
                  const Icon = iconMap[item];
                  return (
                    <li key={i} className="flex items-center gap-3 text-sm md:text-base">
                      {Icon ? (
                        <Icon className="text-lg flex-shrink-0" style={{ color: "var(--accent)" }} />
                      ) : (
                        <span className="inline-flex h-2.5 w-2.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                      )}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;