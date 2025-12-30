export default function ProjectCard({ title, category, image, description }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="overflow-hidden">
          <img
            src={image}
            className="card-img-top project-card-img"
            alt={title}
          />
        </div>
        <div className="card-body text-center">
          <span className="badge bg-secondary mb-2">{category}</span>
          <h5 className="card-title font-logo fs-6">{title}</h5>
          <p className="card-text text-muted small">{description}</p>
        </div>
      </div>
    </div>
  );
}
