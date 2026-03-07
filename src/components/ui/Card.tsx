import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-xl shadow-black/40 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

