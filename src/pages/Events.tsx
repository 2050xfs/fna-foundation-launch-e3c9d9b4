import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventFeedbackForm from "@/components/forms/EventFeedbackForm";
import EventSuggestionForm from "@/components/forms/EventSuggestionForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import eventImage from "@/assets/community-event.jpg";

const Events = () => {
  const [isRSVPDialogOpen, setIsRSVPDialogOpen] = useState(false);

  // Load the form embed script when modal opens
  useEffect(() => {
    if (isRSVPDialogOpen) {
      const script = document.createElement("script");
      script.src = "https://link.upflexdigital.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        const existingScript = document.querySelector(
          'script[src="https://link.upflexdigital.com/js/form_embed.js"]'
        );
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isRSVPDialogOpen]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Community Events
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Based in Oakland, we bring together youth ages 5-17 and families through events focused on education, STEM, arts, sports, health, entrepreneurship, environmental sustainability, and Restorative Justice.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Event */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Upcoming Event
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-10" />

            <div className="bg-card rounded-2xl overflow-hidden shadow-elevated border border-border">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={eventImage}
                    alt="Holiday Family Event"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold shadow-soft">
                      Featured Event
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    🎉 Family Restoration Night
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Join us for a free evening of healing, dinner, sound bath, massage therapy, and family connection.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Friday, Nov 21, 2025</p>
                        <p className="text-sm text-muted-foreground">Save the date</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">6:00 – 8:00 PM</p>
                        <p className="text-sm text-muted-foreground">Evening event</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">100 Grand Ave, 6th Floor, Oakland</p>
                        <p className="text-sm text-muted-foreground">6th Floor</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">For Families + Youth Ages 5–17</p>
                        <p className="text-sm text-muted-foreground">Free event, registration required</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Dialog open={isRSVPDialogOpen} onOpenChange={setIsRSVPDialogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="cta" size="lg" className="w-full text-lg">
                          Register for Event
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
                            id="D7c8XYy0TV7ELKBd8olN"
                            title="Family Restoration Night RSVP Form"
                            className="w-full"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              What to Expect
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-10" />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Community Meals</h3>
                <p className="text-muted-foreground">
                  Enjoy a warm, nutritious meal with your family and neighbors in a welcoming environment.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Health & Wellness</h3>
                <p className="text-muted-foreground">
                  Participate in Restorative Justice circles, healing activities, mindfulness practices, and holistic well-being programs.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Resource Fair</h3>
                <p className="text-muted-foreground">
                  Connect with local organizations offering support services and community resources.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Youth Programs (Ages 5-17)</h3>
                <p className="text-muted-foreground">
                  Age-appropriate workshops in STEM, arts, sports, financial literacy, entrepreneurship, and environmental education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Past Events
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8" />
            <div className="bg-muted rounded-2xl p-12 border border-border">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">
                This is our first major event! Check back here to see photos and stories from our community gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Feedback Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">Share Your Feedback</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-10" />
            <EventFeedbackForm />
          </div>
        </div>
      </section>

      {/* Event Suggestion Form */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">Suggest an Event</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-10" />
            <p className="text-lg text-muted-foreground text-center mb-8">
              Dreaming up a gathering that would serve Black youth and families? Share the vision below and we&apos;ll explore it with
              you.
            </p>
            <EventSuggestionForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
