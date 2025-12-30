import HeroCarousel from "../components/HeroCarousel";
import caricatura from "../assets/img/caricatura.webp";

export default function Home() {
  return (
    <div>
      <section className="container mt-5 text-center">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <img src={caricatura} alt="Caricatura" className="me-3" width="75" />
          <h1 className="text-center">Bem-vindo ao WoodWork Design</h1>
        </div>
      </section>

      <HeroCarousel />

      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-4">
            <h5>Produção artesanal</h5>
            <p>Cada peça é feita com cuidado e atenção aos detalhes.</p>
          </div>
          <div className="col-md-4">
            <h5>Madeiras nobres</h5>
            <p>Seleção rigorosa para garantir beleza e durabilidade.</p>
          </div>
          <div className="col-md-4">
            <h5>Acabamento premium</h5>
            <p>Design pensado para uso real no churrasco.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
