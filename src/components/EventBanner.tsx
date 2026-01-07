import { useState, useEffect } from "react";
import { X, Calendar, CheckCircle } from "lucide-react";

const DISMISS_KEY = "fna-event-banner-dismissed";

const EventBanner = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const hasDismissed = window.localStorage.getItem(DISMISS_KEY);
    if (hasDismissed === "true") {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, "true");
    }
  };

  if (isDismissed) {
    return null;
  }

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-muted text-foreground shadow-elevated border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Event Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Calendar className="w-5 h-5 flex-shrink-0 text-primary" />
            <div className="flex-1 min-w-0">
              <p className="text-sm md:text-base font-semibold text-foreground truncate">
                🎉 Family Restoration Night - <span className="line-through">Nov 21, 2025</span>
              </p>
              <p className="text-xs md:text-sm text-muted-foreground truncate">
                Thank you to everyone who attended!
              </p>
            </div>
          </div>

          {/* Completed Badge */}
          <div className="flex items-center gap-2 bg-primary/20 text-primary px-3 py-1.5 rounded-full flex-shrink-0">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Completed</span>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1 rounded-md hover:bg-muted-foreground/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Dismiss event banner"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
