import { CheckCircle, AlertCircle, Lightbulb } from "lucide-react";

interface FeedbackCardProps {
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
}

const Section = ({
  title,
  items,
  icon: Icon,
  colorClass,
}: {
  title: string;
  items: string[];
  icon: React.ElementType;
  colorClass: string;
}) => (
  <div>
    <div className="flex items-center gap-2 mb-3">
      <Icon className={`h-5 w-5 ${colorClass}`} />
      <h4 className="text-base font-semibold text-foreground">{title}</h4>
    </div>
    <ul className="space-y-2 pl-7">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-muted-foreground list-disc">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const FeedbackCard = ({ strengths, weaknesses, suggestions }: FeedbackCardProps) => {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-lg border">
      <h3 className="text-lg font-semibold text-foreground mb-6">AI Feedback</h3>
      <div className="grid gap-6 md:grid-cols-3">
        <Section
          title="Strengths"
          items={strengths}
          icon={CheckCircle}
          colorClass="text-success"
        />
        <Section
          title="Weaknesses"
          items={weaknesses}
          icon={AlertCircle}
          colorClass="text-destructive"
        />
        <Section
          title="Suggestions"
          items={suggestions}
          icon={Lightbulb}
          colorClass="text-warning"
        />
      </div>
    </div>
  );
};

export default FeedbackCard;
