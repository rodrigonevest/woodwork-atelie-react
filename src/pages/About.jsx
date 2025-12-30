import { companyInfo } from '../data/content'

export default function About() {
  return (
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
            Nosso compromisso é entregar não apenas um produto, mas uma experiência
            que une funcionalidade e design atemporal.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <div className="bg-light rounded p-5 border about-placeholder">
             <span className="text-muted fst-italic">Foto da Oficina / Artesão</span>
          </div>
        </div>
      </div>
    </div>
  )
}
