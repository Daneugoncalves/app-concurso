import { UserStats } from "@/types";

export function xpToLevel(xp: number): number {
  if (xp < 100) return 1;
  if (xp < 300) return 2;
  if (xp < 600) return 3;
  if (xp < 1000) return 4;
  return 5;
}

export function levelProgress(xp: number): { level: number; progress: number } {
  const level = xpToLevel(xp);
  const thresholds: Record<number, { min: number; max: number }> = {
    1: { min: 0, max: 100 },
    2: { min: 100, max: 300 },
    3: { min: 300, max: 600 },
    4: { min: 600, max: 1000 },
    5: { min: 1000, max: 1500 },
  };

  const { min, max } = thresholds[level] ?? thresholds[5];
  const range = max - min;
  const value = Math.min(Math.max(xp - min, 0), range);
  return {
    level,
    progress: range === 0 ? 100 : Math.round((value / range) * 100),
  };
}

export function createInitialStats(): UserStats {
  return {
    xp: 0,
    level: 1,
    streak: 0,
    lastStudyDate: null,
    totalAnswered: 0,
    totalCorrect: 0,
    bestStreak: 0,
    bestCorrectStreak: 0,
    achievements: [],
  };
}

