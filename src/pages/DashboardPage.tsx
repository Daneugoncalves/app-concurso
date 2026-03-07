import { Trophy, Target, Infinity, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatBadge } from "@/components/ui/StatBadge";
import { useUserStore } from "@/store/userStore";
import { useLevelProgress } from "@/hooks/useLevelProgress";
import { useSessionStore } from "@/store/sessionStore";
import { SessionConfig } from "@/types";

export function DashboardPage() {
  const navigate = useNavigate();
  const { xp, level, progress } = useLevelProgress();
  const streak = useUserStore((s) => s.streak);
  const totalAnswered = useUserStore((s) => s.totalAnswered);
  const totalCorrect = useUserStore((s) => s.totalCorrect);
  const bestStreak = useUserStore((s) => s.bestStreak);
  const startSession = useSessionStore((s) => s.startSession);

  const accuracy =
    totalAnswered === 0
      ? "–"
      : `${Math.round((totalCorrect / totalAnswered) * 100)}%`;

  const handleStart = (config: SessionConfig) => {
    startSession(config);
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-tr from-primary-500 to-secondary-500 shadow-xl shadow-primary-500/40">
            <span className="text-2xl">🩺</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Técnica de Enfermagem
            </p>
            <p className="text-lg font-semibold text-slate-50">
              Seu treino gamificado de concursos
            </p>
          </div>
        </div>

        <Card className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Nível {level}
              </p>
              <p className="text-sm text-slate-200">
                {xp} XP · rumo ao próximo nível
              </p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs font-medium text-slate-400">
                Streak atual
              </span>
              <span className="text-base font-semibold text-amber-300">
                {streak} dias 🔥
              </span>
            </div>
          </div>
          <ProgressBar value={progress} />
        </Card>
      </section>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatBadge label="Respondidas" value={String(totalAnswered)} />
        <StatBadge label="% de acertos" value={accuracy} />
        <StatBadge label="Melhor streak" value={`${bestStreak} dias`} />
        <StatBadge label="Melhor sequência" value="10+ acertos" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Modos de estudo
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          <Card className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                  <Infinity className="h-4 w-4 text-secondary-500" />
                  Treino infinito
                </p>
                <p className="text-xs text-slate-400">
                  Pratique sem limite, com perguntas embaralhadas.
                </p>
              </div>
              <Button
                size="sm"
                onClick={() =>
                  handleStart({
                    category: "GERAL",
                    difficulty: "ALL",
                    mode: "INFINITE",
                  })
                }
              >
                Começar
              </Button>
            </div>
          </Card>

          <Card className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                  <Target className="h-4 w-4 text-primary-500" />
                  Simulado (10 questões)
                </p>
                <p className="text-xs text-slate-400">
                  Experiência de prova rápida com resultado final.
                </p>
              </div>
              <Button
                size="sm"
                variant="secondary"
                onClick={() =>
                  handleStart({
                    category: "GERAL",
                    difficulty: "ALL",
                    mode: "SIMULADO_10",
                  })
                }
              >
                Simular
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Filtros rápidos
        </h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <Button
            variant="ghost"
            size="sm"
            leftIcon={<BookOpen className="h-3.5 w-3.5" />}
            onClick={() =>
              handleStart({
                category: "CONHECIMENTOS_ESPECIFICOS",
                difficulty: "ALL",
                mode: "SIMULADO_10",
              })
            }
          >
            Conhecimentos Específicos
          </Button>
          <Button
            variant="ghost"
            size="sm"
            leftIcon={<BookOpen className="h-3.5 w-3.5" />}
            onClick={() =>
              handleStart({
                category: "LEGISLACAO",
                difficulty: "ALL",
                mode: "SIMULADO_10",
              })
            }
          >
            Legislação SUS
          </Button>
          <Button
            variant="ghost"
            size="sm"
            leftIcon={<BookOpen className="h-3.5 w-3.5" />}
            onClick={() =>
              handleStart({
                category: "PORTUGUES",
                difficulty: "ALL",
                mode: "SIMULADO_10",
              })
            }
          >
            Português
          </Button>
          <Button
            variant="ghost"
            size="sm"
            leftIcon={<BookOpen className="h-3.5 w-3.5" />}
            onClick={() =>
              handleStart({
                category: "RACIOCINIO_LOGICO",
                difficulty: "ALL",
                mode: "SIMULADO_10",
              })
            }
          >
            Raciocínio lógico
          </Button>
        </div>
      </section>

      <section>
        <Card className="flex items-center justify-between gap-3">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
              <Trophy className="h-4 w-4 text-amber-300" />
              Suas conquistas
            </p>
            <p className="text-xs text-slate-400">
              Desbloqueie badges ao estudar todos os dias.
            </p>
          </div>
          <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] font-medium text-slate-300">
            Em breve: ranking local
          </span>
        </Card>
      </section>
    </div>
  );
}

