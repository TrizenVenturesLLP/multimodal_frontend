import { Video, Eye, Target, HandMetal, Zap } from "lucide-react";
import ChartCard from "./ChartCard";

interface VisualTabProps {
  rubrics: any[];
  metrics: any;
  overallScore: number;
}

const VisualTab = ({ rubrics, metrics, overallScore }: VisualTabProps) => {
    const COLORS = [
        "hsl(221, 83%, 53%)",
        "hsl(142, 71%, 45%)",
        "hsl(38, 92%, 50%)",
        "hsl(0, 84%, 60%)",
        "hsl(199, 89%, 48%)",
        "hsl(280, 67%, 50%)",
        "hsl(160, 60%, 45%)",
    ];

    const behavioral = metrics.behavioral || { eye_contact_pct: 0, gestures_per_min: 0, motion_intensity: 0 };
    const positiveExpr = rubrics.find((r: any) => r.name.includes("Engagement") || r.name.includes("Sentiment") || r.name.includes("Enthusiasm"))?.value || 0;

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Video Analysis Summary */}
            <div className="bg-card/40 border border-border/40 rounded-[2.5rem] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <Video className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold tracking-tight">Video Analysis</h3>
                        <p className="text-xs text-muted-foreground">Behavioral focus and non-verbal presence mapping</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-3xl bg-secondary/20 border border-border/20 flex flex-col items-center text-center group hover:bg-secondary/30 transition-all">
                        <Target className="h-5 w-5 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-2xl font-black text-emerald-400 mb-1">{behavioral.eye_contact_pct}%</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Eye Contact</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-secondary/20 border border-border/20 flex flex-col items-center text-center group hover:bg-secondary/30 transition-all">
                        <Zap className="h-5 w-5 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-2xl font-black text-amber-400 mb-1">{positiveExpr}%</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Positive Expressiveness</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-secondary/20 border border-border/20 flex flex-col items-center text-center group hover:bg-secondary/30 transition-all">
                        <HandMetal className="h-5 w-5 text-orange-400 mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-2xl font-black text-orange-400 mb-1">{behavioral.gestures_per_min} <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest ml-1">/min</span></div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Gestures</div>
                    </div>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-card rounded-3xl p-8 border shadow-sm h-full">
                        <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                            <Video className="h-6 w-6 text-emerald-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Video Presence</h3>
                        <p className="text-muted-foreground mb-6 text-xs italic">Your facial emotion tracking results across the sampled window.</p>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 rounded-xl bg-secondary/30 border border-border/20">
                                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Dominant</span>
                                <span className="text-sm font-black text-primary">{metrics.dominant}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 rounded-xl bg-secondary/30 border border-border/20">
                                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Focus Score</span>
                                <span className="text-sm font-black text-emerald-500">{behavioral.eye_contact_pct > 80 ? 'Exceptional' : 'Steady'}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <ChartCard data={rubrics} title="Visual Emotion Mapping" />
                </div>
            </div>

            <div className="bg-card rounded-3xl p-8 border shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Visual Benchmarks
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {rubrics.map((m: any, idx: number) => (
                        <div key={m.name} className="p-4 rounded-2xl bg-secondary/20 border border-border/20 group hover:border-primary/20 transition-all">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground">{m.name}</span>
                                <span className="text-sm font-black text-primary">{m.value}</span>
                            </div>
                            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden mb-2">
                                <div 
                                    className="h-full transition-all duration-1000" 
                                    style={{ 
                                        width: `${m.value}%`,
                                        backgroundColor: COLORS[idx % COLORS.length]
                                    }}
                                />
                            </div>
                            <p className="text-[9px] text-muted-foreground/80 italic leading-tight">
                                {m.justification}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VisualTab;
