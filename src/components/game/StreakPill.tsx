import { Flame } from "lucide-react";

interface StreakPillProps {
  streak: number;
}

export function StreakPill({ streak }: StreakPillProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-amber-300">
      <Flame className="h-4 w-4" />
      <span>{streak} dias</span>
    </div>
  );
}

