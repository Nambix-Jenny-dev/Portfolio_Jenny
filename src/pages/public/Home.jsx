import Jenny from "../../assets/Jenny.jpg";

function Home() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center max-w-6xl mt-16 mx-auto px-6 md:px-12 relative overflow-hidden"
    >
      <style>{`
        .home-glow-1 {
          position: absolute;
          top: -128px;
          left: -128px;
          width: 500px;
          height: 500px;
          background: rgba(56, 189, 248, 0.15);
          border-radius: 9999px;
          filter: blur(96px);
          pointer-events: none;
          transition: opacity 0.3s;
        }

        html.light .home-glow-1 {
          background: rgba(14, 165, 233, 0.1);
        }

        .home-glow-2 {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: rgba(56, 189, 248, 0.05);
          border-radius: 9999px;
          filter: blur(80px);
          pointer-events: none;
          transition: opacity 0.3s;
        }

        html.light .home-glow-2 {
          background: rgba(14, 165, 233, 0.05);
        }
      `}</style>

      {/* Glow de fond */}
      <div className="home-glow-1" />
      <div className="home-glow-2" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

  {/* LEFT SIDE - TEXT */}
  <div className="flex-1">
    
    {/* Glow de fond */}
    <div className="home-glow-1" />
    <div className="home-glow-2" />

    {/* Eyebrow */}
    <div className="flex items-center gap-3 mb-6">
      <span className="block w-10 h-px" style={{ backgroundColor: 'var(--accent)' }} />
      <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: 'var(--accent)' }}>
        Développeur Full Stack
      </span>
    </div>

    {/* Titre */}
    <h1 className="text-5xl md:text-4xl font-bold leading-[1.05] tracking-tight"
      style={{ color: 'var(--text-primary)' }}>
      Salut, je suis{" "}
      <span className="relative inline-block">
        <span style={{ color: 'var(--accent)' }}>Nambix</span>
        <span className="absolute -bottom-1 left-0 w-full h-px"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.4 }} />
      </span>
    </h1>

   {/* Description */}
      <p className="mt-7 max-w-xl text-base leading-relaxed font-light" style={{ color: 'var(--text-secondary)' }}>
        Développeur web passionné par la création d'applications modernes.
        Je travaille avec{" "}
        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>React</span>,{" "}
        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Node.js</span> et{" "}
        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Symfony</span>{" "}
        pour construire des systèmes performants et bien structurés.
      </p>

      {/* Boutons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <button className="group relative px-7 py-3 hover:bg-opacity-90 text-black font-medium text-sm tracking-wide rounded-xl transition-all duration-200 overflow-hidden" style={{ backgroundColor: 'var(--accent)' }}>
          <span className="relative z-10">Voir mes projets</span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </button>

        <button className="px-7 py-3 text-sm tracking-wide rounded-xl transition-all duration-200" style={{ border: `1px solid var(--accent)`, color: 'var(--text-secondary)' }} onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(56, 189, 248, 0.1)'; e.target.style.color = 'var(--text-primary)'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--text-secondary)'; }}>
          Me contacter
        </button>
      </div>
  </div>

    {/* RIGHT SIDE - IMAGE */}
   <div className="flex-1 hidden md:flex justify-end">
      <div className="relative group">

        {/* Glow arrière */}
        <div
          className="absolute -inset-6 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition hidden md:block"
          style={{ backgroundColor: 'var(--accent)' }}
        />

        {/* image wrapper responsive */}
        <div className="relative p-2">

          <img
            src={Jenny}
            alt="Nambix"
            className="
              object-cover rounded-full
              w-28 h-28        /* MOBILE → petit rond */
              md:w-96 md:h-[420px] md:rounded-[2.2rem]  /* DESKTOP → grande image */
            "
          />

        </div>

      </div>
    </div>
</div>

      {/* Stats */}
      <div className="mt-16 flex items-center gap-8 pt-8" style={{ borderTop: '1px solid var(--border-color)' }}>
        {[
          { value: "3+", label: "Ans d'expérience" },
          { value: "12", label: "Projets réalisés" },
          { value: "6",  label: "Technologies" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col">
            <span className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>{value}</span>
            <span className="text-xs tracking-wide mt-0.5" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;