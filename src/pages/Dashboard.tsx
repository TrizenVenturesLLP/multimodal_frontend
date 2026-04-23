import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle, Info, Clock, ChevronDown, ChevronUp, Video, Mic, BarChart3, MessageSquare, LayoutDashboard } from "lucide-react";

// Components
import Navbar from "@/components/dashboard/Navbar";
import UploadCard from "@/components/dashboard/UploadCard";
import ScoreCard from "@/components/dashboard/ScoreCard";
import MetricCard from "@/components/dashboard/MetricCard";
import InsightCard from "@/components/dashboard/InsightCard";
import OverviewTab from "@/components/dashboard/OverviewTab";
import VocalTab from "@/components/dashboard/VocalTab";
import VisualTab from "@/components/dashboard/VisualTab";
import TextTab from "@/components/dashboard/TextTab";
import ModelEvaluationTab from "@/components/dashboard/ModelEvaluationTab";
import TechnicalFooter from "@/components/dashboard/TechnicalFooter";
import { FlaskConical } from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

type Phase = "upload" | "analyzing" | "results";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [phase, setPhase] = useState<Phase>("upload");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleAnalyze = async (file: File) => {
    setUploading(true);
    setUploadProgress(0);
    setError(null);

    const formData = new FormData();
    formData.append("video", file);

    try {
      const xhr = new XMLHttpRequest();
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(progress);
        }
      };

      const responsePromise = new Promise((resolve, reject) => {
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            // Upload complete, now starting analysis phase
            setPhase("analyzing");
            setUploading(false);
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(new Error(`Server returned ${xhr.status}: ${xhr.statusText}`));
          }
        };
        xhr.onerror = () => reject(new Error("Network error during upload"));
        xhr.open("POST", "http://localhost:8010/api/multimodal/analyze");
        xhr.send(formData);
      });

      const data: any = await responsePromise;

      // Map backend data to UI structure
      const finalMetrics = Object.entries(data.rubric_scores || {}).map(([name, val]: [string, any]) => ({
        name: name.replace("Multimodal ", ""),
        value: Math.round(Number(val)),
        justification: data.rubric_justifications?.[name] || "Analyzing behavioral signals..."
      }));

      const audioRubrics = data.individual_analysis.audio.rubrics || {};
      const videoRubrics = data.individual_analysis.video.rubrics || {};
      const audioKeys = Object.keys(audioRubrics);
      const videoKeys = Object.keys(videoRubrics);

      setResults({
        finalScore: Math.round(data.multimodal_score),
        audioScore: Math.round(data.individual_analysis.audio.rubrics.Overall?.score || data.individual_analysis.audio.rubrics["Sentiment Score"]?.score || 50),
        videoScore: Math.round(data.individual_analysis.video.rubrics.Overall?.score || data.individual_analysis.video.rubrics["Facial Sentiment"]?.score || 50),
        metrics: finalMetrics,
        audioAnalysis: {
          dominant: data.individual_analysis.audio.dominant,
          behavioral: data.individual_analysis.audio.behavioral,
          rubrics: Object.entries(audioRubrics).map(([name, obj]: [string, any]) => ({
            name,
            value: Math.round(Number(obj.score || 0)),
            justification: obj.justification
          }))
        },
        videoAnalysis: {
          dominant: data.individual_analysis.video.dominant,
          behavioral: data.individual_analysis.video.behavioral,
          rubrics: Object.entries(videoRubrics).map(([name, obj]: [string, any]) => ({
            name,
            value: Math.round(Number(obj.score || 0)),
            justification: obj.justification
          }))
        },
        textAnalysis: {
          ...data.individual_analysis.text,
          overall_score: Math.round(data.individual_analysis.text.overall_score || 0),
          behavioral: data.individual_analysis.text.behavioral
        },
        aiFeedback: data.ai_feedback,
        evidenceLog: data.evidence_log || [],
        crossModalAlignment: data.cross_modal_alignment,
        timelineData: data.timeline_data || [],
        transcription: data.transcription,
        qaPairs: data.qa_pairs
      });

      setPhase("results");
    } catch (err: any) {
      console.error("Analysis failed:", err);
      setError(err.message || "Failed to analyze interview. Please ensure the backend is running.");
    } finally {
      setUploading(false);
    }
  };

  const fade = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode(!darkMode)} />

      <main className={`container mx-auto max-w-[1400px] px-6 ${phase === 'results' ? 'pt-0' : 'py-12'}`}>
        <AnimatePresence mode="wait">
          {phase === "upload" && (
            <motion.div key="upload" {...fade} className="mx-auto max-w-2xl">
              <div className="text-center mb-10">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 uppercase tracking-wider">
                  AI Multimodal Analysis
                </span>
                <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl mb-4">
                  Master Your <span className="text-primary italic">Interviews</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Upload a recording to receive a deep-dive analysis of your tones, expressions, and non-verbal cues.
                </p>
                {error && (
                  <div className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}
              </div>
              <UploadCard
                onAnalyze={handleAnalyze}
                uploading={uploading}
                uploadProgress={uploadProgress}
              />
            </motion.div>
          )}

          {phase === "analyzing" && (
            <motion.div key="analyzing" {...fade} className="flex flex-col items-center justify-center py-20 text-center">
              <div className="relative mb-12">
                <div className="h-32 w-32 rounded-full border-4 border-primary/20 animate-ping absolute inset-0" />
                <div className="h-32 w-32 rounded-full border-t-4 border-primary animate-spin relative z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart3 className="h-10 w-10 text-primary animate-pulse" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Deep Behavioral Analysis</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Our AI PhDs are synchronized and processing your data across all three modalities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl px-4">
                {[
                  { icon: Mic, label: "Audio Analysis", color: "text-blue-500", bg: "bg-blue-500/10" },
                  { icon: Video, label: "Video Analysis", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                  { icon: MessageSquare, label: "Textual Depth", color: "text-purple-500", bg: "bg-purple-500/10" }
                ].map((m, i) => (
                  <div key={i} className={`p-4 rounded-2xl ${m.bg} border border-${m.color.split('-')[1]}-500/20 flex flex-col items-center gap-3`}>
                    <m.icon className={`h-6 w-6 ${m.color} animate-bounce`} style={{ animationDelay: `${i * 0.2}s` }} />
                    <span className="text-xs font-bold uppercase tracking-widest">{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-xs text-muted-foreground animate-pulse">
                Processing complex behavioral patterns... this may take a few minutes.
              </div>
            </motion.div>
          )}

          {phase === "results" && results && (
            <motion.div key="results" {...fade}>
              <div className="flex flex-col md:flex-row gap-0 min-h-screen">
                {/* Sidebar */}
                <aside className="w-full md:w-80 bg-secondary/10 backdrop-blur-xl border-r border-border/40 p-8 md:sticky md:top-16 h-fit md:h-[calc(100vh-64px)] overflow-y-auto transition-all">
                  <div className="mb-10 hidden md:block">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50 mb-8 px-4 flex items-center gap-3">
                      <span className="h-[1px] w-4 bg-muted-foreground/30" />
                      Main Menu
                    </h3>
                  </div>

                  <div className="flex flex-col gap-3">
                  {[
                    { id: 'overview', label: 'Analysis Overview', sub: 'User Performance', icon: LayoutDashboard },
                    { id: 'audio-analysis', label: 'Audio Evaluation', sub: 'User Performance', icon: Mic, scroll: true },
                    { id: 'video-analysis', label: 'Video Evaluation', sub: 'User Performance', icon: Video, scroll: true },
                    { id: 'text-analysis', label: 'Text Evaluation', sub: 'User Performance', icon: MessageSquare, scroll: true },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        if (tab.scroll) {
                          setActiveTab('overview');
                          setTimeout(() => {
                            const el = document.getElementById(tab.id);
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        } else {
                          setActiveTab(tab.id);
                        }
                      }}
                      className={`group flex items-start gap-4 px-5 py-5 rounded-[2rem] transition-all duration-500 ${activeTab === 'overview' && tab.scroll
                          ? 'hover:bg-background/50 border border-transparent'
                          : activeTab === tab.id
                            ? 'bg-background shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-border/50 scale-[1.02]'
                            : 'hover:bg-background/50 border border-transparent'
                        }`}
                    >
                      <div className={`mt-1 p-2.5 rounded-2xl transition-all duration-500 ${activeTab === tab.id ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-secondary text-muted-foreground'}`}>
                        <tab.icon className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <div className={`text-[15px] font-bold tracking-tight ${activeTab === tab.id ? 'text-foreground' : 'text-foreground/70'}`}>
                          {tab.label}
                        </div>
                        <div className={`text-[9px] font-black uppercase tracking-widest mt-1 ${activeTab === tab.id ? 'text-primary' : 'text-muted-foreground/60'}`}>
                          {tab.sub}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 md:pl-10 py-12 space-y-8">
                  <div className="mb-8">
                    <h2 className="text-4xl font-black tracking-tight mb-2">Analysis Dashboard</h2>
                    <p className="text-muted-foreground">Comprehensive behavioral intelligence for <span className="text-primary font-bold">{results.filename || "Session"}</span></p>
                  </div>

                  <div className="min-h-[600px]">
                    {activeTab === 'overview' && <OverviewTab results={results} />}
                  </div>
                </div>
              </div>


              <div className="flex justify-center pt-8">
                <button
                  onClick={() => {
                    setPhase("upload");
                    setResults(null);
                    setUploadProgress(0);
                    setActiveTab("overview");
                  }}
                  className="px-8 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold transition-all hover:scale-105"
                >
                  Analyze New Session
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
