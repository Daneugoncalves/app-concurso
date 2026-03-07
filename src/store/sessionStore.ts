import { create } from "zustand";
import { QUESTIONS } from "@/data/questions";
import { SessionAnswer, SessionConfig, SessionMode } from "@/types";
import { shuffleArray } from "@/utils/shuffle";

interface SessionState {
  questions: typeof QUESTIONS;
  currentIndex: number;
  answers: SessionAnswer[];
  config: SessionConfig | null;
  isFinished: boolean;
  startSession: (config: SessionConfig) => void;
  submitAnswer: (answer: SessionAnswer) => void;
  nextQuestion: () => void;
  resetSession: () => void;
}

function filterQuestions(config: SessionConfig) {
  let pool = [...QUESTIONS];

  if (config.category !== "GERAL") {
    pool = pool.filter((q) => q.category === config.category);
  }

  if (config.difficulty !== "ALL") {
    pool = pool.filter((q) => q.difficulty === config.difficulty);
  }

  pool = shuffleArray(pool);

  if (config.mode === "SIMULADO_10") {
    return pool.slice(0, 10);
  }

  return pool;
}

export const useSessionStore = create<SessionState>((set, get) => ({
  questions: [],
  currentIndex: 0,
  answers: [],
  config: null,
  isFinished: false,
  startSession: (config) => {
    const questions = filterQuestions(config);
    set({
      questions,
      currentIndex: 0,
      answers: [],
      config,
      isFinished: false,
    });
  },
  submitAnswer: (answer) => {
    const { answers } = get();
    set({ answers: [...answers, answer] });
  },
  nextQuestion: () => {
    set((state) => {
      const nextIndex = state.currentIndex + 1;
      const isFinished = nextIndex >= state.questions.length;
      return {
        ...state,
        currentIndex: isFinished ? state.currentIndex : nextIndex,
        isFinished,
      };
    });
  },
  resetSession: () => {
    set({
      questions: [],
      currentIndex: 0,
      answers: [],
      config: null,
      isFinished: false,
    });
  },
}));

