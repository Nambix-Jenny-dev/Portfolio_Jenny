import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  // Mise à jour des champs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Vider le formulaire
  const handleReset = () => {
    setFormData({
      nom: "",
      email: "",
      message: "",
    });
  };
  return (
    <section id="contact" className="py-16 max-w-6xl mx-auto px-6 md:px-12">
      <div className=" p-8 md:p-10 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact</h2>

        <p className="text-gray-300 mb-8 max-w-2xl">
          Tu peux me contacter pour des projets, stages ou collaborations.
        </p>

        <form className="flex flex-col gap-4">
          <input
              type="text"
              name="nom"
              placeholder="Entrer votre Nom"
              value={formData.nom}
              onChange={handleChange}
              className="p-3 rounded-2xl bg-slate-950/70 border border-cyan-400/15 text-gray-100 placeholder:text-gray-500 outline-none transition duration-200 focus:border-cyan-400/60"
            />

            <input
              type="email"
              name="email"
              placeholder="Entrer votre Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-2xl bg-slate-950/70 border border-cyan-400/15 text-gray-100 placeholder:text-gray-500 outline-none transition duration-200 focus:border-cyan-400/60"
            />

            <textarea
              name="message"
              placeholder="Entrer votre Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-2xl bg-slate-950/70 border border-cyan-400/15 text-gray-100 placeholder:text-gray-500 outline-none transition duration-200 focus:border-cyan-400/60"
            />  

        <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 border-1 border-cyan-500 text-cyan-500 hover:text-white hover:bg-cyan-700 text-black font-medium py-3 rounded-2xl shadow-lg shadow-cyan-500/20 transition-colors duration-200"
            >
              Envoyer
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex-1 border-1 border-gray-500 text-gray-500 hover:text-white hover:bg-gray-700 text-black font-medium py-3 rounded-2xl shadow-lg shadow-cyan-500/20 transition-colors duration-200"
            >
              Annuler
            </button>
          </div>
        </form>
    </div>
    </section>
  );
}

export default Contact;