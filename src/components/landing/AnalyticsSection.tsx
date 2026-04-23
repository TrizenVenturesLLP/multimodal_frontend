import { Link } from "react-router-dom";
import { Layers, Brain, ArrowRight } from "lucide-react";

const modules = [
  {
    icon: Layers,
    title: "Multimodal Analysis",
    description: "Synchronized cross-modal evaluation combining acoustic signals and visual landmarks.",
  },
  {
    icon: Brain,
    title: "Emotion Insights",
    description: "XAI-driven analysis providing ground-truth proofs for every behavioral metric.",
  },
];

const AnalyticsSection = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Analysis Modules
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Powerful tools for deep interview evaluation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {modules.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl bg-card border p-8 shadow-md transition-all hover:shadow-xl"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <m.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">{m.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {m.description}
              </p>
              <Link
                to="/dashboard"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Open Module <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
