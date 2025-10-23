import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import saveTheBayLogo from "@/assets/partners/save-the-bay-logo.png";
import googleLogo from "@/assets/partners/google-logo.png";
import facebookLogo from "@/assets/partners/facebook-logo.png";
import salesforceLogo from "@/assets/partners/salesforce-logo.png";
import warriorsLogo from "@/assets/partners/warriors-logo.png";
import omcaLogo from "@/assets/partners/omca-logo.png";
import chabotLogo from "@/assets/partners/chabot-logo.png";
import ebcfLogo from "@/assets/partners/ebcf-logo.png";

const PartnershipsSection = () => {
  const techPartners = [
    { name: "Google", logo: googleLogo },
    { name: "Facebook", logo: facebookLogo },
    { name: "Salesforce", logo: salesforceLogo },
  ];

  const communityPartners = [
    {
      name: "Golden State Warriors",
      website: "https://www.nba.com/warriors",
      category: "Sports & Athletics",
      logo: warriorsLogo,
    },
    {
      name: "Oakland Museum of California",
      website: "https://museumca.org",
      category: "Arts & Culture",
      logo: omcaLogo,
    },
    {
      name: "Chabot Space & Science Center",
      website: "https://chabotspace.org",
      category: "STEM Education",
      logo: chabotLogo,
    },
    {
      name: "Save The Bay",
      website: "https://savebay.org",
      category: "Environmental",
      logo: saveTheBayLogo,
    },
    {
      name: "East Bay Community Foundation",
      website: "https://www.ebcf.org",
      category: "Community Foundation",
      logo: ebcfLogo,
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Our Community Partners
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 text-center max-w-4xl mx-auto leading-relaxed">
            We collaborate with leading organizations in technology, sports, arts, environmental sustainability, and community development to create comprehensive opportunities for Oakland's youth.
          </p>

          {/* Technology & Innovation Partners */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Technology & Innovation
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {techPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="group text-center space-y-4"
                >
                  <div className="h-20 md:h-24 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-20 md:max-h-24 w-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold text-foreground">
                      {partner.name}
                    </h4>
                    <p className="text-base text-muted-foreground mt-1">
                      STEM & Technology Programs
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Partners Grid */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Community Collaborators
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {communityPartners.map((partner, index) => (
                <a
                  key={partner.name}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group text-center space-y-2 transition-opacity hover:opacity-80",
                    index === 3 && "lg:col-start-2",
                    index === 4 && "md:col-span-2 md:flex md:flex-col md:items-center md:max-w-xs md:mx-auto"
                  )}
                >
                  <div className="h-28 md:h-24 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-28 md:max-h-24 w-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-1">
                      {partner.name}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {partner.category}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="mt-20 text-center">
            <Building2 className="w-14 h-14 text-primary mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Become a Partner
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Interested in partnering with us to empower Oakland's youth ages 5-17? We're always looking for organizations that share our vision.
            </p>
            <a
              href="mailto:info@thefalegacy.org?subject=Partnership Inquiry"
              className="inline-flex items-center text-lg text-primary hover:underline font-semibold transition-opacity hover:opacity-80"
            >
              Contact us about partnership opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
