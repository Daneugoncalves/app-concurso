export type Category =
  | "LEGISLACAO"
  | "PORTUGUES"
  | "RACIOCINIO_LOGICO"
  | "CONHECIMENTOS_ESPECIFICOS";

export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  xp: number;
}

export type SessionMode = "INFINITE" | "SIMULADO_10";

export interface SessionConfig {
  category: Category | "GERAL";
  difficulty: Difficulty | "ALL";
  mode: SessionMode;
}

export interface UserStats {
  xp: number;
  level: number;
  streak: number;
  lastStudyDate: string | null;
  totalAnswered: number;
  totalCorrect: number;
  bestStreak: number;
  bestCorrectStreak: number;
  achievements: string[];
}

export interface SessionAnswer {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
}

