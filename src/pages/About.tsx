import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnershipsSection from "@/components/PartnershipsSection";
import { Heart, Target, Eye, Users, Lightbulb, Handshake, Shield } from "lucide-react";
import udokaPhoto from "@/assets/udoka-uwakwe.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6" />
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
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-accent/20">
                  <Heart className="w-8 h-8 text-accent" />
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
                  Today, we carry that torch forward in Oakland, empowering Black youth ages 5-17 through comprehensive programs in education, STEM, arts, sports, health, entrepreneurship, environmental sustainability, and Restorative Justice—creating the same opportunities for healing, education, and prosperity that Francisca and Angelina championed throughout their extraordinary lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/20">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower Black youth ages 5-17 in Oakland through transformative programs in education, STEM, arts, sports, health & wellness, economic opportunity, and Restorative Justice—building pathways to self-sufficiency, character development, and intergenerational prosperity.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-accent/20">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By 2029, we aim to positively impact 10,000 youth through comprehensive programming that nurtures academic excellence, creative expression, physical wellness, entrepreneurial thinking, and healing justice. We envision Oakland youth equipped with the tools for self-sufficiency, holistic well-being, and continuous learning—creating a lasting legacy of peace, prosperity, and intergenerational empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Leadership
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-10" />
            
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Photo */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                  <img 
                    src={udokaPhoto} 
                    alt="Udoka Uwakwe, Founder & Executive Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Udoka Uwakwe</h3>
                  <p className="text-primary font-semibold mb-3">Founder & Executive Director</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Carrying forward his grandmothers' legacy of faith, community care, and generosity, Udoka founded the Francisca & Angelina Foundation to empower Black youth in Oakland through comprehensive programs that build pathways to self-sufficiency and intergenerational prosperity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Our Core Values
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-10" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-primary/20">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Inclusivity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every child deserves access to transformative opportunities regardless of their background or circumstances.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-accent/20">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We embrace new approaches to youth development, from STEM education to entrepreneurship training.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-secondary/20">
                  <Handshake className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Community Collaboration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Partnering with organizations across Oakland to amplify our impact and serve youth comprehensively.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-primary/20">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Comprehensive Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Addressing the whole child—mind, body, and spirit—through our seven core program areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <PartnershipsSection />

      <Footer />
    </div>
  );
};

export default About;
