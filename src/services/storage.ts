const STORAGE_PREFIX = "concurso_enfermagem_";

export function saveToStorage<T>(key: string, value: T) {
  try {
    const payload = JSON.stringify(value);
    window.localStorage.setItem(STORAGE_PREFIX + key, payload);
  } catch {
    // ignore
  }
}

export function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

