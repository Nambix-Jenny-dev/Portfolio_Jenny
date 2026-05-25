 function About() {
  return (
    <section id="about" className="py-16 max-w-6xl mx-auto px-6 md:px-12">
      <div className="rounded-[32px]  p-8 md:p-10 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">À propos de moi</h2>

        <p className="text-gray-300 leading-relaxed max-w-3xl">
          Je suis un développeur en formation avec une forte curiosité pour les systèmes
          web et les architectures logicielles. Mon parcours a commencé par l’électronique,
          ce qui m’a donné une compréhension logique des systèmes.
          Aujourd’hui, je me concentre sur le développement full-stack avec React,
          Node.js et Symfony.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
            <h3 className="font-semibold text-cyan-400">Objectif</h3>
            <p className="text-gray-300 mt-2">
              Devenir développeur full-stack capable de concevoir des systèmes complets.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
            <h3 className="font-semibold text-cyan-400">Approche</h3>
            <p className="text-gray-300 mt-2">
              Code propre, architecture claire, et amélioration continue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;