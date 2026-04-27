import React from "react";
import { Mic, Video, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const TechnicalFooter = () => {
  return (
    <footer className="mt-12 pb-12 px-6">
      <div className="max-w-5xl mx-auto bg-secondary/5 border border-border/30 rounded-[2rem] p-8 backdrop-blur-md relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/80 mb-4 flex items-center justify-center gap-4">
              <span className="h-[1px] w-8 bg-primary/20" />
              Technical Methodology
              <span className="h-[1px] w-8 bg-primary/20" />
            </h4>
            <h3 className="text-xl font-black mb-3 tracking-tight text-foreground">
              Multimodal Intelligence Architecture
            </h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed font-medium opacity-80">
              Our clinical-grade pipeline performs time-synchronized feature extraction across vocal acoustics, facial geometry, and textual analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="group/card p-5 rounded-2xl bg-background/40 border border-border/40 hover:border-blue-500/20 transition-all duration-300">
              <div className="h-9 w-9 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover/card:scale-105 transition-transform">
                <Mic className="h-4.5 w-4.5 text-blue-500" />
              </div>
              <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Audio Analysis</div>
              <p className="text-[10px] text-muted-foreground leading-snug opacity-80 font-medium">
                Extracts MFCC textures, pitch stability, and spectral energy using a specialized semiSER CNN architecture.
              </p>
            </div>

            <div className="group/card p-5 rounded-2xl bg-background/40 border border-border/40 hover:border-emerald-500/20 transition-all duration-300">
              <div className="h-9 w-9 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover/card:scale-105 transition-transform">
                <Video className="h-4.5 w-4.5 text-emerald-500" />
              </div>
              <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">Video Analysis</div>
              <p className="text-[10px] text-muted-foreground leading-snug opacity-80 font-medium">
                Uses MTCNN for face tracking and a Swin Transformer (Swin-CNN) hybrid for facial expression mapping via adaptive global sampling.
              </p>
            </div>

            <div className="group/card p-5 rounded-2xl bg-background/40 border border-border/40 hover:border-purple-500/20 transition-all duration-300">
              <div className="h-9 w-9 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover/card:scale-105 transition-transform">
                <MessageSquare className="h-4.5 w-4.5 text-purple-500" />
              </div>
              <div className="text-[10px] font-black text-purple-500 uppercase tracking-widest mb-2">Text Analysis Channel</div>
              <p className="text-[10px] text-muted-foreground leading-snug opacity-80 font-medium">
                Leverages WhisperX for diarization and Groq (Llama 3.1) for high-fidelity score justifications and structural analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default TechnicalFooter;
