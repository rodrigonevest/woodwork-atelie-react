import { Link } from "react-router-dom";
import { notFoundContent } from "../data/content";

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-1 fw-bold text-muted">{notFoundContent.code}</h1>
      <h2 className="mb-4">{notFoundContent.title}</h2>
      <p className="mb-4">{notFoundContent.text}</p>
      <Link to="/" className="btn btn-dark btn-portifolio">
        {notFoundContent.btnText}
      </Link>
    </div>
  );
}
