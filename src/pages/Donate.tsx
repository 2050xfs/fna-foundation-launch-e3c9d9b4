import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Users, BookOpen, Calendar, CheckCircle } from "lucide-react";

const Donate = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your generosity helps us heal families, empower youth, and build stronger communities. Every contribution makes a lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Your Support Helps Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Healing Programs</h3>
                <p className="text-muted-foreground">
                  Provide restorative justice and wellness programs for families
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Youth Education</h3>
                <p className="text-muted-foreground">
                  Teach youth how to build financial stability and wealth
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community Events</h3>
                <p className="text-muted-foreground">
                  Host events that bring families together and provide resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Amounts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Make a Difference Today
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Even $25 can make a difference for a family in our community
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-elevated transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">$25</div>
                <p className="text-sm text-muted-foreground">Provides meals for one family</p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-elevated transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">$50</div>
                <p className="text-sm text-muted-foreground">Supports a youth workshop</p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-elevated transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">$100</div>
                <p className="text-sm text-muted-foreground">Funds a restorative justice session</p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-elevated transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">$250</div>
                <p className="text-sm text-muted-foreground">Sponsors an entire event</p>
              </div>
            </div>

            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 shadow-elevated text-center">
              <h3 className="text-3xl font-bold text-primary-foreground mb-6">
                Choose Your Donation Amount
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button variant="hero" size="lg" className="text-lg">
                  One-Time Gift
                </Button>
                <Button variant="outline" size="lg" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Monthly Giving
                </Button>
              </div>
              <p className="text-primary-foreground/90 text-sm">
                Secure payment processing through Stripe, PayPal, or Donorbox
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Your Donation Matters
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Direct Community Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    100% of your donation goes directly to programs serving Black youth and families in the Bay Area. We're starting small to ensure every dollar makes a real difference.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Transparent Operations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As we build our foundation, we're committed to full transparency. You'll receive updates on how your contributions are creating change in our community.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Generational Change</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your support doesn't just help today—it creates lasting change by equipping youth with tools to build wealth and strengthening family bonds through healing programs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Tax Deductible</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All donations are tax-deductible to the extent allowed by law (501(c)(3) status pending).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Other Ways to Give
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <DollarSign className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Corporate Matching</h3>
                <p className="text-muted-foreground">
                  Many employers will match your donation. Check if your company has a matching gift program to double your impact.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">In-Kind Donations</h3>
                <p className="text-muted-foreground">
                  We accept donations of goods, services, and professional expertise. Contact us to learn about current needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Every Gift Creates Lasting Change
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join us in carrying forward a legacy of generosity and community care
            </p>
            <Button variant="cta" size="lg" className="text-lg">
              Make Your Donation Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
