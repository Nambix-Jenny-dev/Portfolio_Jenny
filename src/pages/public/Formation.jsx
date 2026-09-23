function Education() {
  const education = [
    {
      school: "Université d'Antananarivo",
      degree: "Licence en Electronique",
      parcour: "Électronique et Information appliquer",
      year: "2022 - 2025",
      description:
        "Apprentissage des bases en développement logiciel, bases de données, algorithmes et architecture système.",
    },
    {
      school: "ESPA Vontovorona",
      degree: "Master",
      parcour: "Technologie Energétique ",
      year: "en cours",
      description:
        "Formation en cours axée sur les technologies énergétiques, avec une forte composante de gestion de projet et d'innovation technologique.",
    },
    {
      school: "Formation personnelle",
      degree: "Développement Web Full Stack",
      year: "2023- Aujourd’hui",
      description:
        "React, Node.js, Symfony, MySQL, projets pratiques et portfolio personnel.",
    },
  ];

  return (
    <section id="formation" className="py-20 px-6 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 uppercase tracking-[0.3em] text-xs font-medium mb-4" style={{ color: "var(--accent)" }}>
            <span className="block w-12 h-px" style={{ backgroundColor: "var(--accent)" }} />
            Parcours académique
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "var(--text-primary)" }}>
            Education
          </h2>

          <p className="mt-4 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Mon parcours académique et mes formations en développement web.
          </p>
        </div>

        <div className="space-y-8 border-l pl-6" style={{ borderColor: "var(--border-color)" }}>
          {education.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full" style={{ backgroundColor: "var(--accent)" }} />

              <div className="p-6 rounded-2xl transition" style={{ background: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                  {item.degree}
                </h3>
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                  {item.parcour}
                </p>

                <p className="text-sm mt-1" style={{ color: "var(--accent)" }}>
                  {item.school} • {item.year}
                </p>

                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;