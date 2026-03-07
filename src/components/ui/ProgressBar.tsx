interface ProgressBarProps {
  value: number; // 0–100
}

export function ProgressBar({ value }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-success-500 transition-[width]"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

