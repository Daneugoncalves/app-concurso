interface StatBadgeProps {
  label: string;
  value: string;
}

export function StatBadge({ label, value }: StatBadgeProps) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-slate-900/80 px-4 py-3 text-sm shadow-inner shadow-slate-950/60">
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
        {label}
      </span>
      <span className="text-base font-semibold text-slate-50">{value}</span>
    </div>
  );
}

