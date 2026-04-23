import { Progress } from "@/components/ui/progress";

interface MetricCardProps {
  name: string;
  value: number;
  justification?: string;
}

const getColor = (v: number) => {
  if (v >= 70) return "text-success";
  if (v >= 40) return "text-warning";
  return "text-destructive";
};

const getBarClass = (v: number) => {
  if (v >= 70) return "[&>div]:bg-success";
  if (v >= 40) return "[&>div]:bg-warning";
  return "[&>div]:bg-destructive";
};

const MetricCard = ({ name, value, justification }: MetricCardProps) => {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-md border hover:border-primary/30 transition-all hover:bg-secondary/10 relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <span className={`text-lg font-bold ${getColor(value)}`}>{value}</span>
      </div>
      <Progress value={value} className={`h-2 mb-3 ${getBarClass(value)}`} />
      {justification && (
        <p className="text-xs leading-relaxed text-muted-foreground italic font-medium mt-1">
          {justification}
        </p>
      )}
    </div>
  );
};

export default MetricCard;
