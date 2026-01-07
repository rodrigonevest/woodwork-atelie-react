import { useEffect, useState } from "react";
import { getSavedSession } from "../lib/supabaseHttp";

export function useSupabaseSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // sessão é controlada via localStorage (sem SDK)
    const s = getSavedSession();
    setSession(s);
    setLoading(false);
  }, []);

  return { session, loading, isAuthed: !!session?.access_token };
}
