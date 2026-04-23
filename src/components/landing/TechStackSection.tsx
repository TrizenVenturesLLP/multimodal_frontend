import { Brain, Code, Server } from "lucide-react";

const columns = [
  {
    icon: Brain,
    title: "AI Models",
    items: ["CNN (Emotion Detection)", "Librosa Features", "Llama 3 (Feedback)"],
  },
  {
    icon: Code,
    title: "Frontend",
    items: ["React", "Tailwind CSS", "Recharts"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["FastAPI", "SQLite", "Python"],
  },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Built with modern, production-ready technologies
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {columns.map((col) => (
            <div
              key={col.title}
              className="rounded-2xl bg-card border p-6 shadow-md text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <col.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
