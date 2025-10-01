import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Carrying forward a legacy of generosity, wisdom, and community care
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  A Legacy of Love & Generosity
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="leading-relaxed">
                  The Franciscoka & Angelina Foundation is inspired by our founder's grandmother—a remarkable woman who lived to be 103 years old. Throughout her life, she built wealth not just for herself, but to uplift her entire community in Nigeria.
                </p>
                <p className="leading-relaxed">
                  Her legacy was one of radical generosity, financial wisdom, and deep community care. She understood that true wealth isn't measured by what we keep, but by what we give away and the lives we touch.
                </p>
                <p className="leading-relaxed">
                  Today, we carry that torch forward in the Bay Area, working with Black youth and families to create the same opportunities for healing, education, and prosperity that she championed throughout her extraordinary life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create lasting change for Black youth and families through restorative justice, financial literacy, and wellness programs. We heal families, equip youth with resources, and build partnerships that expand opportunities in education, travel, and agriculture.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <div className="w-14 h-14 bg-gradient-warm rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A future where every Black family has access to healing, every youth has the tools to build wealth, and every community member can thrive. We envision intergenerational prosperity built on the foundation of restorative justice and radical care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Dedicated individuals committed to our mission
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-primary-foreground font-bold text-2xl">FO</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-2">Franciscoka Obi</h3>
                <p className="text-primary text-center mb-3">Founder & Executive Director</p>
                <p className="text-muted-foreground text-center text-sm">
                  Carrying forward her grandmother's legacy of community care and generosity
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-accent-foreground font-bold text-2xl">BD</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-2">Board Members</h3>
                <p className="text-primary text-center mb-3">Coming Soon</p>
                <p className="text-muted-foreground text-center text-sm">
                  We're assembling a dedicated team of community leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
