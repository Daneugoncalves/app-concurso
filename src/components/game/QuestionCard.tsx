import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/types";
import { formatCategoryLabel } from "@/utils/formatCategory";
import { OptionButton } from "@/components/game/OptionButton";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface QuestionCardProps {
  question: Question;
  index: number;
  total: number;
  onAnswered: (selectedIndex: number, isCorrect: boolean) => void;
}

export function QuestionCard({
  question,
  index,
  total,
  onAnswered,
}: QuestionCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    // Sempre que a questão mudar, limpamos o estado de seleção
    setSelected(null);
    setLocked(false);
  }, [question.id]);

  const isCorrect = selected === question.correctAnswerIndex;

  const handleSelect = (optionIndex: number) => {
    if (locked) return;
    setSelected(optionIndex);
    setLocked(true);
    const correct = optionIndex === question.correctAnswerIndex;
    onAnswered(optionIndex, correct);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -24, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Card className="flex flex-col gap-5">
          <div className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span>
              Questão{" "}
              <span className="font-semibold text-slate-100">
                {index + 1}
              </span>{" "}
              de{" "}
              <span className="font-semibold text-slate-100">{total}</span>
            </span>
            <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]">
              {formatCategoryLabel(question.category)}
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-slate-50">
              {question.question}
            </h2>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
              Dificuldade:{" "}
              <span className="text-slate-300">{question.difficulty}</span> ·{" "}
              <span className="text-emerald-400">+{question.xp} XP</span>
            </p>
          </div>

          <div className="mt-1 flex flex-col gap-3">
            {question.options.map((opt, i) => {
              let state: "idle" | "selected" | "correct" | "wrong" = "idle";

              if (selected !== null) {
                if (i === question.correctAnswerIndex) state = "correct";
                else if (i === selected) state = "wrong";
                else state = "idle";
              } else if (selected === i) {
                state = "selected";
              }

              return (
                <OptionButton
                  key={i}
                  index={i}
                  text={opt}
                  state={state}
                  disabled={locked}
                  onClick={() => handleSelect(i)}
                />
              );
            })}
          </div>

          <AnimatePresence>
            {selected !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className={`mt-1 rounded-2xl border px-4 py-3 text-xs leading-relaxed ${
                  isCorrect
                    ? "border-success-500/50 bg-success-500/10 text-emerald-100"
                    : "border-error-500/50 bg-error-500/10 text-red-100"
                }`}
              >
                <p className="mb-1 font-semibold">
                  {isCorrect ? "Boa! Resposta correta." : "Quase lá! Veja a explicação:"}
                </p>
                <p>{question.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
            <span>
              {selected === null
                ? "Selecione uma alternativa."
                : isCorrect
                ? "Você ganhou XP nesta questão!"
                : "Você não ganhou XP, mas aprendeu algo novo."}
            </span>
            <Button
              variant="ghost"
              size="sm"
              disabled
              className="cursor-default border-0 px-0 text-[11px] text-slate-500 shadow-none hover:bg-transparent"
            >
              Modo estudo gamificado
            </Button>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

