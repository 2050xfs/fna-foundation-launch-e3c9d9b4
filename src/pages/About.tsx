import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnershipsSection from "@/components/PartnershipsSection";
import { Heart, Target, Eye, Users, Lightbulb, Handshake, Shield, Sparkles, HandHeart } from "lucide-react";
import udokaPhoto from "@/assets/udoka-uwakwe.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
              Our Story
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Based in Oakland, carrying forward a legacy of faith, generosity, and community care
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full ring-1 ring-primary/20">
                <Heart className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">A Legacy of Faith & Generosity</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-16" />
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
              <p>
                The Francisca & Angelina Foundation is inspired by our founder's grandmothers—Francisca and Angelina—women of unwavering faith who selflessly nourished communities in Nigeria. Throughout their lives, they built wealth not just for themselves, but to uplift entire communities.
              </p>
              <p>
                Their legacy was one of radical generosity, financial wisdom, and deep community care. They understood that true wealth isn't measured by what we keep, but by what we give away and the lives we touch.
              </p>
              <p>
                Today, we carry that torch forward in Oakland, empowering Black youth ages 5-17 through comprehensive programs in education, STEM, arts, sports, health, entrepreneurship, environmental sustainability, and Restorative Justice—creating the same opportunities for healing, education, and prosperity that Francisca and Angelina championed throughout their extraordinary lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="text-center md:text-left space-y-6">
                <div className="flex justify-center md:justify-start">
                  <div className="p-4 rounded-full ring-1 ring-primary/20">
                    <Target className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower Black youth ages 5-17 in Oakland through transformative programs in education, STEM, arts, sports, health & wellness, economic opportunity, and Restorative Justice—building pathways to self-sufficiency, character development, and intergenerational prosperity.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center md:text-left space-y-6">
                <div className="flex justify-center md:justify-start">
                  <div className="p-4 rounded-full ring-1 ring-primary/20">
                    <Sparkles className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By 2029, we aim to positively impact 10,000 youth through comprehensive programming that nurtures academic excellence, creative expression, physical wellness, entrepreneurial thinking, and healing justice. We envision Oakland youth equipped with the tools for self-sufficiency, holistic well-being, and continuous learning—creating a lasting legacy of peace, prosperity, and intergenerational empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Leadership
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-16" />
            
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Photo Column */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary/10">
                  <img 
                    src={udokaPhoto} 
                    alt="Udoka Uwakwe, Founder & Executive Director"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content Column - spans 2 columns */}
              <div className="md:col-span-2 text-center md:text-left space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">Udoka Uwakwe</h3>
                  <p className="text-lg md:text-xl text-primary font-semibold mb-6">Founder & Executive Director</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Carrying forward his grandmothers' legacy of faith, community care, and generosity, Udoka founded the Francisca & Angelina Foundation to empower Black youth in Oakland through comprehensive programs that build pathways to self-sufficiency and intergenerational prosperity.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    His vision continues the tradition of Francisca and Angelina—creating opportunities for healing, education, and prosperity for the next generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Our Core Values
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-16" />
            
            <div className="grid md:grid-cols-2 gap-8 gap-y-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-full ring-1 ring-primary/20">
                    <Users className="w-14 h-14 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Inclusivity</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every child deserves access to transformative opportunities regardless of their background or circumstances.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-full ring-1 ring-primary/20">
                    <Lightbulb className="w-14 h-14 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Innovation</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We embrace new approaches to youth development, from STEM education to entrepreneurship training.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-full ring-1 ring-primary/20">
                    <HandHeart className="w-14 h-14 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Community Collaboration</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Partnering with organizations across Oakland to amplify our impact and serve youth comprehensively.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-full ring-1 ring-primary/20">
                    <Heart className="w-14 h-14 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Comprehensive Support</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Addressing the whole child—mind, body, and spirit—through our seven core program areas.
                  </p>
                </div>
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
