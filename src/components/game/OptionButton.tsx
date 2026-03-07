import { motion } from "framer-motion";

interface OptionButtonProps {
  index: number;
  text: string;
  state: "idle" | "selected" | "correct" | "wrong";
  disabled?: boolean;
  onClick: () => void;
}

export function OptionButton({
  index,
  text,
  state,
  disabled,
  onClick,
}: OptionButtonProps) {
  const base =
    "w-full rounded-2xl border px-4 py-3 text-left text-sm font-medium transition shadow-sm";

  const palette: Record<typeof state, string> = {
    idle: "border-slate-700/80 bg-slate-900/80 hover:bg-slate-800/80",
    selected:
      "border-secondary-500/80 bg-secondary-500/10 text-secondary-100 shadow-secondary-500/30",
    correct:
      "border-success-500/80 bg-success-500/15 text-success-100 shadow-success-500/30",
    wrong: "border-error-500/80 bg-error-500/15 text-error-100",
  };

  const letter = String.fromCharCode(65 + index);

  return (
    <motion.button
      type="button"
      whileTap={disabled ? undefined : { scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${palette[state]} ${
        disabled ? "cursor-default opacity-90" : "cursor-pointer"
      }`}
    >
      <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-200">
        {letter}
      </span>
      <span>{text}</span>
    </motion.button>
  );
}

