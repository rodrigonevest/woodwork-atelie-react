const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const STORAGE_KEY = "ww_admin_session";

export function isSupabaseConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

export function getSavedSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // token expirado?
    if (parsed?.expires_at && Date.now() / 1000 > parsed.expires_at) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveSession(session) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearSession() {
  localStorage.removeItem(STORAGE_KEY);
}

function headers(authToken) {
  const h = {
    apikey: SUPABASE_ANON_KEY,
    "Content-Type": "application/json",
  };
  if (authToken) h.Authorization = `Bearer ${authToken}`;
  return h;
}

export async function signInWithPassword(email, password) {
  if (!isSupabaseConfigured()) {
    throw new Error(
      "Supabase não configurado. Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY."
    );
  }

  const url = `${SUPABASE_URL}/auth/v1/token?grant_type=password`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data?.error_description || data?.msg || "Falha no login");
  }

  // data = { access_token, refresh_token, expires_in, token_type, user }
  const session = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: Math.floor(Date.now() / 1000) + (data.expires_in || 0),
    user: data.user,
  };

  saveSession(session);
  return session;
}

export async function signOut() {
  clearSession();
}

export async function listPublishedPosts() {
  if (!isSupabaseConfigured()) return [];

  const url = `${SUPABASE_URL}/rest/v1/portfolio_posts?select=id,title,category,description,cover_url,created_at&is_published=eq.true&order=created_at.desc`;
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Erro ao buscar posts");
  return await res.json();
}

export async function listAllPosts(authToken) {
  const url = `${SUPABASE_URL}/rest/v1/portfolio_posts?select=*&order=created_at.desc`;
  const res = await fetch(url, { headers: headers(authToken) });
  const data = await res.json().catch(() => []);
  if (!res.ok) throw new Error(data?.message || "Erro ao buscar posts");
  return data;
}

export async function insertPost(authToken, payload) {
  const url = `${SUPABASE_URL}/rest/v1/portfolio_posts`;
  const res = await fetch(url, {
    method: "POST",
    headers: { ...headers(authToken), Prefer: "return=representation" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => []);
  if (!res.ok) throw new Error(data?.message || "Erro ao inserir");
  return data?.[0];
}

export async function updatePost(authToken, id, payload) {
  const url = `${SUPABASE_URL}/rest/v1/portfolio_posts?id=eq.${id}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { ...headers(authToken), Prefer: "return=representation" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => []);
  if (!res.ok) throw new Error(data?.message || "Erro ao atualizar");
  return data?.[0];
}

export async function deletePost(authToken, id) {
  const url = `${SUPABASE_URL}/rest/v1/portfolio_posts?id=eq.${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: headers(authToken),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data?.message || "Erro ao excluir");
  }
}

export function getPublicCoverUrl(path) {
  return `${SUPABASE_URL}/storage/v1/object/public/portfolio/${path}`;
}

export async function uploadCover(authToken, file) {
  const ext = file.name.split(".").pop();
  const filename = `${crypto.randomUUID()}.${ext}`;
  const objectPath = `covers/${filename}`;
  const url = `${SUPABASE_URL}/storage/v1/object/portfolio/${objectPath}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${authToken}`,
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "false",
    },
    body: file,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data?.message || "Erro ao enviar imagem");
  }

  return {
    objectPath,
    publicUrl: getPublicCoverUrl(objectPath),
  };
}
