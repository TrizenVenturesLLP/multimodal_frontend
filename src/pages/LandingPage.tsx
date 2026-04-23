import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";

import TechnicalFooter from "@/components/dashboard/TechnicalFooter";

import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/10 selection:text-primary">
      {/* Premium Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <LandingNavbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
        </main>
        <TechnicalFooter />
      </motion.div>
    </div>
  );
};

export default LandingPage;
