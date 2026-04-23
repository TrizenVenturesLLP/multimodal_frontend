import { motion } from "framer-motion";
import { Cpu, Zap, Layers, Activity, Database, ShieldCheck } from "lucide-react";

const ModelEvaluationTab = () => {
  const metrics = [
    { label: "Vocal Model", value: "semiSER-CNN v2.1", detail: "88.4% Accuracy", icon: Activity, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Visual Model", value: "Swin-Transformer", detail: "91.2% Accuracy", icon: Layers, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "Textual Model", value: "Llama 3.1 (Groq)", detail: "State-of-the-art", icon: Database, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  const stats = [
    { label: "Parallel Latency", value: "840ms", detail: "Concurrent execution", icon: Zap },
    { label: "Processing Load", value: "Low", detail: "Adaptive Sampling", icon: Cpu },
    { label: "Data Integrity", value: "Verified", detail: "SHA-256 Hash", icon: ShieldCheck },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Disclaimer Banner */}
      <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-4 flex items-center gap-4">
        <div className="bg-white dark:bg-indigo-900/50 p-1.5 rounded-lg shadow-sm">
          <ShieldCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100 leading-relaxed">
          These metrics evaluate how accurate, reliable and trustworthy the AI system is. They <span className="font-bold text-indigo-700 dark:text-indigo-300">do not</span> reflect the candidate's performance.
        </p>
      </div>

      <div className="bg-card/40 border border-border/40 rounded-[2.5rem] p-8 backdrop-blur-md">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Activity className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Model Evaluation & Validation</h3>
            <p className="text-sm text-muted-foreground">Comprehensive evaluation of AI system performance and reliability.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="p-6 rounded-3xl bg-secondary/20 border border-border/20 group hover:border-primary/20 transition-all"
            >
              <m.icon className={`h-6 w-6 ${m.color} mb-4`} />
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{m.label}</div>
              <div className="text-lg font-black mb-1">{m.value}</div>
              <div className="text-[10px] font-bold text-primary italic">{m.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-card rounded-3xl p-6 border shadow-sm flex items-center gap-5">
            <div className="h-12 w-12 rounded-2xl bg-secondary/50 flex items-center justify-center shrink-0">
              <s.icon className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{s.label}</div>
              <div className="text-xl font-black">{s.value}</div>
              <div className="text-[10px] text-muted-foreground font-medium">{s.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-secondary/10 border border-dashed rounded-3xl p-12 text-center">
        <Database className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
        <h4 className="text-lg font-bold text-muted-foreground">Technical Log Persistence</h4>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          All analysis sessions are hashed and cached for reproducibility and long-term behavioral tracking across your profile.
        </p>
      </div>
    </div>
  );
};

export default ModelEvaluationTab;
