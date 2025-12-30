import { useState } from "react";
import { companyInfo, leadModalContent } from "../data/content";
import { phoneMask } from "../utils/masks";

export default function LeadModal() {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const formattedValue = id === "phone" ? phoneMask(value) : value;
    setFormData((prev) => ({ ...prev, [id]: formattedValue }));
  };

  const handleSubmit = () => {
    if (!formData.name || formData.phone.length < 14) {
      alert(leadModalContent.alerts.validation);
      return;
    }

    const text = `Olá! Me chamo *${formData.name}* (Tel: ${formData.phone}). Gostaria de solicitar um orçamento exclusivo.`;
    const url = `https://wa.me/${
      companyInfo.contact.whatsapp
    }?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div
      className="modal fade"
      id="leadModal"
      tabIndex="-1"
      aria-labelledby="leadModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-secondary text-white border-0">
            <h5 className="modal-title font-logo" id="leadModalLabel">
              {leadModalContent.title}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <p className="text-muted mb-4">{leadModalContent.description}</p>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="name"
                  placeholder={leadModalContent.fields.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-bold">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  className="form-control bg-light"
                  id="phone"
                  placeholder={leadModalContent.fields.phonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="15"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer border-0 pt-0">
            <button
              type="button"
              className="btn btn-dark w-100 py-2 text-uppercase fw-bold btn-portifolio"
              onClick={handleSubmit}
            >
              {leadModalContent.fields.btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
