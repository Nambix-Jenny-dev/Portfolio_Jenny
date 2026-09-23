import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFormData({
      nom: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 max-w-6xl mx-auto px-6 md:px-12">
      <div className="p-8 md:p-10" style={{ background: "var(--card-bg)", border: "1px solid var(--border-color)", boxShadow: "0 24px 80px var(--shadow-soft)" }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Contact</h2>

        <p className="mb-8 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
          Tu peux me contacter pour des projets, stages ou collaborations.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="nom"
            placeholder="Entrer votre Nom"
            value={formData.nom}
            onChange={handleChange}
            className="p-3 rounded-2xl outline-none transition duration-200"
            style={{ background: "var(--card-soft)", border: "1px solid var(--border-color)", color: "var(--text-primary)", placeholder: "var(--text-muted)" }}
          />

          <input
            type="email"
            name="email"
            placeholder="Entrer votre Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-2xl outline-none transition duration-200"
            style={{ background: "var(--card-soft)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
          />

          <textarea
            name="message"
            placeholder="Entrer votre Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-2xl outline-none transition duration-200"
            style={{ background: "var(--card-soft)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 font-medium py-3 rounded-2xl transition-colors duration-200"
              style={{ border: "1px solid var(--accent)", color: "var(--accent)", background: "transparent" }}
            >
              Envoyer
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex-1 font-medium py-3 rounded-2xl transition-colors duration-200"
              style={{ border: "1px solid var(--text-muted)", color: "var(--text-secondary)", background: "transparent" }}
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