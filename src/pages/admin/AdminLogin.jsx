import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPassword } from "../../lib/supabaseHttp";
import { useSupabaseSession } from "../../hooks/useSupabaseSession";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { isAuthed } = useSupabaseSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthed) navigate("/admin/posts", { replace: true });
  }, [isAuthed, navigate]);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    setLoading(true);
    try {
      await signInWithPassword(email, password);
    } catch (err) {
      setError(err?.message || "Falha no login");
      setLoading(false);
      return;
    }
    setLoading(false);

    navigate("/admin/posts", { replace: true });
  }

  return (
    <div className="container py-5" style={{ maxWidth: 520 }}>
      <h2 className="mb-3">Área Administrativa</h2>
      <p className="text-muted">
        Faça login para cadastrar e editar projetos do portfólio.
      </p>

      {error ? <div className="alert alert-danger">{error}</div> : null}

      <form onSubmit={onSubmit} className="card p-4">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="admin@exemplo.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-dark w-100" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
