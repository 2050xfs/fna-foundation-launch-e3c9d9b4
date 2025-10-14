import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DonationOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonationOverlay = ({ open, onOpenChange }: DonationOverlayProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl gap-0 overflow-hidden border-none p-0 shadow-elevated">
        <div className="bg-gradient-hero px-8 py-6 text-background">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-background/80">
            Our Mission
          </p>
          <DialogTitle className="mt-2 text-2xl font-semibold leading-snug text-background">
            Healing Families. Building Futures.
          </DialogTitle>
          <DialogDescription className="mt-3 text-base text-background/85">
            Empowering Black youth in Oakland through restorative justice, education, and pathways to economic opportunity.
          </DialogDescription>
        </div>

        <div className="space-y-6 px-8 py-8">
          <p className="text-sm text-muted-foreground">
            We honor Francisca and Angelina by cultivating safe spaces where Black youth discover their voice, heal in community,
            and gain the tools to lead flourishing lives.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button asChild variant="secondary" size="sm" className="min-w-[160px]">
              <Link to="/get-involved">Volunteer with Us</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="min-w-[160px]">
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </div>

          <blockquote className="text-center text-lg italic text-foreground animate-fade-in-slow">
            "When we lift one child, we raise the hope of an entire community."
          </blockquote>

          <div className="rounded-2xl bg-muted px-6 py-5 text-center shadow-soft">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Your Gift Changes Lives
            </p>
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
              <Link to="/donate">Donate Today</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationOverlay;
