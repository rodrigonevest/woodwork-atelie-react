import { useState } from "react";
import { contactPageContent, companyInfo } from "../data/content";
import { phoneMask } from "../utils/masks";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const formattedValue = id === "phone" ? phoneMask(value) : value;

    setFormData((prev) => ({ ...prev, [id]: formattedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.message || !formData.phone) {
      alert("Por favor, preencha nome, telefone e mensagem.");
      return;
    }

    const text = `*Nova mensagem pelo Site*\n\nNome: ${formData.name}\nTel: ${formData.phone}\nEmail: ${formData.email}\n\nMensagem: ${formData.message}`;

    const url = `https://wa.me/${
      companyInfo.contact.whatsapp
    }?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 font-logo">{contactPageContent.title}</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    {contactPageContent.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Novo Campo de Telefone com Máscara */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    WhatsApp / Telefone
                  </label>
                  <input
                    type="tel"
                    className="form-control bg-light"
                    id="phone"
                    placeholder="(99) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="15"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    {contactPageContent.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    className="form-control bg-light"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    {contactPageContent.form.messageLabel}
                  </label>
                  <textarea
                    className="form-control bg-light"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark w-100 btn-portifolio"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  {contactPageContent.form.submitBtn}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
