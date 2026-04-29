import { motion } from "framer-motion";
import { Video, Eye, Target, CheckCircle, Zap, ShieldCheck, Activity, TrendingUp, Database } from "lucide-react";

const VideoDatasetMetrics = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
            <Video className="h-6 w-6 text-emerald-500" />
            Visual Emotion Recognition (FER) Dataset
          </h3>
          <p className="text-muted-foreground text-sm mt-1 max-w-2xl">
            A high-fidelity facial expression dataset combining global benchmarks with context-rich mock interview recordings.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Validated Visual Methodology</span>
        </div>
      </div>

      {/* Methodology Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="p-8 rounded-[2.5rem] bg-card/40 border border-border/40 backdrop-blur-sm">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Hybrid Benchmark Integration
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We utilized <strong>FER2013</strong> (35,887 grayscale photos) as a baseline benchmark. To enhance robustness, we augmented this with custom recordings of <strong>50 candidates</strong> from diverse educational backgrounds.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4">
            Frames were extracted at fixed <strong>15-second intervals</strong> to balance visual granularity with computational efficiency, ensuring every critical behavioral cue is captured.
          </p>
        </div>
        <div className="p-8 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-emerald-500" />
            Ground Truth Validation
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Each frame was meticulously annotated using <strong>CVAT</strong> for categories including <strong>Angry,Disgust,Fear,Happy,Neutral,Sad and Surprise</strong>. These labels closely reflect the psychological states during professional interviews.
          </p>
          <div className="mt-6 p-4 rounded-2xl bg-background/50 border border-border/40 italic text-[11px] text-muted-foreground">
            "By combining FER2013 with domain-specific mock interview frames, we achieved a more robust model for real-life educational feedback systems."
          </div>
        </div>
      </div>

      {/* Proposed Hybrid Model Architecture */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-8 flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          Proposed Hybrid Architecture: CNN-Swin Transformer
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                <h5 className="text-base font-bold mb-3 flex items-center gap-2 text-primary">
                  <Activity className="h-4 w-4" />
                  CNN Spatial Encoder
                </h5>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Extracts fine-grained spatial features like edges and textures using ReLU activations, Batch Normalization, and He Uniform initialization to stabilize the learning of complex emotional patterns.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10">
                <h5 className="text-base font-bold mb-3 flex items-center gap-2 text-blue-500">
                  <ShieldCheck className="h-4 w-4" />
                  Swin Transformer Block
                </h5>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Processes representations through <strong>shifted window attention</strong> to capture long-range contextual relationships across different facial regions, utilizing residual connections to prevent gradient vanishing.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-secondary/20 border border-border/30">
              <h5 className="text-sm font-black uppercase tracking-widest text-foreground mb-4">Training & Optimization Strategy</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-xl font-black">20</div>
                  <div className="text-[9px] text-muted-foreground uppercase">Epochs</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black">10-Fold</div>
                  <div className="text-[9px] text-muted-foreground uppercase">Cross-Val</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black">Adam</div>
                  <div className="text-[9px] text-muted-foreground uppercase">Optimizer</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black">Softmax</div>
                  <div className="text-[9px] text-muted-foreground uppercase">Activation</div>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground mt-6 leading-relaxed">
                Trained on the FER-2013 dataset with <strong>Categorical Cross-Entropy</strong> loss and extensive data augmentation (rotations, flips, shifts) to mitigate class imbalance and dataset noise.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/10 h-full flex flex-col">
              <h5 className="text-sm font-bold mb-4 flex items-center gap-2 text-amber-600">
                <Target className="h-4 w-4" />
                Inference & Aggregation
              </h5>
              <div className="space-y-4 flex-grow">
                <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                  <div className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-1">Mean Probability</div>
                  <p className="text-[10px] text-muted-foreground">Stable estimate of dominant emotional tendency throughout the session.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                  <div className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-1">Peak Intensity</div>
                  <p className="text-[10px] text-muted-foreground">Captures brief, high-intensity expressions for robust behavioral analysis.</p>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-4 italic">
                Frame-by-frame inference allows the system to compute intensity and frequency for a comprehensive emotional profile.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ablation Study & Model Comparison */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-8 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-emerald-400" />
          Ablation Study: Comparative Architecture Analysis
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h5 className="text-2xl font-black text-foreground mb-4">Benchmarking FER2013 Performance</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The investigation was extended across multiple architectures including <strong>CNN baselines, LSTM sequences, and CBAM attention modules</strong>. Our findings demonstrate that while pure attention mechanisms (Swin Transformer: 76%) and CBAM-enhanced models (60-63%) faced generalization challenges, the <strong>hybrid approach</strong> provided superior results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Zap className="h-12 w-12 text-emerald-500" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-1">Best Performer</div>
                <div className="text-3xl font-black text-foreground">89.6%</div>
                <div className="text-xs font-bold text-muted-foreground">CNN + Swin Hybrid</div>
              </div>
              <div className="p-5 rounded-3xl bg-secondary/30 border border-border/40">
                <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">CNN Baseline</div>
                <div className="text-2xl font-black text-foreground">80.1%</div>
                <div className="text-xs font-bold text-muted-foreground">Standard Baseline</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-secondary/10 border border-border/20">
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                The significant jump from 76% (Swin only) to <strong>89.6% (CNN+Swin)</strong> underlines the complementary strengths of convolutional local feature extraction and transformer-based global attention modeling.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white p-6">
              <img
                src="/video/modelcompar.png"
                alt="Model Comparison Table"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-102"
              />
              <div className="mt-4 text-center border-t border-border/20 pt-4">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-2">
                  <Database className="h-3 w-3" />
                  Table 1: Comparative Accuracy Analysis
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Performance Comparison */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-8 flex items-center gap-2">
          <Zap className="h-4 w-4 text-amber-500" />
          Model Benchmarking & Confusion Matrix
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white/5 p-4">
              <img
                src="/video/confusion.png"
                alt="Confusion Matrix"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-secondary/20 border border-border/10">
                <div className="text-[10px] font-black text-muted-foreground uppercase mb-1">Emotion Variance</div>
                <div className="text-xl font-bold">High Precision</div>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/20 border border-border/10">
                <div className="text-[10px] font-black text-muted-foreground uppercase mb-1">Processing</div>
                <div className="text-xl font-bold">15s Sampling</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white/5 p-4">
              <img
                src="/video/f1,recall,precision.png"
                alt="Metrics Table"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
              <h5 className="text-sm font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                Performance Validation
              </h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The model shows significant F1-scores across core interview emotions. Preprocessing steps like grayscale normalization and contrast adjustment were critical for consistent feature extraction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Rubrics Correlation */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-500" />
                Behavioral Rubric Mapping
              </h4>
              <h5 className="text-2xl font-black text-foreground mb-4">From Emotions to Soft Skills</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We translate raw facial emotions into actionable soft-skill rubrics such as <strong>Engagement, Confidence, and Stress Stability</strong>.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10">
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                "Our system observes progress over several rounds of interviews with the same participants to ensure behavioral enhancement is tracked effectively."
              </p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white/5 p-4">
            <img
              src="/video/rubricfromemotion.png"
              alt="Rubric Mapping"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Human vs AI Agreement Analysis */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h5 className="text-2xl font-black text-foreground mb-4">Aggrement scores between the Human Vs Derived rubrics</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To ensure the system mimics human judgment, we performed an extensive agreement analysis against human-generated scores. This multi-layered evaluation ensures the system yields consistent, unbiased, and practically interchangeable values.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-center">
                <div className="text-[9px] font-black uppercase text-purple-500 mb-1">Pearson</div>
                <div className="text-lg font-black">0.95</div>
                <div className="text-[8px] text-muted-foreground">Linear Consistency</div>
              </div>
              <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-center">
                <div className="text-[9px] font-black uppercase text-blue-500 mb-1">Spearman</div>
                <div className="text-lg font-black">0.96</div>
                <div className="text-[8px] text-muted-foreground">Rank Consistency</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                <div className="text-[9px] font-black uppercase text-emerald-500 mb-1">ICC(2,1)</div>
                <div className="text-lg font-black">0.94</div>
                <div className="text-[8px] text-muted-foreground">Excellent Range</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-secondary/10 border border-border/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Bias values remain very close to zero with narrow <strong>Limits of Agreement (±0.04 to ±0.06)</strong>, confirming that the model does not systematically overestimate or underestimate candidate performance.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white p-6">
              <img
                src="/video/aggrement.png"
                alt="Agreement Scores Table"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-102"
              />
              <div className="mt-4 text-center border-t border-border/20 pt-4">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-2">
                  <Database className="h-3 w-3" />
                  Table 2: Agreement Metrics Comparison
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inter-Rater Reliability */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-8 flex items-center gap-2">
          <Activity className="h-4 w-4 text-indigo-500" />
          Inter-Rater Reliability Evaluation
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h5 className="text-2xl font-black text-foreground mb-4">Inter-Rater Reliability (Cohen's Kappa)</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To evaluate the consistency of the rubrics across different evaluations, we calculated <strong>Cohen's Kappa</strong> for each behavioral metric. The results demonstrate strong and progressive alignment across categories.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-center">
                <div className="text-[9px] font-black uppercase text-indigo-500 mb-1">Peak Agreement</div>
                <div className="text-lg font-black">0.84</div>
                <div className="text-[8px] text-muted-foreground">Overall Quality</div>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/20 border border-border/10 text-center">
                <div className="text-[9px] font-black uppercase text-muted-foreground mb-1">Baseline</div>
                <div className="text-lg font-black">0.75</div>
                <div className="text-[8px] text-muted-foreground">Confidence</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-secondary/10 border border-border/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                The reliability curve consistently trends upward, ranging from <strong>0.75 to 0.84</strong>. This high degree of consensus affirms that the evaluation rubrics provide stable and reproducible outcomes across diverse assessment scenarios.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white p-6">
              <img
                src="/video/interrater.png"
                alt="Inter-Rater Reliability Graph"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-102"
              />
              <div className="mt-4 text-center border-t border-border/20 pt-4">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-2">
                  <Activity className="h-3 w-3" />
                  Graph 1: Inter-Rater Reliability Metrics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoDatasetMetrics;
