import { Flame, HeartPulse, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary-500 to-secondary-500 shadow-lg shadow-primary-500/30">
            <HeartPulse className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Duolingo da Enfermagem
            </p>
            <p className="text-sm font-semibold text-slate-50">
              Concurso Gamificado
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-amber-400">
            <Flame className="h-4 w-4 text-amber-400" />
            <span>Streak</span>
          </div>
          <button
            type="button"
            onClick={() => setIsDark((v) => !v)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-300 shadow-sm transition hover:bg-slate-800 hover:text-slate-50"
            aria-label="Alternar tema"
          >
            {isDark ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

