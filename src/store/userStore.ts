import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserStats } from "@/types";
import { computeStreak } from "@/utils/streak";
import { createInitialStats, levelProgress } from "@/utils/xp";

interface UserStoreState extends UserStats {
  addXP: (amount: number) => void;
  recordAnswer: (isCorrect: boolean) => void;
  updateStudyDay: () => void;
}

export const useUserStore = create<UserStoreState>()(
  persist(
    (set, get) => ({
      ...createInitialStats(),
      addXP: (amount) => {
        set((state) => {
          const nextXp = state.xp + amount;
          const { level } = levelProgress(nextXp);
          return { ...state, xp: nextXp, level };
        });
      },
      recordAnswer: (isCorrect) => {
        set((state) => {
          const totalAnswered = state.totalAnswered + 1;
          const totalCorrect = state.totalCorrect + (isCorrect ? 1 : 0);
          const bestCorrectStreak = isCorrect
            ? state.bestCorrectStreak + 1
            : 0;
          const best = Math.max(state.bestCorrectStreak, bestCorrectStreak);

          const achievements = [...state.achievements];

          if (best >= 10 && !achievements.includes("10_acertos_seguidos")) {
            achievements.push("10_acertos_seguidos");
          }
          if (
            totalAnswered >= 100 &&
            !achievements.includes("100_questoes_respondidas")
          ) {
            achievements.push("100_questoes_respondidas");
          }

          return {
            ...state,
            totalAnswered,
            totalCorrect,
            bestCorrectStreak,
            bestStreak: Math.max(state.bestStreak, state.streak),
            achievements,
          };
        });
      },
      updateStudyDay: () => {
        set((state) => {
          const { newStreak, newLastStudy } = computeStreak(
            state.streak,
            state.lastStudyDate
          );
          return {
            ...state,
            streak: newStreak,
            lastStudyDate: newLastStudy,
            bestStreak: Math.max(state.bestStreak, newStreak),
          };
        });
      },
    }),
    {
      name: "user_stats_v1",
    }
  )
);

