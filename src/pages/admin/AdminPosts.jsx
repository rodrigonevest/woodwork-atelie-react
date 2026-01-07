import { useEffect, useMemo, useState } from "react";
import {
  deletePost,
  getSavedSession,
  insertPost,
  isSupabaseConfigured,
  listAllPosts,
  signOut,
  updatePost,
  uploadCover,
} from "../../lib/supabaseHttp";

function formatDate(dt) {
  try {
    return new Date(dt).toLocaleString("pt-BR");
  } catch {
    return dt;
  }
}

// Upload de capa feito via HTTP para o Supabase Storage (sem SDK)

export default function AdminPosts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [editing, setEditing] = useState(null); // item | null
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isPublished, setIsPublished] = useState(true);
  const [coverFile, setCoverFile] = useState(null);

  const hasSupabase = useMemo(() => isSupabaseConfigured(), []);

  async function load() {
    setError("");
    if (!isSupabaseConfigured()) {
      setItems([]);
      setLoading(false);
      return;
    }
    const session = getSavedSession();
    const token = session?.access_token;
    if (!token) {
      setItems([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const data = await listAllPosts(token);
      setItems(data ?? []);
    } catch (err) {
      setError(err?.message || "Erro ao buscar posts");
      setItems([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startNew() {
    setEditing(null);
    setTitle("");
    setCategory("");
    setDescription("");
    setIsPublished(true);
    setCoverFile(null);
  }

  function startEdit(item) {
    setEditing(item);
    setTitle(item.title ?? "");
    setCategory(item.category ?? "");
    setDescription(item.description ?? "");
    setIsPublished(!!item.is_published);
    setCoverFile(null);
  }

  async function save(e) {
    e.preventDefault();
    setError("");

    if (!isSupabaseConfigured()) {
      setError(
        "Supabase não configurado. Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no .env e no Vercel."
      );
      return;
    }

    const session = getSavedSession();
    const token = session?.access_token;
    if (!token) {
      setError("Você precisa estar logado. Vá para /admin.");
      return;
    }

    setSaving(true);
    try {
      let cover_url = editing?.cover_url ?? null;
      if (coverFile) {
        const uploaded = await uploadCover(token, coverFile);
        cover_url = uploaded.publicUrl;
      }

      const payload = {
        title,
        category,
        description,
        cover_url,
        is_published: isPublished,
      };

      if (editing) {
        await updatePost(token, editing.id, payload);
      } else {
        await insertPost(token, payload);
      }

      startNew();
      await load();
    } catch (err) {
      setError(err?.message || "Erro ao salvar");
    } finally {
      setSaving(false);
    }
  }

  async function remove(item) {
    const session = getSavedSession();
    const token = session?.access_token;
    if (!token) return;
    // confirmação simples
    // eslint-disable-next-line no-alert
    if (!window.confirm(`Excluir "${item.title}"?`)) return;

    setError("");
    try {
      await deletePost(token, item.id);
      await load();
    } catch (err) {
      setError(err?.message || "Erro ao excluir");
    }
  }

  async function logout() {
    await signOut();
    window.location.href = "/admin";
  }

  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4">
        <div>
          <h2 className="mb-1">Painel do Portfólio</h2>
          <div className="text-muted">Crie e edite os posts exibidos em /portfolio</div>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-dark" onClick={startNew}>
            + Novo
          </button>
          <button className="btn btn-dark" onClick={logout}>
            Sair
          </button>
        </div>
      </div>

      {!hasSupabase ? (
        <div className="alert alert-warning">
          Supabase não configurado. Defina <b>VITE_SUPABASE_URL</b> e <b>VITE_SUPABASE_ANON_KEY</b>.
        </div>
      ) : null}

      {error ? <div className="alert alert-danger">{error}</div> : null}

      <div className="row g-4">
        <div className="col-12 col-lg-5">
          <div className="card p-4">
            <h5 className="mb-3">{editing ? "Editar post" : "Novo post"}</h5>

            <form onSubmit={save}>
              <div className="mb-3">
                <label className="form-label">Título</label>
                <input
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Categoria (opcional)</label>
                <input
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Ex.: Churrasco, Cozinha, Planejados"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descrição</label>
                <textarea
                  className="form-control"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Imagem de capa</label>
                <input
                  className="form-control"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCoverFile(e.target.files?.[0] ?? null)}
                />
                <div className="form-text" style={{display: "none"}}>
                  Bucket do Supabase Storage: <code>portfolio</code> (pasta <code>covers/</code>)
                </div>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isPublished}
                  onChange={(e) => setIsPublished(e.target.checked)}
                  id="isPublished"
                />
                <label className="form-check-label" htmlFor="isPublished">
                  Publicar
                </label>
              </div>

              <button className="btn btn-dark w-100" disabled={saving}>
                {saving ? "Salvando..." : "Salvar"}
              </button>
            </form>
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <div className="card p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="mb-0">Posts</h5>
              <button className="btn btn-outline-secondary btn-sm" onClick={load} disabled={loading}>
                Atualizar
              </button>
            </div>

            {loading ? (
              <div className="text-muted">Carregando...</div>
            ) : items.length === 0 ? (
              <div className="text-muted">Nenhum post ainda.</div>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th>Status</th>
                      <th>Criado em</th>
                      <th className="text-end">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((it) => (
                      <tr key={it.id}>
                        <td>
                          <div className="fw-semibold">{it.title}</div>
                          <div className="text-muted small text-truncate" style={{ maxWidth: 320 }}>
                            {it.description}
                          </div>
                        </td>
                        <td>
                          {it.is_published ? (
                            <span className="badge text-bg-success">Publicado</span>
                          ) : (
                            <span className="badge text-bg-secondary">Rascunho</span>
                          )}
                        </td>
                        <td className="text-muted small">{formatDate(it.created_at)}</td>
                        <td className="text-end">
                          <div className="btn-group">
                            <button className="btn btn-outline-dark btn-sm" onClick={() => startEdit(it)}>
                              Editar
                            </button>
                            <button className="btn btn-outline-danger btn-sm" onClick={() => remove(it)}>
                              Excluir
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
