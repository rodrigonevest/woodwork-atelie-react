import slide1 from '../assets/img/slide-1.webp'
import slide2 from '../assets/img/slide-2.webp'
import slide3 from '../assets/img/slide-3.webp'

const slides = [
  {
    id: 0,
    image: slide1,
    alt: 'Tábuas de corte artesanais com carne e faca',
    text: 'Tábuas artesanais para quem valoriza o churrasco de verdade.'
  },
  {
    id: 1,
    image: slide2,
    alt: 'Trabalho manual em madeira detalhado',
    text: 'Cada detalhe feito à mão.'
  },
  {
    id: 2,
    image: slide3,
    alt: 'Mesa posta com tábuas de madeira e alimentos',
    text: 'Presente nas melhores histórias.'
  }
]

function HeroCarousel() {
  return (
    <section className="bg-light py-0">
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="carousel-overlay">
                <img
                  src={slide.image}
                  className="d-block w-100 carousel-img"
                  alt={slide.alt}
                />
                <div className="carousel-overlay-bg"></div>
              </div>
              <div className="carousel-caption d-none d-md-block">
                <p className="carousel-text">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>

      <div className="container text-center py-5">
        <a href="#portfolio" className="btn btn-dark btn-lg btn-portifolio">
          Ver Portfólio
        </a>
      </div>
    </section>
  )
}

export default HeroCarousel
