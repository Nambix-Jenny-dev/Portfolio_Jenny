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
      <div className="max-w-6xl mx-auto px-6 md:px-12 rounded-[32px]  p-8 md:p-10 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
        <div className="mb-10">
          <span className="inline-flex items-center gap-3 text-cyan-400 uppercase tracking-[0.3em] text-xs font-medium mb-4">
            <span className="block w-12 h-px bg-cyan-400" />
            Réalisations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projets</h2>
          <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed">
            Des projets concrets construits avec des technologies modernes et pensés pour répondre à des besoins réels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group rounded-3xl border border-white/10 bg-slate-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="mb-4 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Projet
              </div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{project.desc}</p>
              <p className="text-cyan-400 text-sm mt-5 font-medium">{project.tech}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;