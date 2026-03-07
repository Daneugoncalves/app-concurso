import { Category } from "@/types";

const CATEGORY_LABELS: Record<Category, string> = {
  LEGISLACAO: "Legislação",
  PORTUGUES: "Português",
  RACIOCINIO_LOGICO: "Raciocínio lógico",
  CONHECIMENTOS_ESPECIFICOS: "Conhecimentos específicos",
};

export function formatCategoryLabel(category: Category): string {
  return CATEGORY_LABELS[category] ?? category;
}
