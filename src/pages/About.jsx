export default function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="font-logo mb-3">Sobre o WoodWork Design</h2>
          <p>
            Nascemos da paixão pela madeira e pela arte de criar. Cada peça que
            sai do nosso ateliê carrega uma história de dedicação, respeito à
            matéria-prima e busca pela perfeição.
          </p>
          <p>
            Nosso compromisso é entregar não apenas um produto, mas uma
            experiência que une funcionalidade e design atemporal.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <div className="bg-light rounded p-5 border">
            <span className="text-muted">Foto da Oficina / Artesão</span>
          </div>
        </div>
      </div>
    </div>
  );
}
