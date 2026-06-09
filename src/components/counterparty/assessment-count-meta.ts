import { Flame, Zap, CheckCircle2 } from "lucide-react";

export type AssessmentCountKind = "attention" | "info" | "clear";

export const assessmentCountMeta: Record<
  AssessmentCountKind,
  {
    label: string;
    icon: typeof Flame;
    bg: string;
    icon_color: string;
    num: string;
  }
> = {
  attention: {
    label: "Требует внимания",
    icon: Flame,
    bg: "bg-rose-50",
    icon_color: "text-rose-500",
    num: "text-rose-700",
  },
  info: {
    label: "Информационные совпадения",
    icon: Zap,
    bg: "bg-amber-50",
    icon_color: "text-amber-600",
    num: "text-amber-700",
  },
  clear: {
    label: "Без замечаний",
    icon: CheckCircle2,
    bg: "bg-emerald-50",
    icon_color: "text-emerald-600",
    num: "text-emerald-700",
  },
};
