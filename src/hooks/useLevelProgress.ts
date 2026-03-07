import { useUserStore } from "@/store/userStore";
import { levelProgress } from "@/utils/xp";

export function useLevelProgress() {
  const xp = useUserStore((s) => s.xp);
  const { level, progress } = levelProgress(xp);
  return { xp, level, progress };
}

