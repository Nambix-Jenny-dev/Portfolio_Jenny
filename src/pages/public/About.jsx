 function About() {
  return (
    <section id="about" className="py-16 max-w-6xl mx-auto px-6 md:px-12">
       <div
         className="rounded-[32px] p-8 md:p-10"
         style={{
           background: "var(--card-bg)",
           border: "1px solid var(--border-color)",
           boxShadow: "0 24px 80px var(--shadow-soft)",
         }}
       >
         <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
           À propos de moi
         </h2>

         <p className="leading-relaxed max-w-3xl" style={{ color: "var(--text-secondary)" }}>
           Je suis un développeur en formation avec une forte curiosité pour les systèmes
           web et les architectures logicielles. Mon parcours a commencé par l’électronique,
           ce qui m’a donné une compréhension logique des systèmes.
           Aujourd’hui, je me concentre sur le développement full-stack avec React,
           Node.js et Symfony.
         </p>

         <div className="mt-8 grid md:grid-cols-2 gap-6">
           <div className="p-6 rounded-3xl" style={{ background: "var(--card-soft)", border: "1px solid var(--border-color)" }}>
             <h3 className="font-semibold" style={{ color: "var(--accent)" }}>Objectif</h3>
             <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
               Devenir développeur full-stack capable de concevoir des systèmes complets.
             </p>
           </div>

           <div className="p-6 rounded-3xl" style={{ background: "var(--card-soft)", border: "1px solid var(--border-color)" }}>
             <h3 className="font-semibold" style={{ color: "var(--accent)" }}>Approche</h3>
             <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
               Code propre, architecture claire, et amélioration continue.
             </p>
           </div>
         </div>
       </div>
     </section>
   );
 }

 export default About;