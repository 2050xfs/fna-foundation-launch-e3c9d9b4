import { useState, useEffect } from "react";
import { X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const DISMISS_KEY = "fna-event-banner-dismissed";

const EventBanner = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isRSVPDialogOpen, setIsRSVPDialogOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const hasDismissed = window.localStorage.getItem(DISMISS_KEY);
    if (hasDismissed === "true") {
      setIsDismissed(true);
    }
  }, []);

  // Load the form embed script when modal opens
  useEffect(() => {
    if (isRSVPDialogOpen) {
      const script = document.createElement("script");
      script.src = "https://link.upflexdigital.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        const existingScript = document.querySelector(
          'script[src="https://link.upflexdigital.com/js/form_embed.js"]'
        );
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isRSVPDialogOpen]);

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
    <>
      <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-warm text-background shadow-elevated border-b border-background/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Event Info */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Calendar className="w-5 h-5 flex-shrink-0 text-background" />
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-semibold text-background truncate">
                  🎉 Family Restoration Night - Nov 21, 2025 • 6:00 PM
                </p>
                <p className="text-xs md:text-sm text-background/90 truncate">
                  Free evening of healing, dinner, sound bath & family connection
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Dialog open={isRSVPDialogOpen} onOpenChange={setIsRSVPDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-background text-foreground hover:bg-background/90 font-semibold flex-shrink-0 whitespace-nowrap"
                >
                  RSVP Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-hidden p-0 bg-transparent border-none shadow-none">
                <DialogTitle className="sr-only">RSVP for Family Restoration Night</DialogTitle>
                <div className="h-full w-full">
                  <iframe
                    src="https://link.upflexdigital.com/widget/survey/D7c8XYy0TV7ELKBd8olN"
                    style={{
                      border: "none",
                      width: "100%",
                      height: "90vh",
                      borderRadius: "12px",
                    }}
                    scrolling="no"
                    id="D7c8XYy0TV7ELKBd8olN-banner"
                    title="Family Restoration Night RSVP Form"
                    className="w-full"
                  />
                </div>
              </DialogContent>
            </Dialog>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-1 rounded-md hover:bg-background/20 transition-colors focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Dismiss event banner"
            >
              <X className="w-5 h-5 text-background" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventBanner;

