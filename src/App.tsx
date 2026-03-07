import { Route, Routes, Navigate } from "react-router-dom";
import { DashboardPage } from "@/pages/DashboardPage";
import { QuizSessionPage } from "@/pages/QuizSessionPage";
import { ResultScreenPage } from "@/pages/ResultScreenPage";
import { AppShell } from "@/components/layout/AppShell";

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/quiz" element={<QuizSessionPage />} />
        <Route path="/resultado" element={<ResultScreenPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}

export default App;

