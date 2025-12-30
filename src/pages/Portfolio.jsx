import ProjectCard from "../components/ProjectCard";
import { portfolioItems, portfolioPageContent } from "../data/content";

export default function Portfolio() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="font-logo display-5">{portfolioPageContent.title}</h2>
        <p className="text-muted">{portfolioPageContent.subtitle}</p>
      </div>

      <div className="row">
        {portfolioItems.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            category={item.category}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
