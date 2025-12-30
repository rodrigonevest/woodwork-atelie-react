export default function Portfolio() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 font-logo">Nosso Portfólio</h2>
      <p className="text-center text-muted">
        Galeria de projetos em construção...
      </p>
      {/* Aqui futuramente entrará uma grid de imagens */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="bg-light p-5 text-center border">Projeto 1</div>
        </div>
        <div className="col-md-4">
          <div className="bg-light p-5 text-center border">Projeto 2</div>
        </div>
        <div className="col-md-4">
          <div className="bg-light p-5 text-center border">Projeto 3</div>
        </div>
      </div>
    </div>
  )
}
