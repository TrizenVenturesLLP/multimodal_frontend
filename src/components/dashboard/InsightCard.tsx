import { Info, AlertTriangle, TrendingUp } from "lucide-react";

interface Insight {
  type: "info" | "warning" | "positive";
  text: string;
}

interface InsightCardProps {
  insights: Insight[];
}

const iconMap = {
  info: Info,
  warning: AlertTriangle,
  positive: TrendingUp,
};

const styleMap = {
  info: "bg-info/10 text-info border-info/20",
  warning: "bg-warning/10 text-warning border-warning/20",
  positive: "bg-success/10 text-success border-success/20",
};

const InsightCard = ({ insights }: InsightCardProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-foreground">Key Insights</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {insights.map((insight, i) => {
          const Icon = iconMap[insight.type];
          return (
            <div
              key={i}
              className={`flex items-start gap-3 rounded-xl border p-4 ${styleMap[insight.type]}`}
            >
              <Icon className="h-5 w-5 mt-0.5 shrink-0" />
              <p className="text-sm font-medium">{insight.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightCard;
