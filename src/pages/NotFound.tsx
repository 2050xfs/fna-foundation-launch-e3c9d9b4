import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center bg-card shadow-soft border border-border rounded-2xl px-10 py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
          <span className="text-accent font-bold text-2xl">404</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">Page Not Found</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          The page you are looking for may have moved or no longer exists. Let's guide you back to our community.
        </p>
        <Link to="/">
          <Button variant="cta" size="lg">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
