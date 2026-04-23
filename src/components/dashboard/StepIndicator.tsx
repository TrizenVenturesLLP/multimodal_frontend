import { Check, Loader2 } from "lucide-react";

interface Step {
  label: string;
  status: "done" | "active" | "pending";
}

interface StepIndicatorProps {
  steps: Step[];
  message?: string;
}

const StepIndicator = ({ steps, message }: StepIndicatorProps) => {
  return (
    <div className="rounded-2xl bg-card p-8 shadow-lg border">
      <div className="flex items-center justify-center gap-2">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  step.status === "done"
                    ? "bg-success text-success-foreground"
                    : step.status === "active"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step.status === "done" ? (
                  <Check className="h-4 w-4" />
                ) : step.status === "active" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`text-sm font-medium ${
                  step.status === "pending"
                    ? "text-muted-foreground"
                    : "text-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-px w-12 ${
                  step.status === "done" ? "bg-success" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      {message && (
        <p className="mt-4 text-center text-sm text-muted-foreground animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};

export default StepIndicator;
