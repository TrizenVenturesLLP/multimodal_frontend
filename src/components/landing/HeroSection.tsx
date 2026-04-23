import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.05]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Multimodal Interview
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-600 to-primary/80">
            Assessment
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-medium"
        >
          Upload an interview video for comprehensive analysis across audio, video, and text modalities. 
          Our AI evaluates vocal patterns, facial expressions, body language, and response quality.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            to="/dashboard"
            className="group relative inline-flex h-14 items-center gap-2 overflow-hidden rounded-2xl bg-primary px-10 text-base font-bold text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] active:scale-[0.98]"
          >
            Get Started Analyzing
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#features"
            className="inline-flex h-14 items-center rounded-2xl border border-black/[0.08] bg-white/40 backdrop-blur-sm px-10 text-base font-bold text-foreground transition-all hover:bg-white/60 hover:border-black/[0.12] hover:shadow-lg"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
