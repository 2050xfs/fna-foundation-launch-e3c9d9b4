import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DonationOverlay from "@/components/DonationOverlay";
import PartnershipsSection from "@/components/PartnershipsSection";
import { Heart, Users, BookOpen, Calendar, ArrowRight, Lightbulb, Palette, Trophy, Briefcase, Leaf, Target } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";
import youthImage from "@/assets/youth-learning.jpg";
import eventImage from "@/assets/events/family_restoration_night_instagram_final.PNG?url";

const DISMISS_KEY = "fna-donation-overlay-dismissed";

const Home = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const hasDismissed = window.localStorage.getItem(DISMISS_KEY);

    if (hasDismissed) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOverlayOpen(true);
    }, 12000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const handleOverlayChange = (open: boolean) => {
    setIsOverlayOpen(open);

    if (!open && typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, "true");
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DonationOverlay open={isOverlayOpen} onOpenChange={handleOverlayChange} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
              Empowering Oakland's Youth
              <br />
              Through Transformative Programs
            </h1>
            <p className="text-xl md:text-2xl text-background/90 mb-8 leading-relaxed">
              From ages 5 to 17, we provide comprehensive support in education, STEM, arts, sports, health, entrepreneurship, and Restorative Justice—building pathways to self-sufficiency and intergenerational prosperity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved">
                <Button variant="hero" size="lg" className="text-lg group">
                  Join the Movement
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg border-background text-background hover:bg-background/10 hover:text-primary"
                >
                  Support Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Mission</h2>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                To empower Black youth ages 5-17 in Oakland through transformative programs in education, STEM, arts, sports, health & wellness, economic opportunity, and Restorative Justice—building pathways to self-sufficiency, character development, and intergenerational prosperity.
              </p>
              
              {/* Mission Video */}
              <div className="mt-8 mb-6">
                <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-elevated aspect-video">
                  <iframe
                    src="https://drive.google.com/file/d/1Gt8Uo7g2iR9foEShN-yrRZ_f7bUFYIoa/preview"
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay"
                    title="Francisca & Angelina Foundation Mission Video"
                  />
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground font-semibold">
                By 2029, we aim to positively impact 10,000 youth through comprehensive programming that nurtures academic excellence, creative expression, physical wellness, entrepreneurial thinking, and healing justice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-primary/20">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Education & Academic Excellence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Financial literacy, tutoring, homework support, and continuous learning for ages 5-17.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-accent/20">
                  <Lightbulb className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">STEM & Innovation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Technology education, coding, science exploration, and innovation workshops for ages 8-17.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-secondary/20">
                  <Palette className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Arts & Culture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Creative expression, cultural engagement, music, visual arts, and performance for ages 5-17.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-primary/20">
                  <Trophy className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sports & Athletics</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Physical wellness, team building, and character development through sports for ages 5-17.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-accent/20">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Health & Wellness + Restorative Justice</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Holistic well-being, healing circles, accountability, and mental health support for ages 5-17.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-secondary/20">
                  <Briefcase className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Business Coaching & Entrepreneurship</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Financial literacy, business skills, and entrepreneurship fundamentals for ages 13-17.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-primary/20">
                  <Leaf className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Environmental Sustainability</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Eco-awareness, environmental stewardship, and community garden projects for ages 5-17.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-accent/20">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2029 Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our goal: Impact 10,000 youth through comprehensive, age-appropriate programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={youthImage}
                  alt="Youth learning financial literacy"
                  className="rounded-2xl shadow-elevated w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Starting Small, Creating Big Impact
                </h2>
                <div className="h-1 w-20 bg-primary mb-6 rounded-full" />
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We're starting small to create lasting impact. Our seven core programs empower Black youth ages 5-17 with age-appropriate support across education, STEM, arts, sports, health, entrepreneurship, and environmental sustainability.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-secondary-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">7 Core Program Areas</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-secondary-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">8+ Community Partners</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-secondary-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">Ages 5-17 Served</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-secondary-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">Oakland-Based & Community-Focused</p>
                  </div>
                </div>
                <div className="bg-primary/10 rounded-xl p-6 mb-8 border border-primary/20">
                  <h3 className="text-xl font-bold text-foreground mb-2">Our 2029 Goal</h3>
                  <p className="text-muted-foreground">
                    Impact <span className="font-bold text-primary">10,000 youth</span> through comprehensive programming that nurtures academic excellence, creative expression, physical wellness, entrepreneurial thinking, and healing justice.
                  </p>
                </div>
                <Link to="/about">
                  <Button variant="default" size="lg" className="group">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Event - Family Restoration Night */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">🎉 Family Restoration Night</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
              <span className="inline-block bg-primary/20 text-primary font-semibold px-4 py-2 rounded-full text-sm">
                ✓ Completed
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Column */}
              <div className="order-2 md:order-1">
                <img
                  src={eventImage}
                  alt="Family Restoration Night Event"
                  className="rounded-2xl shadow-elevated w-full h-auto"
                />
              </div>
              
              {/* Content Column */}
              <div className="order-1 md:order-2">
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  A free evening of healing, dinner, sound bath, massage therapy, and family connection.
                </p>
                <div className="bg-card rounded-xl p-6 mb-6 border border-border shadow-soft">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-semibold text-foreground mr-2">Date:</span>
                      <span className="line-through">Friday, Nov 21, 2025</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-foreground mr-2">Time:</span>
                      <span>6:00 – 8:00 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-foreground mr-2">Location:</span>
                      <span>100 Grand Ave, 6th Floor, Oakland</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-foreground mr-2">For:</span>
                      <span>Families + Youth Ages 5–17</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg text-primary font-semibold">Thank you to everyone who attended!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <PartnershipsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-background mb-4">
              Be Part of the Change
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-background/90 mb-8 leading-relaxed">
              Your support empowers youth ages 5-17 in Oakland through STEM education, arts programs, sports, Restorative Justice, business coaching, and environmental sustainability initiatives—creating pathways to self-sufficiency and intergenerational prosperity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button variant="hero" size="lg" className="text-lg">
                  Donate Now
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg border-background text-background hover:bg-background/10 hover:text-primary"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
