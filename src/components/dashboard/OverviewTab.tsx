import { motion } from "framer-motion";
import { Mic, Video, CheckCircle, AlertTriangle, Info, Clock, ChevronDown, ChevronUp, MessageSquare, Activity } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CircularScore from "./CircularScore";
import SummaryBox from "./SummaryBox";
import InsightCard from "./InsightCard";
import VocalTab from "./VocalTab";
import VisualTab from "./VisualTab";
import TextTab from "./TextTab";
import { useState, useMemo } from "react";

interface OverviewTabProps {
  results: any;
}

const OverviewTab = ({ results }: OverviewTabProps) => {
  const [showFullTimeline, setShowFullTimeline] = useState(false);

  const dynamicInsights = useMemo(() => {
    const insights = [];

    // Visual Insight
    if (results.videoScore > 70) insights.push({ type: "positive", text: "Strong professional composure and facial engagement." });
    else insights.push({ type: "info", text: "Increasing micro-expressions of enthusiasm could boost rapport." });

    // Vocal Insight
    if (results.audioScore > 70) insights.push({ type: "positive", text: "Exceptional vocal variety and confidence detected." });
    else insights.push({ type: "info", text: "Maintain steady vocal energy during technical segments." });

    // Textual Insight
    if (results.textAnalysis?.overall_score > 75) insights.push({ type: "positive", text: "Answer clarity and logical structure are significantly high." });
    else insights.push({ type: "info", text: "Focus on deepening answer relevance for critical questions." });

    return insights;
  }, [results]);

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* High-Fidelity Assessment Results */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-10 backdrop-blur-sm relative overflow-hidden">
        <div className="text-center mb-10">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/60 mb-2">
            Assessment Results
          </h4>
          <p className="text-sm text-muted-foreground font-medium">
            Combined multimodal interview performance
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 mb-12">
          {/* Main Overall Score */}
          <CircularScore
            score={results.finalScore}
            label="Overall"
            size={180}
            strokeWidth={12}
            color="#10b981"
            glowColor="rgba(16, 185, 129, 0.4)"
          />

          <div className="flex items-center gap-8 lg:gap-12 pb-4 overflow-x-auto w-full md:w-auto justify-center">
            {/* Video Score */}
            <CircularScore
              score={results.videoScore}
              label="Video"
              size={120}
              strokeWidth={8}
              color="#f59e0b"
              glowColor="rgba(245, 158, 11, 0.3)"
            />
            {/* Audio Score */}
            <CircularScore
              score={results.audioScore}
              label="Audio"
              size={120}
              strokeWidth={8}
              color="#06b6d4"
              glowColor="rgba(6, 182, 212, 0.3)"
            />
            {/* Text Score */}
            <CircularScore
              score={results.textAnalysis?.overall_score || 0}
              label="Text"
              size={120}
              strokeWidth={8}
              color="#a855f7"
              glowColor="rgba(168, 85, 247, 0.3)"
            />
          </div>
        </div>

        {/* Bottom Summary Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border/30">
          <SummaryBox label="Combined Score" score={results.finalScore} color="#10b981" />
          <SummaryBox label="Video Analysis" score={results.videoScore} color="#f59e0b" />
          <SummaryBox label="Audio Analysis" score={results.audioScore} color="#06b6d4" />
          <SummaryBox label="Text Analysis" score={results.textAnalysis?.overall_score || 0} color="#a855f7" />
        </div>
      </div>

      {/* Cross-Modal Alignment Section (GOLD FEATURE) */}
      {results.crossModalAlignment && (
        <div className="bg-card rounded-3xl p-8 border border-primary/20 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-black mb-2 flex items-center gap-3">
                <div className="h-4 w-4 bg-primary rounded-sm transform rotate-45" />
                Cross-Modal Alignment
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Measures the behavioral consistency between your vocal tone and facial expressions.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background/50 rounded-2xl p-4 border border-border/50 text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-2">
                    <Video className="h-3 w-3 text-emerald-500" />
                    Facial Expression
                  </div>
                  <div className="text-xl font-bold text-foreground">
                    {results.crossModalAlignment.facial_emotion}
                  </div>
                </div>
                <div className="bg-background/50 rounded-2xl p-4 border border-border/50 text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-2">
                    <Mic className="h-3 w-3 text-blue-500" />
                    Audio Tone
                  </div>
                  <div className="text-xl font-bold text-foreground">
                    {results.crossModalAlignment.audio_emotion}
                  </div>
                </div>
              </div>

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-bold ${results.crossModalAlignment.score >= 75
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                : 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400'
                }`}>
                {results.crossModalAlignment.score >= 75 ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <AlertTriangle className="h-4 w-4" />
                )}
                {results.crossModalAlignment.mismatch_example}
              </div>
            </div>

            <div className="shrink-0 flex items-center justify-center">
              <CircularScore
                score={Math.round(results.crossModalAlignment.consistency_score)}
                label=""
                size={160}
                strokeWidth={12}
                color={results.crossModalAlignment.score >= 75 ? '#10b981' : '#f97316'}
                glowColor={results.crossModalAlignment.score >= 75 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(249, 115, 22, 0.2)'}
                centerLabel="Consistency Score"
              />
            </div>
          </div>
        </div>
      )}

      {/* Behavioral Evolution Timeline */}
      <div className="bg-card rounded-3xl p-8 border shadow-sm">
        <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary" />
              Behavioral Evolution Timeline
            </h3>
            <p className="text-xs text-muted-foreground mt-1">Real-time fluctuations across key metrics.</p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl bg-secondary/30 border border-border/40 whitespace-nowrap">
            <div className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-emerald-500" /> Confidence</div>
            <div className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-orange-500" /> Stress</div>
            <div className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-blue-500" /> Engagement</div>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={results.timelineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorStress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#888' }} interval="preserveStartEnd" />
              <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#888' }} />
              <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '12px' }} />
              <Area type="monotone" dataKey="confidence" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorConfidence)" />
              <Area type="monotone" dataKey="stress" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorStress)" />
              <Area type="monotone" dataKey="engagement" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorEngagement)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-[2.5rem] p-10 border shadow-lg h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <h3 className="text-xl font-black uppercase tracking-widest mb-6 text-primary">Feedback</h3>
            <p className="text-lg leading-relaxed text-card-foreground/90 font-medium">
              {results.aiFeedback}
            </p>
          </div>
        </div>

        <InsightCard insights={dynamicInsights} />
      </div>

      {/* Evidence-Based Snippets (XAI) */}
      <div className="bg-card rounded-3xl p-8 border shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
              Behavioral Evidence Log (XAI)
            </h3>
            <p className="text-xs text-muted-foreground mt-1">Ground-truth proofs behind your AI scores.</p>
          </div>
        </div>

        <div className="space-y-4">
          {results.evidenceLog && results.evidenceLog.length > 0 ? (
            (showFullTimeline ? results.evidenceLog : results.evidenceLog.slice(0, 3)).map((item: any, idx: number) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-secondary/30 border border-transparent hover:border-primary/20 hover:bg-secondary/50 transition-all"
              >
                <div className={`mt-1 p-2 rounded-xl border ${item.type === 'warning' ? 'bg-orange-500/10 border-orange-500/20 text-orange-500' :
                  item.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' :
                    'bg-blue-500/10 border-blue-500/20 text-blue-500'
                  }`}>
                  {item.tag.toLocaleLowerCase().includes('vocal') ? <Mic className="h-5 w-5" /> :
                    item.tag.toLocaleLowerCase().includes('video') || item.tag.toLocaleLowerCase().includes('facial') ? <Video className="h-5 w-5" /> :
                      item.tag.toLocaleLowerCase().includes('text') || item.tag.toLocaleLowerCase().includes('clarity') ? <MessageSquare className="h-5 w-5" /> :
                        item.type === 'warning' ? <AlertTriangle className="h-5 w-5" /> :
                          item.type === 'success' ? <CheckCircle className="h-5 w-5" /> :
                            <Info className="h-5 w-5" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-foreground/10 text-primary border border-primary/10">
                      [{item.timestamp}]
                    </span>
                    <span className="font-bold text-lg tracking-tight">{item.tag}</span>
                  </div>

                  {item.proof && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground/60 px-1.5 py-0.5 rounded border border-muted-foreground/20 bg-muted-foreground/5">Proof</span>
                      <p className="text-sm font-semibold text-foreground/80">{item.proof}</p>
                    </div>
                  )}

                  <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                    {item.evidence}
                  </p>

                  {item.justification && (
                    <div className="mt-3 pt-3 border-t border-muted-foreground/10 bg-primary/5 -mx-2 px-2 py-1.5 rounded-lg border-l-2 border-l-primary/30">
                      <p className="text-xs font-medium leading-relaxed italic text-muted-foreground">
                        <span className="font-bold text-primary not-italic uppercase mr-2 tracking-tighter">XAI Reasoning:</span>
                        {item.justification}
                      </p>
                    </div>
                  )}
                </div>

              </motion.div>
            ))
          ) : (
            <div className="py-12 flex flex-col items-center justify-center text-center bg-secondary/20 rounded-2xl border border-dashed">
              <Clock className="h-10 w-10 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground font-medium">No significant behavioral shifts detected.</p>
            </div>
          )}
        </div>

        {results.evidenceLog && results.evidenceLog.length > 3 && (
          <button
            onClick={() => setShowFullTimeline(!showFullTimeline)}
            className="mt-8 flex items-center gap-2 mx-auto text-sm font-semibold text-primary hover:underline transition-all"
          >
            {showFullTimeline ? (
              <>Collapse Timeline <ChevronUp className="h-4 w-4" /></>
            ) : (
              <>View Full Behavioral Timeline <ChevronDown className="h-4 w-4" /></>
            )}
          </button>
        )}
      </div>

      <div className="border-t border-border/30 pt-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-2 w-12 bg-primary rounded-full" />
          <h2 className="text-3xl font-black tracking-tight">Deep-Dive Modality Analysis</h2>
        </div>

        <div className="space-y-32">
          {/* Video Section */}
          <section id="video-analysis" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Video Performance Analysis</h3>
            </div>
            <VisualTab
              rubrics={results.videoAnalysis.rubrics}
              metrics={results.videoAnalysis}
              overallScore={results.videoScore}
            />
          </section>

          {/* Audio Section */}
          <section id="audio-analysis" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                <Mic className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Audio Performance Analysis</h3>
            </div>
            <VocalTab
              rubrics={results.audioAnalysis.rubrics}
              metrics={results.audioAnalysis}
              overallScore={results.audioScore}
              timelineData={results.timelineData}
            />
          </section>

          {/* Text Section */}
          <section id="text-analysis" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Text Performance Analysis</h3>
            </div>
            <TextTab data={results.textAnalysis} showDatasetInfo={false} showPerformanceResults={true} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
