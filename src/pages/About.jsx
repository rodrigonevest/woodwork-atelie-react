import { aboutItems } from "../data/content";
import { companyInfo } from "../data/content";

export default function About() {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="font-logo mb-3">Sobre o {companyInfo.name}</h2>

            <p className="lead text-muted">
              {companyInfo.slogan}
            </p>

            <p>
              {companyInfo.description}
            </p>

            <p>
              Natural de Estrela do Norte, interior de São Paulo, Maikon Lenon cresceu no sítio,
              desenvolvendo desde cedo o gosto pelo trabalho manual e pela madeira.
              Hoje morando em Minas Gerais, iniciou a marcenaria como hobby,
              criando peças para facilitar o dia a dia em casa e no sítio,
              mesmo com poucas ferramentas.
            </p>

            <p>
              Com o tempo, a paixão cresceu, novas técnicas foram sendo aprimoradas
              e as tábuas de carne se tornaram o carro-chefe do seu trabalho,
              reconhecidas pela funcionalidade, durabilidade e acabamento cuidadoso.
              Além delas, a marcenaria também produz itens decorativos e funcionais
              para casa e sítio, além de realizar restaurações,
              sempre valorizando o artesanal e a história de cada peça.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <div className="border about-image rounded p-2">
              <img
                src={aboutItems.find(item => item.id === 1)?.image}
                alt={aboutItems.find(item => item.id === 1)?.title}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className="border about-image rounded p-2">
              <img
                src={aboutItems.find(item => item.id === 2)?.image}
                alt={aboutItems.find(item => item.id === 2)?.title}
              />
            </div>
          </div>

          <div className="col-md-6">
            <h2 className="font-logo mb-3">A essência da madeira</h2>

            <p>
              A madeira é o coração de cada criação. Cada tábua carrega veios,
              tons e marcas naturais que tornam cada peça única.
              No ateliê, a escolha da matéria-prima é feita com atenção e respeito,
              valorizando sua origem e suas características naturais.
            </p>

            <p>
              O processo artesanal permite que cada corte, encaixe e acabamento
              realce a beleza e a resistência do material.
              Mais do que moldar a madeira, o trabalho busca dialogar com ela,
              respeitando seu tempo, sua textura e sua história.
            </p>

            <p>
              Assim nascem peças que unem funcionalidade, durabilidade e identidade,
              criadas para acompanhar o dia a dia e atravessar gerações,
              sempre preservando o valor do feito à mão e a essência da madeira
              em sua forma mais autêntica.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="font-logo mb-3">Feitas para o dia a dia</h2>

            <p>
              As peças são pensadas para o uso diário. Tábuas de carne,
              itens decorativos e objetos funcionais são produzidos com foco
              na resistência, no acabamento e na praticidade.
              Cada detalhe é pensado para garantir longa vida útil,
              fácil manutenção e beleza atemporal.
            </p>

            <p>
              São peças feitas para acompanhar rotinas, momentos especiais
              e histórias que se constroem ao longo do tempo.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <div className="border about-image rounded p-2">
              <img
                src={aboutItems.find(item => item.id === 3)?.image}
                alt={aboutItems.find(item => item.id === 3)?.title}
              />
            </div>
          </div>

        </div>
      </div>

    </>
  );
}
