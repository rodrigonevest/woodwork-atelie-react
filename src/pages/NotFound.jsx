import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-1 fw-bold text-muted">404</h1>
      <h2 className="mb-4">Página não encontrada</h2>
      <p className="mb-4">Parece que nos perdemos na floresta.</p>
      <Link to="/" className="btn btn-dark">
        Voltar ao Início
      </Link>
    </div>
  );
}
