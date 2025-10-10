import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HandHeart, Building2, Users, Mail } from "lucide-react";

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get Involved
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join us in Oakland as we empower Black youth through Restorative Justice. Whether you volunteer, partner with us, or sponsor an event, your involvement creates lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Volunteer */}
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow border border-border text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-primary/20">
                  <HandHeart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Volunteer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Help us serve Black youth and families through programs focused on education, health, and economic opportunity.
                </p>
                <Button variant="default" className="w-full" asChild>
                  <a href="https://forms.gle/example" target="_blank" rel="noopener noreferrer">
                    Sign Up to Volunteer
                  </a>
                </Button>
              </div>

              {/* Partner */}
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow border border-border text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-accent/20">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Partner</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Organizations can collaborate with us to expand resources and opportunities.
                </p>
                <Button variant="default" className="w-full" asChild>
                  <a href="https://forms.gle/example" target="_blank" rel="noopener noreferrer">
                    Become a Partner
                  </a>
                </Button>
              </div>

              {/* Sponsor */}
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow border border-border text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-secondary/20">
                  <Building2 className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Sponsor</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Local businesses can sponsor events and be recognized as community champions.
                </p>
                <Button variant="default" className="w-full" asChild>
                  <a href="https://forms.gle/example" target="_blank" rel="noopener noreferrer">
                    Sponsor an Event
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Volunteer Opportunities
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-10" />

            <div className="space-y-4">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">Event Support</h3>
                <p className="text-muted-foreground">
                  Help set up, serve meals, and create a welcoming environment at our community events.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">Youth Mentorship (Ages 13+)</h3>
                <p className="text-muted-foreground">
                  Guide Black youth through financial literacy programs, economic opportunity workshops, and pathways to self-sufficiency.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">Administrative Support</h3>
                <p className="text-muted-foreground">
                  Assist with outreach, communications, and behind-the-scenes organizational tasks.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">Health & Wellness Facilitators</h3>
                <p className="text-muted-foreground">
                  Lead Restorative Justice circles, wellness activities, and holistic well-being programs supporting healing and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Partnership & Sponsorship Benefits
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-10" />

            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 shadow-elevated text-background">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-background rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community Recognition</h3>
                    <p className="text-background/80">
                      Your organization will be recognized as a community champion on our website, social media, and at events.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-background rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collaborative Impact</h3>
                    <p className="text-background/80">
                      Work with us to design programs focused on education, health, and economic opportunity that create self-sufficient communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-background rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tax Deductible</h3>
                    <p className="text-background/80">
                      All sponsorships and donations are tax-deductible (501(c)(3) status pending).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border text-center">
              <Mail className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Have Questions?
              </h2>
              <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-6" />
              <p className="text-xl text-muted-foreground mb-8">
                We'd love to hear from you. Reach out to discuss how you can get involved.
              </p>
              <Button variant="default" size="lg" asChild>
                <a href="mailto:info@fna-foundation.org">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
