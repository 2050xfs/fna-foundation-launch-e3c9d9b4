import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import eventImage from "@/assets/community-event.jpg";

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Community Events
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Based in Oakland, we bring together Black youth and families through events focused on healing, education, and economic opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Event */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Upcoming Event
            </h2>

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
                    Holiday Family Event
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Join us for a special holiday gathering providing meals and resources for Black youth and families, with a focus on wellness, healing, and building community connections.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">December 2025</p>
                        <p className="text-sm text-muted-foreground">Exact date to be announced</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">2:00 PM - 6:00 PM</p>
                        <p className="text-sm text-muted-foreground">Afternoon gathering</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Oakland Community Center</p>
                        <p className="text-sm text-muted-foreground">Location details coming soon</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">For Youth Aged 13+ and Families</p>
                        <p className="text-sm text-muted-foreground">Free event, registration required</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="cta" size="lg" className="w-full text-lg">
                      Register for Event
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Registration will open soon. Check back for updates!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              What to Expect
            </h2>

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
                <h3 className="text-xl font-semibold text-foreground mb-3">Youth Programs (Ages 13+)</h3>
                <p className="text-muted-foreground">
                  Educational workshops on financial literacy, economic opportunity, and skills for self-sufficiency.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Past Events
            </h2>
            <div className="bg-muted/50 rounded-2xl p-12 border border-border">
              <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">
                This is our first major event! Check back here to see photos and stories from our community gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
