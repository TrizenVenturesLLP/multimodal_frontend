import React from "react";

interface SummaryBoxProps {
  label: string;
  score: number;
  color: string;
}

const SummaryBox = ({ label, score, color }: SummaryBoxProps) => {
  return (
    <div className="flex-1 bg-secondary/20 border border-border/40 rounded-2xl p-4 flex flex-col items-center justify-center transition-all hover:bg-secondary/30 group">
      <div 
        className="text-xl font-black mb-1 transition-transform group-hover:scale-110" 
        style={{ color }}
      >
        {score}
      </div>
      <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
        {label}
      </div>
    </div>
  );
};

export default SummaryBox;
