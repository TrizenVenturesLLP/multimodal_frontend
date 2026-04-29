import { motion } from "framer-motion";
import { Mic, Activity, ShieldCheck, BarChart2, Clock, RefreshCcw, Settings, Layers, Volume2, Target, Zap, Brain, TrendingUp, Cpu } from "lucide-react";

const AudioDatasetMetrics = () => {
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
            <Mic className="h-6 w-6 text-blue-500" />
            Audio Emotion Recognition (SER) Dataset
          </h3>
          <p className="text-muted-foreground text-sm mt-1 max-w-2xl">
            A diverse, balanced speech emotion dataset synthesized from global benchmarks and real-world mock interview segments.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-500/5 border border-blue-500/10">
          <ShieldCheck className="h-4 w-4 text-blue-500" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">Acoustic Validation Ready</span>
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
            We consolidated <strong>RAVDESS</strong>, <strong>EmoDB</strong>, and <strong>TESS</strong> (4,775 labeled samples) to establish a diverse acoustic baseline. To enhance robustness, we augmented this with <strong>2,500 custom interview segments</strong> (7,275 total) from real-world candidates.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4">
            Acoustic recordings were segmented at fixed <strong>3-second intervals</strong> to balance temporal granularity with feature extraction consistency, ensuring stable MFCC and spectral signatures.
          </p>
        </div>
        <div className="p-8 rounded-[2.5rem] bg-blue-500/5 border border-blue-500/10">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-500" />
            Ground Truth Validation
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every audio segment was standardized across seven core categories: <strong>Angry, Disgust, Fear, Happy, Neutral, Sad, and Surprise</strong>. This unified mapping ensures linguistic and speaker independence across global benchmarks.
          </p>
          <div className="mt-6 p-4 rounded-2xl bg-background/50 border border-border/40 italic text-[11px] text-muted-foreground leading-relaxed">
            "By merging global benchmarks with domain-specific mock interview audio, we achieved a high-fidelity model capable of handling varied acoustic profiles and multiple languages."
          </div>
        </div>
      </div>

      {/* Proposed Hybrid Model Methodology Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-border/40" />
        <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/10">
          <Cpu className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Proposed Hybrid Model Methodology</span>
        </div>
        <div className="h-px flex-1 bg-border/40" />
      </div>

      {/* Hybrid CNN-LSTM Architecture */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-400" />
              Hybrid CNN-LSTM Architecture
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To effectively classify emotions, we designed a hybrid architecture that leverages <strong>Convolutional Neural Networks (CNN)</strong> for spatial feature extraction and <strong>Long Short-Term Memory (LSTM)</strong> networks for temporal dependencies.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                <div className="h-2 w-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <div className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Spatial Modeling:</strong> Multiple Conv1D layers extract local spectral patterns, supported by MaxPooling and Batch Normalization for stability.
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <div className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Temporal Awareness:</strong> LSTM layers capture the sequential nature of speech, modeling how emotional tone evolves over 3-second segments.
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-secondary/10 border border-border/20">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">Training Configuration</h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-muted-foreground uppercase font-bold">Optimizer</span>
                <span className="font-black text-foreground">Adam</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-muted-foreground uppercase font-bold">Loss Function</span>
                <span className="font-black text-foreground">Categorical Cross-Entropy</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-muted-foreground uppercase font-bold">Epochs</span>
                <span className="font-black text-foreground">30 (w/ Early Stopping)</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-muted-foreground uppercase font-bold">Batch Size</span>
                <span className="font-black text-foreground">64</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Semi-Supervised Learning Pipeline */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-8 flex items-center gap-2">
          <Brain className="h-4 w-4 text-emerald-400" />
          Semi-Supervised Learning Pipeline
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden group">
            <div className="text-2xl font-black text-emerald-500/20 absolute top-2 right-4">01</div>
            <h5 className="text-xs font-bold mb-2">Chunk Predictions</h5>
            <p className="text-[10px] text-muted-foreground leading-relaxed">Unlabeled interview audio is segmented into 3s chunks and processed for initial probabilities.</p>
          </div>
          <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden group">
            <div className="text-2xl font-black text-emerald-500/20 absolute top-2 right-4">02</div>
            <h5 className="text-xs font-bold mb-2">Confidence Filtering</h5>
            <p className="text-[10px] text-muted-foreground leading-relaxed">Only high-confidence predictions (Max Probability {">"} Threshold) are selected to reduce model noise.</p>
          </div>
          <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden group">
            <div className="text-2xl font-black text-emerald-500/20 absolute top-2 right-4">03</div>
            <h5 className="text-xs font-bold mb-2">Pseudo Labeling</h5>
            <p className="text-[10px] text-muted-foreground leading-relaxed">Selected predictions are assigned pseudo-labels and merged with the gold-standard labeled dataset.</p>
          </div>
          <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden group lg:col-span-3">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <RefreshCcw className="h-5 w-5 text-emerald-500 animate-spin-slow" />
              </div>
              <div>
                <h5 className="text-xs font-bold mb-1">Iterative Self-Training</h5>
                <p className="text-[10px] text-muted-foreground leading-relaxed">The model is retrained on the expanded dataset, generating more accurate pseudo-labels in subsequent iterations until convergence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unified Labeling Methodology */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
              <RefreshCcw className="h-4 w-4 text-purple-400" />
              Unified Labeling Strategy
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To solve inconsistencies across EmoDB, RAVDESS, and TESS, we mapped all dataset-specific labels into a common set of <strong>seven emotion categories</strong>. This standardization ensures a unified training target across multiple languages (German and English) and speaker characteristics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 text-center">
                <div className="text-[8px] font-black uppercase text-purple-500">RAVDESS</div>
                <div className="text-[10px] font-bold">"Fearful" → Fear</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-center">
                <div className="text-[8px] font-black uppercase text-blue-500">TESS</div>
                <div className="text-[10px] font-bold">"Surprise" → Surprise</div>
              </div>
              <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-center">
                <div className="text-[8px] font-black uppercase text-primary">EmoDB</div>
                <div className="text-[10px] font-bold">"Boredom" → Neutral</div>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-secondary/10 border border-border/20">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">Core Emotion Classes</h5>
            <div className="flex flex-wrap gap-2">
              {['Angry', 'Disgust', 'Fear', 'Happy', 'Neutral', 'Sad', 'Surprise'].map(label => (
                <span key={label} className="px-3 py-1 rounded-full bg-background/50 border border-border/40 text-[10px] font-bold">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Preprocessing & Feature Extraction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-[2.5rem] bg-card/40 border border-border/40 backdrop-blur-sm">
          <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
            <Settings className="h-4 w-4 text-emerald-400" />
            Acoustic Preprocessing Pipeline
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <Activity className="h-3 w-3 text-emerald-500" />
              </div>
              <div className="text-xs text-muted-foreground">
                <strong>Resampling:</strong> Standardized all signals to <strong>22050 Hz</strong> to maintain uniform frequency resolution.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <Activity className="h-3 w-3 text-emerald-500" />
              </div>
              <div className="text-xs text-muted-foreground">
                <strong>Standardization:</strong> Padded or trimmed all audio files to a fixed length for uniform model input size.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <Activity className="h-3 w-3 text-emerald-500" />
              </div>
              <div className="text-xs text-muted-foreground">
                <strong>Chunking:</strong> Divided long-duration files into consistent 3-second segments to optimize learnability.
              </div>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-[2.5rem] bg-card/40 border border-border/40 backdrop-blur-sm">
          <h4 className="text-sm font-bold mb-6 flex items-center gap-2">
            <Layers className="h-4 w-4 text-blue-400" />
            Acoustic Feature Engineering
          </h4>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-black uppercase text-blue-500">MFCC</span>
                <span className="text-[9px] text-muted-foreground">Spectral Properties</span>
              </div>
              <p className="text-[10px] text-muted-foreground italic">Mimics human auditory perception via Mel-Frequency Cepstral Coefficients.</p>
            </div>
            <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-black uppercase text-blue-500">Zero Crossing Rate</span>
                <span className="text-[9px] text-muted-foreground">Noisiness & Transitions</span>
              </div>
              <p className="text-[10px] text-muted-foreground italic">Measures frequency of sign changes in the signal waveform.</p>
            </div>
            <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-black uppercase text-blue-500">RMS Energy</span>
                <span className="text-[9px] text-muted-foreground">Loudness/Energy</span>
              </div>
              <p className="text-[10px] text-muted-foreground italic">Represents the average signal amplitude and perceived loudness.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Ablation Study: Audio Model Configurations */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-8 flex items-center gap-2">
          <BarChart2 className="h-4 w-4 text-blue-400" />
          Ablation Study: Model Configuration Comparison
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 flex flex-col justify-between border-l-4 border-l-blue-500">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Full Model</div>
              <h5 className="text-sm font-bold mb-2">CNN + LSTM + Semi</h5>
              <p className="text-[10px] text-muted-foreground leading-relaxed">Integrates spectral patterns (CNN) and temporal modeling (LSTM) with pseudo-labeled data utilization.</p>
            </div>
            <div className="mt-4 text-2xl font-black text-foreground">78.02%</div>
          </div>

          <div className="p-6 rounded-3xl bg-secondary/20 border border-border/10 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Baseline 1</div>
              <h5 className="text-sm font-bold mb-2">Only CNN</h5>
              <p className="text-[10px] text-muted-foreground leading-relaxed">Effective local feature extraction but fails to model temporal dependencies in speech.</p>
            </div>
            <div className="mt-4 text-2xl font-black text-muted-foreground">~71%</div>
          </div>

          <div className="p-6 rounded-3xl bg-secondary/20 border border-border/10 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Baseline 2</div>
              <h5 className="text-sm font-bold mb-2">Only LSTM</h5>
              <p className="text-[10px] text-muted-foreground leading-relaxed">Captures temporal patterns but lacks meaningful acoustic feature representation without CNN.</p>
            </div>
            <div className="mt-4 text-2xl font-black text-muted-foreground">~72%</div>
          </div>

          <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 flex flex-col justify-between border-l-4 border-l-emerald-500">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">Supervised</div>
              <h5 className="text-sm font-bold mb-2">Only Supervised</h5>
              <p className="text-[10px] text-muted-foreground leading-relaxed">Trained solely on clean labeled benchmarks (RAVDESS, TESS, EmoDB) with gold-standard labels.</p>
            </div>
            <div className="mt-4 text-2xl font-black text-emerald-500">88.0%</div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-3xl bg-secondary/10 border border-border/20">
          <p className="text-xs text-muted-foreground leading-relaxed italic">
            <strong>Key Insight:</strong> While the Supervised-only approach shows higher accuracy on benchmark data, the Full Hybrid Model offers superior efficiency and generalization in real-world scenarios where large labeled datasets are unavailable.
          </p>
        </div>
      </div>

      {/* Semi-Supervised Model Performance */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-8 flex items-center gap-2">
          <Target className="h-4 w-4 text-emerald-400" />
          Semi-Supervised Model Performance
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <h5 className="text-xl font-black text-foreground mb-4">Acoustic Confusion Matrix Analysis</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This confusion matrix is computed on the test dataset, reflecting the model’s ability to generalize to unseen data. Overall, the semi-supervised model demonstrates balanced performance across all seven emotion classes, with no single class being significantly underrepresented in prediction accuracy.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                "The model's ability to handle imbalanced benchmark data while maintaining high precision across all classes validates our semi-supervised learning approach."
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white p-4">
              <img
                src="/audio/confusion.png"
                alt="Audio Confusion Matrix"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white p-6">
              <div className="text-[10px] font-black uppercase text-muted-foreground mb-4 tracking-widest">Classification Report</div>
              <img
                src="/audio/precision,f1,recall.png"
                alt="Classification Report"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Behavioral Rubric Mapping */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-8 flex items-center gap-2">
          <Brain className="h-4 w-4 text-primary" />
          Behavioral Rubric Mapping: From Emotions to Soft Skills
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              This module maps low-level emotion predictions extracted from audio into high-level behavioral and communication rubrics.
              The detected emotions (Angry, Disgust, Fear, Happy, Neutral, Sad, Surprise) are processed to derive meaningful soft-skill indicators such as <strong>Sentiment, Professionalism, Emotional Stability, Engagement, Calmness, Emotional Intensity, Vocal Confidence, Vocal Engagement, and Stress/Tension</strong>.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This transformation enables the system to move beyond raw emotion detection and provide interpretable, human-centric evaluation metrics that reflect real-world communication performance.
            </p>
            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                "Bridging the gap between acoustic signals and professional competencies through intelligent metric derivation."
              </p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white p-4 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
            <img
              src="/audio/image.png"
              alt="Behavioral Rubric Mapping"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Label Efficiency Analysis */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-8 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-purple-400" />
          Label Efficiency: SSL vs. Supervised Baseline
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Label efficiency</strong> refers to the ability of a model to achieve high performance using a limited amount of labeled data. Our semi-supervised approach leverages unlabeled data to learn the underlying structure of the data distribution, supported by the <strong>manifold assumption</strong> and the <strong>cluster assumption</strong>.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                <h5 className="text-xs font-black text-purple-500 uppercase tracking-widest mb-2">Low-Label Advantage</h5>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  By propagating information from a small labeled set to a larger unlabeled pool, the SSL model significantly outperforms traditional supervised models in scenarios with {">"}25% labeled data.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                <h5 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-2">Performance Saturation</h5>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  As labeled data increases, the advantage diminishes. Supervised models benefit from 100% ground truth, whereas SSL pseudo-labels may introduce noise that limits further improvement.
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none" />
            <img
              src="/audio/labeleffic.png"
              alt="Label Efficiency Comparison"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
      {/* Confidence Threshold Analysis */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-8 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-blue-400" />
          Confidence Threshold & Coverage Analysis
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              The <strong>confidence threshold analysis</strong> evaluates the performance trade-off when filtering predictions based on their probability scores. The threshold represents the minimum probability required for a prediction to be accepted by the system.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                <h5 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-2">Accuracy-Coverage Trade-off</h5>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  As the threshold increases, accuracy improves by filtering out low-confidence (high-noise) predictions. However, this leads to a proportional decrease in <strong>coverage</strong>, as fewer samples meet the strict acceptance criteria.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <h5 className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-2">SSL Stability</h5>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  While the supervised baseline shows slightly higher peak accuracy due to reliable ground truth, the SSL model maintains competitive stability even at higher thresholds, validating our pseudo-label filtering logic.
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />
            <img
              src="/audio/confedence.png"
              alt="Confidence Threshold Analysis"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Inter-Rater Reliability */}
      <div className="bg-card/30 border border-border/40 rounded-[2.5rem] p-8">
        <h4 className="text-sm font-bold mb-8 flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-500" />
          Inter-Rater Reliability Evaluation
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h5 className="text-2xl font-black text-foreground mb-4">Inter-Rater Reliability (Cohen's Kappa)</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To evaluate the consistency of our acoustic rubrics across different evaluations, we calculated <strong>Cohen's Kappa</strong> for each behavioral metric. The results demonstrate strong alignment across categories, validating the reliability of our feature extraction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                <div className="text-[9px] font-black uppercase text-emerald-500 mb-1">Peak Agreement</div>
                <div className="text-lg font-black">0.87</div>
                <div className="text-[8px] text-muted-foreground">Vocal Engagement</div>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/20 border border-border/10 text-center">
                <div className="text-[9px] font-black uppercase text-muted-foreground mb-1">Baseline</div>
                <div className="text-lg font-black">0.79</div>
                <div className="text-[8px] text-muted-foreground">Vocal Confidence</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-secondary/10 border border-border/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                The reliability curve maintains a strong baseline above <strong>0.79</strong>, peaking at <strong>0.87</strong> for complex metrics like Vocal Engagement. This high consensus confirms that our audio evaluation rubrics provide stable and reproducible outcomes.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-2xl group bg-white p-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none" />
              <img
                src="/audio/interrater.png"
                alt="Inter-Rater Reliability Graph"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-102"
              />
              <div className="mt-4 text-center border-t border-border/20 pt-4">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-2">
                  <Activity className="h-3 w-3" />
                  Inter-Rater Reliability Metrics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AudioDatasetMetrics;
