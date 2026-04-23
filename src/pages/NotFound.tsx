import { useEffect } from "react";
import TechnicalFooter from "@/components/dashboard/TechnicalFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
      <TechnicalFooter />
    </div>
  );
};

export default NotFound;
