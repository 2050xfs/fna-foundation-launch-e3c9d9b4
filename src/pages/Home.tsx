import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, BookOpen, Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";
import youthImage from "@/assets/youth-learning.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Healing Families.
              <br />
              Building Futures.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Restorative justice, financial literacy, and wellness programs for Black youth—starting here in the Bay Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved">
                <Button variant="hero" size="lg" className="text-lg group">
                  Join the Movement
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="outline" size="lg" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Franciscoka & Angelina Foundation (FNA) is dedicated to creating lasting change for Black youth and families. Inspired by our founder's grandmother—who lived to be 103, built wealth, and gave generously to her community in Nigeria—we carry her legacy forward through healing, education, and empowerment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Heal Families</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through restorative justice and wellness programs, we create spaces for healing and connection.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 bg-gradient-warm rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Equip Youth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Financial literacy and entrepreneurship resources empower the next generation to build wealth.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 bg-success rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-success-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Build Partnerships</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expanding opportunities in education, travel, and agriculture through community collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/30">
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
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Starting Small, Creating Big Impact
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We believe in starting small to make a big impact. Every event is an opportunity to give back, create memories, and build momentum toward lasting change in our community.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-success-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">Restorative justice and healing programs for families</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-success-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">Teaching youth how to build financial stability</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-success-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">Community events that bring families together</p>
                  </div>
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

      {/* Upcoming Event Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Upcoming Holiday Event</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join us for our Holiday Family Event, providing meals and resources for families in need, with a focus on wellness and community healing.
            </p>
            <Link to="/events">
              <Button variant="cta" size="lg" className="text-lg">
                View Event Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Be Part of the Change
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Your support helps us provide restorative justice programs, teach youth financial literacy, and host community events that bring families together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button variant="hero" size="lg" className="text-lg">
                  Donate Now
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button variant="outline" size="lg" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
