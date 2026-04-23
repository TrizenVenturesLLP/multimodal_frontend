import { motion } from "framer-motion";
import { Upload, Cpu, BarChart3 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "Multimodal Upload",
    description: "Upload your interview session for synchronized processing across audio, video, and text streams.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "Neural Processing",
    description: "Our clinical-grade pipeline performs time-synchronized feature extraction and behavior tracking.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Behavioral Intelligence",
    description: "Receive a unified intelligence score with deep evidence-based justifications and coaching.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl"
          >
            Streamlined Workflow
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground text-lg font-medium"
          >
            Three simple steps to high-fidelity behavioral insights
          </motion.p>
        </div>

        <div className="grid gap-12 md:grid-cols-3 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-black/[0.1] to-transparent" />
          
          {steps.map((s, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              key={s.title} 
              className="relative flex flex-col items-center group"
            >
              <div className="relative mb-10 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white border border-black/[0.05] shadow-[0_10px_30px_rgb(0,0,0,0.03)] transition-transform group-hover:scale-110 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)]">
                <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-black text-white shadow-lg ring-4 ring-background">
                  {s.num}
                </div>
                <s.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{s.title}</h3>
              <p className="text-center text-muted-foreground leading-relaxed font-medium text-sm max-w-[260px]">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
