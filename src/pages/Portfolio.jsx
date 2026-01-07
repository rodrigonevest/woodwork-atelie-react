import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { portfolioItems, portfolioPageContent } from "../data/content";
import { isSupabaseConfigured, listPublishedPosts } from "../lib/supabaseHttp";

export default function Portfolio() {
  const [items, setItems] = useState(portfolioItems);
  const [loading, setLoading] = useState(isSupabaseConfigured());

  useEffect(() => {
    async function load() {
      if (!isSupabaseConfigured()) return;

      try {
        const data = await listPublishedPosts();
        if (Array.isArray(data)) {
          setItems(
            data.map((d) => ({
            id: d.id,
            title: d.title,
            category: d.category || "Portfólio",
            description: d.description,
            image: d.cover_url,
            }))
          );
        }
      } catch {
        // se falhar, mantém fallback estático
      }
      setLoading(false);
    }

    load();
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="font-logo display-5">{portfolioPageContent.title}</h2>
        <p className="text-muted">{portfolioPageContent.subtitle}</p>
      </div>

      <div className="row">
        {loading ? (
          <div className="text-center text-muted py-5">Carregando...</div>
        ) : null}

        {!loading && items.length === 0 ? (
          <div className="text-center text-muted py-5">
            Nenhum projeto publicado ainda.
          </div>
        ) : null}

        {items.map((item) => (
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
