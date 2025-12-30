export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 font-logo">Entre em Contato</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nome
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Mensagem
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
