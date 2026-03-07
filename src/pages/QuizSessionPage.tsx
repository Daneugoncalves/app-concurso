import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStore } from "@/store/sessionStore";
import { useUserStore } from "@/store/userStore";
import { QuestionCard } from "@/components/game/QuestionCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { XPToast } from "@/components/game/XPToast";

export function QuizSessionPage() {
  const navigate = useNavigate();
  const { questions, currentIndex, isFinished, answers, config, nextQuestion } =
    useSessionStore();
  const addXP = useUserStore((s) => s.addXP);
  const recordAnswer = useUserStore((s) => s.recordAnswer);
  const updateStudyDay = useUserStore((s) => s.updateStudyDay);

  const [lastXP, setLastXP] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!config || questions.length === 0) {
      navigate("/");
    } else {
      updateStudyDay();
    }
  }, [config, navigate, questions.length, updateStudyDay]);

  useEffect(() => {
    if (!showToast) return;
    const id = setTimeout(() => setShowToast(false), 1200);
    return () => clearTimeout(id);
  }, [showToast]);

  if (!config || questions.length === 0) {
    return null;
  }

  const current = questions[currentIndex];
  const progress = Math.round(((currentIndex) / questions.length) * 100);

  const handleAnswered = (selectedIndex: number, isCorrect: boolean) => {
    recordAnswer(isCorrect);

    if (isCorrect) {
      const xp = current.xp;
      addXP(xp);
      setLastXP(xp);
      setShowToast(true);
    }

    const existing = answers.find((a) => a.questionId === current.id);
    if (!existing) {
      useSessionStore.setState((state) => ({
        answers: [
          ...state.answers,
          { questionId: current.id, selectedIndex, isCorrect },
        ],
      }));
    }
  };

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      navigate("/resultado");
    } else {
      nextQuestion();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <XPToast xp={lastXP} visible={showToast} />

      <header className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>
            Modo{" "}
            <span className="font-semibold text-slate-100">
              {config.mode === "INFINITE" ? "Treino infinito" : "Simulado"}
            </span>
          </span>
          <span>
            {currentIndex + 1}/{questions.length} questões
          </span>
        </div>
        <ProgressBar value={progress} />
      </header>

      <QuestionCard
        question={current}
        index={currentIndex}
        total={questions.length}
        onAnswered={handleAnswered}
      />

      <footer className="mt-1 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
          Sair
        </Button>
        <Button size="sm" onClick={handleNext}>
          {currentIndex === questions.length - 1
            ? "Ver resultado"
            : "Próxima questão"}
        </Button>
      </footer>
    </div>
  );
}

