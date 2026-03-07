import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <Header />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 pb-10 pt-4">
        {children}
      </main>
    </div>
  );
}

