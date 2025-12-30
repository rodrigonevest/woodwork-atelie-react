import { companyInfo } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer-madeira text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">
          © {companyInfo.year} {companyInfo.name} - Ateliê da Madeira
        </p>
        <p className="mb-0 text-white-50 small">
          {companyInfo.slogan}
        </p>
      </div>
    </footer>
  )
}
