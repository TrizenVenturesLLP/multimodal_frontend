import { motion } from "framer-motion";
import { Mic, Video, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Vocal Intelligence",
    description: "Analyze vocal textures, MFCC patterns, and pitch stability using our specialized semiSER CNN architecture.",
    color: "bg-blue-500"
  },
  {
    icon: Video,
    title: "Visual Analytics",
    description: "Map micro-expressions and facial geometry via MTCNN-powered adaptive global sampling and neural mapping.",
    color: "bg-emerald-500"
  },
  {
    icon: MessageSquare,
    title: "Text Analysis",
    description: "Generate high-fidelity justifications and actionable coaching insights powered by Llama 3.1 LLM.",
    color: "bg-indigo-500"
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl"
          >
            Core Intelligence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground text-lg font-medium"
          >
            Advanced capabilities for high-fidelity performance evaluation
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={f.title}
              className="group relative rounded-[2rem] bg-white/40 backdrop-blur-md border border-black/[0.05] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] hover:scale-[1.03] hover:bg-white/60"
            >
              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${f.color}/10 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <f.icon className={`h-8 w-8 text-${f.color.split('-')[1]}-500`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-[15px]">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
