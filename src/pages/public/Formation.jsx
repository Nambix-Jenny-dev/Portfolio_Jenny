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
    <section id="education" className="py-20 px-6 mt-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-cyan-400 uppercase tracking-[0.3em] text-xs font-medium mb-4">
            <span className="block w-12 h-px bg-cyan-400" />
                Parcours académique
            <span/>
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            Education
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl">
            Mon parcours académique et mes formations en développement web.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 border-l border-white/10 pl-6">

          {education.map((item, index) => (
            <div key={index} className="relative">

              {/* point timeline */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-cyan-400 rounded-full" />

              <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition">

                <h3 className="text-xl font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {item.parcour}
                </p>

                <p className="text-cyan-400 text-sm mt-1">
                  {item.school} • {item.year}
                </p>

                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
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