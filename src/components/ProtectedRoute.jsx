import { Navigate } from "react-router-dom";
import { useSupabaseSession } from "../hooks/useSupabaseSession";

export default function ProtectedRoute({ children }) {
  const { isAuthed, loading } = useSupabaseSession();

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center text-muted">Carregando...</div>
      </div>
    );
  }

  if (!isAuthed) return <Navigate to="/admin" replace />;

  return children;
}
