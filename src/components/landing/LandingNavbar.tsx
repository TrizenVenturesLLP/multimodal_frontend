import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
];

const LandingNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.05] bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <span className="text-xs font-bold text-primary-foreground tracking-tighter">AI</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            InterviewAI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/dashboard"
            className="inline-flex h-10 items-center rounded-lg bg-gradient-to-r from-primary to-indigo-600 px-5 text-sm font-semibold text-white shadow-[0_4px_15px_rgba(37,99,235,0.2)] transition-all hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] active:scale-[0.98]"
          >
            Launch Dashboard
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-card px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/dashboard"
            className="inline-flex h-10 items-center rounded-lg bg-foreground px-5 text-sm font-semibold text-background"
          >
            Launch Dashboard
          </Link>
        </div>
      )}
    </header>
  );
};

export default LandingNavbar;
