import React from "react";
import { motion } from "framer-motion";

interface CircularScoreProps {
  score: number;
  label: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  glowColor?: string;
  showSubtext?: boolean;
  centerLabel?: string;
}

const CircularScore = ({
  score,
  label,
  size = 120,
  strokeWidth = 8,
  color = "#10b981",
  glowColor = "rgba(16, 185, 129, 0.5)",
  showSubtext = true,
  centerLabel,
}: CircularScoreProps) => {
  // Added buffer to prevent clipping
  const radius = (size - strokeWidth - 8) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center group">
      <div 
        className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* SVG Circle */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90 drop-shadow-[0_0_8px_var(--glow-color)]"
          style={{ "--glow-color": glowColor } as React.CSSProperties}
        >
          {/* Background Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted-foreground/10"
          />
          {/* Progress Bar */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>

        {/* Score Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
          <span className="text-3xl font-black tracking-tighter" style={{ color }}>{score}</span>
          {centerLabel && (
            <span className="text-[8px] font-black uppercase text-muted-foreground/60 tracking-wider mt-[-2px] text-center leading-tight">
              {centerLabel}
            </span>
          )}
          {!centerLabel && showSubtext && (
            <span className="text-[8px] font-black uppercase text-muted-foreground/60 tracking-wider mt-[-2px]">
              / 100
            </span>
          )}
        </div>
      </div>
      
      {/* Label */}
      <div className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </div>
    </div>
  );
};

export default CircularScore;
