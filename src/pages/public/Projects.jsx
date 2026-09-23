function Projects() {
  const projects = [
    {
      title: "Gestion de bibliothèque",
      desc: "Application complète pour gérer livres, emprunts et utilisateurs avec interface admin.",
      tech: "React / Java / MySQL",
    },
    {
      title: "Dashboard de grossiste",
      desc: "Système de gestion des ventes, stocks et rôles utilisateurs.",
      tech: "Symfony / MySQL",
    },
    {
      title: "Simulateur de conduite DIY",
      desc: "Projet hardware avec Arduino pour un simulateur de conduite réaliste.",
      tech: "Arduino / C++",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 rounded-[32px] p-8 md:p-10" style={{ background: "var(--card-bg)", border: "1px solid var(--border-color)", boxShadow: "0 24px 80px var(--shadow-soft)" }}>
        <div className="mb-10">
          <span className="inline-flex items-center gap-3 uppercase tracking-[0.3em] text-xs font-medium mb-4" style={{ color: "var(--accent)" }}>
            <span className="block w-12 h-px" style={{ backgroundColor: "var(--accent)" }} />
            Réalisations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>Projets</h2>
          <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Des projets concrets construits avec des technologies modernes et pensés pour répondre à des besoins réels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group rounded-3xl p-6 transition duration-300 hover:-translate-y-1"
              style={{ background: "var(--card-soft)", border: "1px solid var(--border-color)" }}
            >
              <div className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                Projet
              </div>
              <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
              <p className="mt-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.desc}</p>
              <p className="text-sm mt-5 font-medium" style={{ color: "var(--accent)" }}>{project.tech}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;