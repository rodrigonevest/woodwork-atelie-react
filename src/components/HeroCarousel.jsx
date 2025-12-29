import caricatura from "../assets/images/caricatura.png"
import img1 from "../assets/images/carrosel1.jpg"
import img2 from "../assets/images/carrosel2.jpg"
import img3 from "../assets/images/carrosel3.jpg"

function HeroCarousel() {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src={img1} className="d-block w-100 carousel-img" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
                <p className="carousel-text">
                  Tábuas artesanais para quem valoriza o churrasco de verdade.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={img2} className="d-block w-100 carousel-img" alt="Slide 2" />
              <div className="carousel-caption d-none d-md-block">
                <p className="carousel-text">
                  Cada detalhe feito à mão.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={img3} className="d-block w-100 carousel-img" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">
                <p className="carousel-text">
                  Presente nas melhores histórias.
                </p>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>

        <a href="#" className="btn btn-dark btn-lg mt-4">
          Ver Portfólio
        </a>

      </div>
    </section>
  )
}

export default HeroCarousel
