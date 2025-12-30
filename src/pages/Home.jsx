import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import LeadModal from "../components/LeadModal";
import caricatura from "../assets/img/caricatura.webp";
import { homeContent, companyInfo } from "../data/content";

export default function Home() {
  return (
    <div>
      <section className="container mt-5 text-center">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <img
            src={caricatura}
            alt={`Caricatura ${companyInfo.name}`}
            className="me-3"
            width="75"
          />
          <h1 className="text-center font-logo">{homeContent.welcomeTitle}</h1>
        </div>
      </section>

      <HeroCarousel />

      <section className="container py-5">
        <div className="container text-center mb-5">
          <div className="d-flex flex-column align-items-center gap-3">
            <Link
              to={homeContent.actions.portfolioLink}
              className="btn btn-dark btn-lg btn-portifolio btn-action-fixed"
            >
              {homeContent.actions.portfolioBtn}
            </Link>

            <button
              type="button"
              className="btn btn-dark btn-lg btn-portifolio btn-action-fixed"
              data-bs-toggle="modal"
              data-bs-target="#leadModal"
            >
              <i className="bi bi-whatsapp me-2"></i>
              {homeContent.actions.budgetBtn}
            </button>

            <small className="text-muted mt-1">
              {homeContent.actions.budgetSubtext}
            </small>
          </div>
        </div>

        <div className="row text-center mt-5">
          {homeContent.features.map((feature) => (
            <div className="col-md-4 mb-4" key={feature.id}>
              <h5 className="fw-bold">{feature.title}</h5>
              <p className="text-muted">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <LeadModal />
    </div>
  );
}
