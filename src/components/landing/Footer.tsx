const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 InterviewAI. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
