import { Mic, BarChart3, Activity, Waves, Volume2 } from "lucide-react";
import ChartCard from "./ChartCard";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface VocalTabProps {
    rubrics: any[];
    metrics: any;
    overallScore: number;
    timelineData?: any[];
}

const VocalTab = ({ rubrics, metrics, overallScore, timelineData = [] }: VocalTabProps) => {
    const COLORS = [
        "hsl(221, 83%, 53%)",
        "hsl(142, 71%, 45%)",
        "hsl(38, 92%, 50%)",
        "hsl(0, 84%, 60%)",
        "hsl(199, 89%, 48%)",
        "hsl(280, 67%, 50%)",
        "hsl(160, 60%, 45%)",
    ];

    const behavioral = metrics.behavioral || { avg_db: 0, wpm: 0, filler_pct: 0 };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Audio Analysis Summary */}
            <div className="bg-card/40 border border-border/40 rounded-[2.5rem] p-8 backdrop-blur-md">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <Waves className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold tracking-tight">Audio Analysis</h3>
                        <p className="text-xs text-muted-foreground">High-fidelity vocal acoustics evaluation</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-3xl bg-secondary/20 border border-border/20 flex flex-col items-center text-center group hover:bg-secondary/30 transition-all">
                        <Volume2 className="h-5 w-5 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-2xl font-black text-blue-400 mb-1">{behavioral.avg_db} <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest ml-1">dB</span></div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Avg Loudness</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-secondary/20 border border-border/20 flex flex-col items-center text-center group hover:bg-secondary/30 transition-all">
                        <Activity className="h-5 w-5 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-2xl font-black text-emerald-400 mb-1">{behavioral.wpm !== undefined && behavioral.wpm !== null ? behavioral.wpm : '---'}</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Speech Rate (WPM)</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-secondary/20 border border-border/20 flex flex-col items-center text-center group hover:bg-secondary/30 transition-all">
                        <Mic className="h-5 w-5 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-2xl font-black text-purple-400 mb-1">{behavioral.filler_pct !== undefined && behavioral.filler_pct !== null ? behavioral.filler_pct : 0} <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest ml-1">%</span></div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Filler Words</div>
                    </div>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-card rounded-3xl p-8 border shadow-sm flex-1">
                        <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                            <Mic className="h-6 w-6 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Audio Signature</h3>
                        <p className="text-muted-foreground mb-6 text-xs italic">Your dominant vocal delivery style throughout the session.</p>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 rounded-xl bg-secondary/30 border border-border/20">
                                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Dominant</span>
                                <span className="text-sm font-black text-primary">{metrics.dominant}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 rounded-xl bg-secondary/30 border border-border/20">
                                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Pitch Var</span>
                                <span className="text-sm font-black text-primary">{behavioral.pitch_variation || 0} Hz</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <div className="bg-card rounded-3xl p-8 border shadow-sm h-full">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                            <Activity className="h-5 w-5 text-blue-500" />
                            Pitch Variation Over Time
                        </h3>
                        <div className="h-[200px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={timelineData}>
                                    <defs>
                                        <linearGradient id="colorPitch" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                    <XAxis dataKey="time" hide />
                                    <YAxis hide domain={['auto', 'auto']} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '10px' }}
                                        labelStyle={{ color: '#888' }}
                                    />
                                    <Area type="monotone" dataKey="pitch" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorPitch)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-card rounded-3xl p-8 border shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Vocal Benchmarks
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

export default VocalTab;
