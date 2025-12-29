import logo from '../assets/images/icon/logo.ico'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark footer-madeira">
      <div className="container">
        <img src={logo} alt="Logo" width="100" className="me-3" />

        <a className="navbar-brand fw-bold" href="#">
          WoodWork Design - Ateliê da Madeira
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="navbar-brand" href="#">Início</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="#">Portfólio</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="#">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
