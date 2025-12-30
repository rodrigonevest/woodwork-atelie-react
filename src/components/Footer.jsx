export default function Footer() {
  return (
    <footer className="footer-madeira text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">
          © {new Date().getFullYear()} WoodWork Design - Ateliê da Madeira
        </p>
        <p className="mb-0">Artesanato em madeira, cuidado em cada detalhe.</p>
      </div>
    </footer>
  );
}
