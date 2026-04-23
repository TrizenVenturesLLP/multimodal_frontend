interface ScoreCardProps {
  label: string;
  score: number;
  variant?: "primary" | "default";
}

const ScoreCard = ({ label, score, variant = "default" }: ScoreCardProps) => {
  return (
    <div
      className={`rounded-2xl p-6 shadow-lg border transition-transform hover:scale-[1.02] ${
        variant === "primary"
          ? "bg-primary text-primary-foreground"
          : "bg-card text-card-foreground"
      }`}
    >
      <p
        className={`text-sm font-medium ${
          variant === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"
        }`}
      >
        {label}
      </p>
      <p className="mt-2 text-4xl font-extrabold tracking-tight">{score}</p>
    </div>
  );
};

export default ScoreCard;
