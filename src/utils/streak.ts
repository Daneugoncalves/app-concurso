export function isSameDay(d1: Date, d2: Date): boolean {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export function isYesterday(base: Date, maybeYesterday: Date): boolean {
  const yesterday = new Date(base);
  yesterday.setDate(base.getDate() - 1);
  return isSameDay(yesterday, maybeYesterday);
}

export function computeStreak(
  currentStreak: number,
  lastStudyISO: string | null,
  now: Date = new Date()
): { newStreak: number; newLastStudy: string } {
  if (!lastStudyISO) {
    return { newStreak: 1, newLastStudy: now.toISOString() };
  }

  const last = new Date(lastStudyISO);

  if (isSameDay(last, now)) {
    return { newStreak: currentStreak || 1, newLastStudy: lastStudyISO };
  }

  if (isYesterday(now, last)) {
    return { newStreak: currentStreak + 1, newLastStudy: now.toISOString() };
  }

  return { newStreak: 1, newLastStudy: now.toISOString() };
}

