import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSessionStore } from "@/store/sessionStore";
import { useUserStore } from "@/store/userStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Trophy } from "lucide-react";

export function ResultScreenPage() {
  const navigate = useNavigate();
  const { questions, answers, resetSession } = useSessionStore();
  const xp = useUserStore((s) => s.xp);
  const totalCorrect = answers.filter((a) => a.isCorrect).length;

  useEffect(() => {
    if (questions.length === 0) {
      navigate("/");
    }
  }, [questions.length, navigate]);

  if (questions.length === 0) return null;

  const accuracy = Math.round((totalCorrect / questions.length) * 100);

  const handleBack = () => {
    resetSession();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full"
      >
        <Card className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 shadow-xl shadow-amber-400/40">
            <Trophy className="h-7 w-7" />
          </div>
          <div className="space-y-1">
            <h1 className="text-lg font-semibold text-slate-50">
              Fase concluída! 🎉
            </h1>
            <p className="text-sm text-slate-300">
              Você acertou{" "}
              <span className="font-semibold text-emerald-300">
                {totalCorrect}/{questions.length}
              </span>{" "}
              questões.
            </p>
          </div>

          <div className="mt-1 w-full space-y-2 text-sm">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Desempenho na fase</span>
              <span className="font-semibold text-slate-100">
                {accuracy}% de acertos
              </span>
            </div>
            <ProgressBar value={accuracy} />
          </div>

          <p className="mt-2 text-xs text-slate-400">
            XP total acumulado:{" "}
            <span className="font-semibold text-emerald-300">{xp} XP</span>.
            Continue praticando para subir de nível!
          </p>

          <div className="mt-2 flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
            <Button variant="secondary" onClick={handleBack}>
              Voltar ao dashboard
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/quiz")}
              className="sm:min-w-[170px]"
            >
              Jogar novamente
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

