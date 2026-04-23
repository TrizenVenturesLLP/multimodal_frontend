import { Upload, FileVideo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useCallback, useState } from "react";

interface UploadCardProps {
  onAnalyze: (file: File) => void;
  uploading: boolean;
  uploadProgress: number;
}

const UploadCard = ({ onAnalyze, uploading, uploadProgress }: UploadCardProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) setFile(dropped);
  }, []);

  return (
    <div className="rounded-2xl bg-card p-8 shadow-lg border">
      <div className="mx-auto max-w-lg text-center">
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => document.getElementById("file-input")?.click()}
          className={`cursor-pointer rounded-xl border-2 border-dashed p-12 transition-colors ${
            dragOver
              ? "border-primary bg-primary/5"
              : file
              ? "border-success/50 bg-success/5"
              : "border-border hover:border-primary/50 hover:bg-muted/50"
          }`}
        >
          <input
            id="file-input"
            type="file"
            accept="video/*,audio/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          {file ? (
            <>
              <FileVideo className="mx-auto h-12 w-12 text-success mb-4" />
              <p className="text-base font-medium text-foreground">{file.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {(file.size / (1024 * 1024)).toFixed(1)} MB
              </p>
            </>
          ) : (
            <>
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-base font-medium text-foreground">
                Upload your interview video
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Drag & drop or click to browse
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                MP4, AVI, MOV, WebM • Max 500MB
              </p>
            </>
          )}
        </div>

        {uploading && (
          <div className="mt-6 space-y-2">
            <Progress value={uploadProgress} className="h-2" />
            <p className="text-sm text-muted-foreground">
              Uploading... {uploadProgress}%
            </p>
          </div>
        )}

        <Button
          onClick={() => file && onAnalyze(file)}
          disabled={!file || uploading}
          className="mt-6 w-full rounded-xl py-6 text-base font-semibold"
          size="lg"
        >
          Analyze Interview
        </Button>
      </div>
    </div>
  );
};

export default UploadCard;
