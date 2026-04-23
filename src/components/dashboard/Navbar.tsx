import { Moon, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  darkMode: boolean;
  onToggleDark: () => void;
}

const Navbar = ({ darkMode, onToggleDark }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">AI</span>
          </div>
          <h1 className="text-lg font-bold text-foreground tracking-tight">
            AI Interview Analyzer
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleDark}
            className="rounded-lg"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
