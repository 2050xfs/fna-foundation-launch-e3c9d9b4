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
              Based in Oakland, carrying forward a legacy of faith, generosity, and community care
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
                  A Legacy of Faith & Generosity
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="leading-relaxed">
                  The Francisca & Angelina Foundation is inspired by our founder's grandmothers—Francisca and Angelina—women of unwavering faith who selflessly nourished communities in Nigeria. Throughout their lives, they built wealth not just for themselves, but to uplift entire communities.
                </p>
                <p className="leading-relaxed">
                  Their legacy was one of radical generosity, financial wisdom, and deep community care. They understood that true wealth isn't measured by what we keep, but by what we give away and the lives we touch.
                </p>
                <p className="leading-relaxed">
                  Today, we carry that torch forward in Oakland, empowering Black youth aged 13 and up through Restorative Justice principles to create the same opportunities for healing, education, and prosperity that Francisca and Angelina championed throughout their extraordinary lives.
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
                  Based in Oakland, California, and inspired by the profound legacy of Francisca and Angelina, we empower Black youth aged 13 and up through Restorative Justice principles. We cultivate thriving, self-sufficient communities by championing equitable access to education, health, and economic opportunity, fostering healing, accountability, and positive societal reintegration.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <div className="w-14 h-14 bg-gradient-warm rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a future where every young person, guided by the enduring spirit of Francisca and Angelina, transforms adversity into opportunity through restorative practices. Our communities will be beacons of equitable access, where individuals are equipped with the tools for self-sufficiency, holistic well-being, and continuous learning, creating a lasting legacy of peace, prosperity, and intergenerational empowerment.
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
                <h3 className="text-xl font-semibold text-foreground text-center mb-2">Francisca Obi</h3>
                <p className="text-primary text-center mb-3">Founder & Executive Director</p>
                <p className="text-muted-foreground text-center text-sm">
                  Carrying forward her grandmothers' legacy of faith, community care, and generosity
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
