import { AnimatePresence, motion } from "framer-motion";

interface XPToastProps {
  xp: number;
  visible: boolean;
}

export function XPToast({ xp, visible }: XPToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none fixed inset-x-0 top-20 z-40 flex justify-center"
        >
          <div className="rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-emerald-50 shadow-lg shadow-emerald-500/40">
            +{xp} XP
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

