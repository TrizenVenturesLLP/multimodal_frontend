import { motion } from "framer-motion";
import { MessageSquare, CheckCircle, Info, Star, Shield, Zap, Target, Layout, BookOpen, Layers, Type, Heart, Activity, Database, ShieldCheck, Users } from "lucide-react";
import DatasetMetrics from "./DatasetMetrics";

interface DetailedAnalysis {
  question: string;
  answer: string;
  start: number;
  end: number;
  metrics: Record<string, { score: number; explanation: string }>;
  stats?: any;
}

interface TextTabProps {
  data?: {
    overall_score: number;
    rubrics: Record<string, number>;
    detailed_analysis: DetailedAnalysis[];
    behavioral?: any;
  };
  showDatasetInfo?: boolean;
  showPerformanceResults?: boolean;
}

const TextTab = ({ 
  data, 
  showDatasetInfo = true, 
  showPerformanceResults = true 
}: TextTabProps) => {
  // Only show early return if we NEED performance results and they are missing
  if (showPerformanceResults && (!data || !data.detailed_analysis)) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center opacity-50">
        <MessageSquare className="h-12 w-12 mb-4" />
        <h3 className="text-xl font-bold">No Text Analysis Data Available</h3>
        <p>Transcription and text analysis was not completed for this session.</p>
      </div>
    );
  }

  const behavioral = data?.behavioral || { vocab_level: 'Intermediate', avg_response_length: 0, filler_pct: 0 };
  const clarity = data?.rubrics?.["Textual Clarity"] || 0;

  const fmtTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.round(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getMetricIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('relevance')) return <Target className="h-4 w-4 text-blue-500" />;
    if (n.includes('fluency')) return <Zap className="h-4 w-4 text-emerald-500" />;
    if (n.includes('clarity')) return <Info className="h-4 w-4 text-cyan-500" />;
    if (n.includes('confidence')) return <Shield className="h-4 w-4 text-indigo-500" />;
    if (n.includes('enthusiasm')) return <Star className="h-4 w-4 text-yellow-500" />;
    if (n.includes('professionalism')) return <CheckCircle className="h-4 w-4 text-slate-500" />;
    if (n.includes('structured')) return <Layout className="h-4 w-4 text-purple-500" />;
    if (n.includes('unique')) return <Star className="h-4 w-4 text-amber-500" />;
    if (n.includes('engagement')) return <Activity className="h-4 w-4 text-rose-500" />;
    if (n.includes('fillers')) return <Shield className="h-4 w-4 text-orange-500" />;
    if (n.includes('focused')) return <Target className="h-4 w-4 text-blue-400" />;
    if (n.includes('authentic')) return <Heart className="h-4 w-4 text-pink-500" />;
    if (n.includes('overall')) return <Layers className="h-4 w-4 text-primary" />;
    return <MessageSquare className="h-4 w-4 text-primary" />;
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Text Analysis Summary */}
      {showPerformanceResults && data && (
        <>
          <div className="bg-card/40 border border-border/40 rounded-[2.5rem] p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                    <h3 className="text-xl font-bold tracking-tight">Text Analysis</h3>
                    <p className="text-xs text-muted-foreground">Textual analysis and semantic mapping</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-6 rounded-3xl bg-secondary/20 border border-border/20 flex flex-col items-center text-center group hover:bg-secondary/30 transition-all">
                    <Type className="h-5 w-5 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-xl font-black text-purple-400 mb-1">{behavioral.vocab_level}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Vocabulary</div>
                </div>
                <div className="p-6 rounded-3xl bg-secondary/20 border border-border/20 flex flex-col items-center text-center group hover:bg-secondary/30 transition-all">
                    <Layout className="h-5 w-5 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-black text-blue-400 mb-1">{behavioral.avg_response_length} <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest ml-1">words</span></div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Avg Response</div>
                </div>
                <div className="p-6 rounded-3xl bg-secondary/20 border border-border/20 flex flex-col items-center text-center group hover:bg-secondary/30 transition-all">
                    <Zap className="h-5 w-5 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-black text-emerald-400 mb-1">{clarity}%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Clarity</div>
                </div>
                <div className="p-6 rounded-3xl bg-secondary/20 border border-border/20 flex flex-col items-center text-center group hover:bg-secondary/30 transition-all">
                    <Info className="h-5 w-5 text-orange-400 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-black text-orange-400 mb-1">{behavioral.filler_pct}%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Filler Words</div>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1 bg-card rounded-3xl p-8 border shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">Text Rating</div>
                <div className="text-6xl font-black text-primary mb-2">{Math.round(data.overall_score || 0)}</div>
                <div className="text-xs font-bold text-muted-foreground">Overall Depth</div>
            </div>
            <div className="md:col-span-3 bg-card rounded-3xl p-8 border shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Topic Competency Scores
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {Object.entries(data.rubrics || {}).map(([name, score]) => (
                        <div key={name} className="p-4 rounded-2xl bg-secondary/20 border border-border/10 group hover:border-primary/20 transition-all">
                            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 truncate group-hover:text-foreground">
                                {name.replace("Textual ", "")}
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-2xl font-black text-primary leading-none">{Math.round(Number(score) || 0)}</span>
                                <span className="text-[10px] font-bold text-muted-foreground mb-1">/100</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </>
      )}


      {/* Q&A Detailed Breakdown */}
      {showPerformanceResults && data && (
        <div className="space-y-8">
          <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
              <div className="h-4 w-4 bg-primary rounded-full" />
              Text Analysis Evidence Log
          </h3>

          {data.detailed_analysis.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={idx} 
              className="bg-card rounded-[2.5rem] border shadow-sm overflow-hidden"
            >
              <div className="p-8 border-b bg-secondary/5">
                <div className="flex items-start gap-4 mb-6">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/20">
                    <span className="text-xs font-black text-primary">Q{idx + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-xl font-bold leading-tight">{item.question}</h4>
                      <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-secondary text-muted-foreground border">
                        {fmtTime(item.start)} - {fmtTime(item.end)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 rounded-3xl bg-background/50 border border-border/40">
                  <div className="mt-1 h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-emerald-500">A</span>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed text-sm">"{item.answer}"</p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {Object.entries(item.metrics).map(([metricName, metricData]) => (
                    <div key={metricName} className="p-4 rounded-2xl bg-secondary/10 border border-border/30 hover:border-primary/20 transition-all group">
                      <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
                        <div className="flex items-center gap-2">
                          {getMetricIcon(metricName)}
                          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                              {metricName}
                          </span>
                        </div>
                        <span className={`text-sm font-black ${(Number(metricData.score) || 0) > 70 ? 'text-emerald-500' : (Number(metricData.score) || 0) < 50 ? 'text-orange-500' : 'text-primary'}`}>
                          {Math.round(Number(metricData.score) || 0)}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed mt-2 italic">
                        {metricData.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Dataset & Evaluation Context */}
      {showDatasetInfo && (
        <div className="pt-20 border-t border-border/30">
          <DatasetMetrics />
        </div>
      )}
    </div>
  );
};

export default TextTab;
