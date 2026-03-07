import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/30",
  secondary:
    "bg-secondary-500 text-white hover:bg-secondary-500/90 shadow-md shadow-secondary-500/30",
  ghost:
    "bg-slate-900/60 text-slate-100 hover:bg-slate-800 border border-slate-700/80",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs rounded-full",
  md: "px-4 py-2 text-sm rounded-full",
  lg: "px-5 py-2.5 text-base rounded-full",
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97, y: 0 }}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children}
    </motion.button>
  );
}

