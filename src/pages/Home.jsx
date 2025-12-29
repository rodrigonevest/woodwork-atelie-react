import Layout from '../components/Layout'
import HeroCarousel from '../components/HeroCarousel'
import caricatura from "../assets/images/caricatura.png"



export default function Home() {
  return (
    <Layout>
      <section className="ccontainer mt-5 text-center">
        <div className="d-flex justify-content-center align-items-center mb-3">
            <img
                src={caricatura}
                alt="Logo"
                className="me-3"
                width="75"
            />
            <h1 className="text-center">Bem-vindo ao WoodWork Design</h1>   
        </div>
        
        
      </section>
        <HeroCarousel></HeroCarousel>
      <section class="container py-5">
        <div class="row text-center">
            <div class="col-md-4">
                <h5>Produção artesanal</h5>
                <p>Cada peça é feita com cuidado e atenção aos detalhes.</p>
            </div>
            <div class="col-md-4">
                <h5>Madeiras nobres</h5>
                <p>Seleção rigorosa para garantir beleza e durabilidade.</p>
            </div>
            <div class="col-md-4">
                <h5>Acabamento premium</h5>
                <p>Design pensado para uso real no churrasco.</p>
            </div>
        </div>
       </section>
    </Layout>
  )
}
