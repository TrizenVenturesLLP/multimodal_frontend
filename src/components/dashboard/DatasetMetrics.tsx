import { motion } from "framer-motion";
import { Users, Database, Clock, BookOpen, GraduationCap, Microscope, ShieldCheck, Video, CheckCircle, Activity, Zap } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const DEMOGRAPHIC_DATA = [
  { name: 'Male', value: 55, count: 66, color: '#3b82f6' },
  { name: 'Female', value: 45, count: 54, color: '#ec4899' },
];

const DISCIPLINE_DATA = [
  { name: 'CSE', value: 34.17, count: 41 },
  { name: 'AI & DS', value: 21.67, count: 26 },
  { name: 'ECE', value: 15, count: 18 },
  { name: 'Civil', value: 5.83, count: 7 },
  { name: 'Others', value: 23.33, count: 31 },
];

const DatasetMetrics = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
            <Database className="h-6 w-6 text-primary" />
            Dataset & Collection Overview
          </h3>
          <p className="text-muted-foreground text-sm mt-1 max-w-2xl">
            This dataset consists of real mock interview recordings collected under controlled conditions to simulate real-world interview scenarios.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary/5 border border-primary/10">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Peer-Reviewed Methodology</span>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Recordings", value: "238", icon: Database, color: "text-blue-500" },
          { label: "Participants", value: "123", icon: Users, color: "text-emerald-500" },
          { label: "Total Duration", value: "17h 4m", icon: Clock, color: "text-purple-500" },
          { label: "Avg. Duration", value: "5.2m", icon: GraduationCap, color: "text-orange-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-card/50 border border-border/40 rounded-3xl p-6 hover:bg-card transition-colors">
            <stat.icon className={`h-5 w-5 ${stat.color} mb-3`} />
            <div className="text-2xl font-black mb-1">{stat.value}</div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* About the Dataset Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="p-8 rounded-[2.5rem] bg-card/40 border border-border/40 backdrop-blur-sm">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Why We Built This Dataset
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We found that most existing AI systems are tested on standard accents that are easy to understand. They also mostly focus on basic personality questions and often skip technical topics like <strong>Engineering, Science, and Medical</strong> backgrounds.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4">
            Our collection of <strong>238 recordings from 123 students</strong> was created to solve this. It specifically focuses on how students from <strong>rural backgrounds</strong> speak, including their unique slang and confidence levels.
          </p>
        </div>
        <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            A Real-Life Interview Experience
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This dataset isn't just a list of questions; it mimics a <strong>real-life interview</strong>. We cover everything from human behavior and personal questions to deep technical discussions.
          </p>
          <div className="mt-6 p-4 rounded-2xl bg-background/50 border border-border/40 italic text-[11px] text-muted-foreground">
            "Understanding rural language and local slang is a completely different challenge compared to standard speaking styles. Our system is built to bridge this gap."
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Demographics Chart */}
        <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8 lg:col-span-2">
          <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            Demographic & Course Distribution
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="h-[250px] w-full flex items-center bg-card/20 rounded-3xl p-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={DEMOGRAPHIC_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {DEMOGRAPHIC_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-4 pr-8">
                {DEMOGRAPHIC_DATA.map((d, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: d.color }} />
                    <div>
                      <div className="text-xs font-bold">{d.name}</div>
                      <div className="text-[10px] text-muted-foreground">{d.value}% ({d.count})</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white p-4">
              <img
                src="/text/demograp.png"
                alt="Demographic Data Table"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Student Feedback - Perception Analysis */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          Student response Analysis
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group">
            <img
              src="/text/text_feedback.png"
              alt="Student Feedback Graph"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
          <div className="space-y-6">
            <div>
              <h5 className="text-xl font-black text-foreground mb-2">Subjective Validation</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Students were surveyed after the mock interview process to evaluate the AI's consistency and bias compared to traditional human-led panels.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <span className="text-xs font-bold">More Consistent & Less Biased</span>
                <span className="text-lg font-black text-primary">69.9%</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-secondary/20 border border-border/10">
                <span className="text-xs font-bold text-muted-foreground">Equally Consistent/Biased</span>
                <span className="text-sm font-bold">19.3%</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 italic text-[11px] text-muted-foreground">
              "The feedback indicates a high level of trust in the automated system, particularly regarding its objective nature and consistency across different technical domains."
            </div>
          </div>
        </div>
      </div>

      {/* Student Opinion Survey */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-purple-400" />
          Student Opinion Survey (MIG)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <h5 className="text-xl font-black text-foreground mb-2">Transformative Potential Feedback</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The survey aimed to capture students' understanding of the grading process and overall satisfaction. Participants experienced both traditional and automated mock interview grading (MIG) processes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                <div className="text-[10px] font-black uppercase tracking-widest text-purple-500 mb-1">Response Rate</div>
                <div className="text-2xl font-black">84%</div>
                <div className="text-[10px] text-muted-foreground">84/100 Respondents</div>
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Agreed Potential</div>
                <div className="text-2xl font-black">79.5%</div>
                <div className="text-[10px] text-muted-foreground">Significant Transformation</div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] text-muted-foreground leading-relaxed">
                The survey used a combination of multiple-choice, Likert scale, and open-ended formats to gather feedback on the accuracy and fairness of computerized grading.
              </p>
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border/40">
                <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                  "79.5% of respondents agreed that this automation will have a significant transformation in the feedback process, while 18.1% are still unsure, treating automation feedback similarly to teacher feedback."
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group order-1 md:order-2 bg-white p-4">
            <img
              src="/text/opinion.png"
              alt="Student Opinion Chart"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Selected Model Architecture */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-4">
            <h4 className="text-sm font-bold flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />
              Primary Text Architecture
            </h4>
            <h5 className="text-3xl font-black text-foreground">Whisper Large-v2</h5>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              After extensive testing across multiple architectures, our system integrates <strong>Whisper Large-v2</strong> as the core engine. This state-of-the-art transformer model is specifically chosen for its superior ability to decode technical terminology and diverse linguistic nuances.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center p-6 rounded-3xl bg-amber-500/5 border border-amber-500/10 min-w-[140px]">
              <div className="text-3xl font-black text-amber-500">1.5B</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Parameters</div>
            </div>
            <div className="text-center p-6 rounded-3xl bg-primary/5 border border-primary/10 min-w-[140px]">
              <div className="text-3xl font-black text-primary">SOTA</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Performance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Performance Comparison - Transcription Accuracy */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          Transcription Model Benchmarking
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <h5 className="text-xl font-black text-foreground mb-2">Accuracy Validation</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We benchmarked several model sizes to ensure the highest transcription accuracy for rural slang and technical terminology. Our system utilizes the <strong>Largev2</strong> architecture for optimal performance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-1">Lowest WER</div>
                <div className="text-2xl font-black">0.040</div>
                <div className="text-[10px] text-muted-foreground">Word Error Rate</div>
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Parameters</div>
                <div className="text-2xl font-black">1550M</div>
                <div className="text-[10px] text-muted-foreground">Largev2 Architecture</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-secondary/30 border border-border/40">
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                The <strong>Largev2</strong> model demonstrated a significant reduction in Levenshtein Distance (146) compared to smaller variants, making it the most reliable choice for complex mock interview transcriptions.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group order-1 md:order-2 bg-white/5 p-4">
            <img
              src="/text/text_model.png"
              alt="Model Comparison Table"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Inter-Rater Reliability - Cohen's Kappa */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-blue-400" />
          Inter-Rater Reliability (Cohen’s Kappa)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white/5 p-4">
            <img
              src="/text/text_interrater.png"
              alt="Cohen's Kappa Chart"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h5 className="text-xl font-black text-foreground mb-2">Reliability Analysis</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cohen’s kappa agreement values between 2 human evaluators. Metrics like <strong>‘Structured Answers’</strong> and <strong>‘Overall Quality’</strong> have the highest agreement (Kappa = 0.9), indicating that these elements were consistently rated by raters.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>‘Clarity’</strong> and <strong>‘Authentic’</strong> likewise have high Kappa scores of 0.85. On the other hand, <strong>‘No Fillers’</strong> (Kappa = 0.7) and <strong>‘Professionalism’</strong> (Kappa = 0.65) have reasonable agreement, indicating some variation in how various raters evaluated these qualities.
              </p>

              <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 italic text-[11px] text-muted-foreground">
                "Overall, the results indicate that the evaluation procedure is reliable, indicating substantial to perfect agreement."
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Correlation Heatmap */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
          <Activity className="h-4 w-4 text-orange-400" />
          Feature Correlation Heatmap
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <h5 className="text-xl font-black text-foreground mb-2">Metric Relationship Analysis</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This heatmap shows how different evaluation metrics (such as Clarity, Fluency, Correctness, and Professionalism) are related.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A higher correlation indicates that these features tend to vary together across responses, helping us understand patterns in candidate performance beyond individual scores.
              </p>

              <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/10 italic text-[11px] text-muted-foreground">
                "The strong correlation between clarity and fluency suggests consistent text quality across responses."
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white p-4">
            <img
              src="/text/correlation.png"
              alt="Correlation Heatmap"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetMetrics;
