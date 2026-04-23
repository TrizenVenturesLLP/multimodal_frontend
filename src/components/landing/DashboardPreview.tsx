const scores = [
  { label: "Final Score", value: 82, primary: true },
  { label: "Audio Score", value: 78 },
  { label: "Video Score", value: 86 },
];

const metrics = [
  { name: "Confidence", value: 85 },
  { name: "Stress", value: 35 },
  { name: "Engagement", value: 90 },
];

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Dashboard Preview
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            See what your analysis results look like
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl bg-card border shadow-xl p-6 md:p-8">
          {/* Title bar */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-3 w-3 rounded-full bg-foreground/15" />
            <div className="h-3 w-3 rounded-full bg-foreground/15" />
            <div className="h-3 w-3 rounded-full bg-foreground/15" />
            <span className="ml-3 text-xs text-muted-foreground font-medium">
              InterviewAI — Analysis Results
            </span>
          </div>

          {/* Scores */}
          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            {scores.map((s) => (
              <div
                key={s.label}
                className={`rounded-xl p-5 ${
                  s.primary
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className={`text-xs font-medium ${s.primary ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {s.label}
                </p>
                <p className="text-3xl font-extrabold mt-1">{s.value}%</p>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="space-y-3">
            {metrics.map((m) => (
              <div key={m.name} className="flex items-center gap-4">
                <span className="w-28 text-sm font-medium text-foreground">{m.name}</span>
                <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${m.value}%` }}
                  />
                </div>
                <span className="w-10 text-right text-sm font-bold text-foreground">
                  {m.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
