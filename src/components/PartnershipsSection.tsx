import { Building2 } from "lucide-react";
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
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Our Community Partners
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            We collaborate with leading organizations in technology, sports, arts, environmental sustainability, and community development to create comprehensive opportunities for Oakland's youth.
          </p>

          {/* Technology & Innovation Partners */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Technology & Innovation
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {techPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-elevated transition-all group"
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-16 w-auto group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground text-center">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    STEM & Technology Programs
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Partners Grid */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Community Collaborators
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityPartners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-elevated transition-all group"
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-16 w-auto group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground text-center mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-muted-foreground text-center">
                    {partner.category}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="mt-12 text-center bg-card rounded-xl p-8 border border-border shadow-soft">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Become a Partner
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in partnering with us to empower Oakland's youth ages 5-17? We're always looking for organizations that share our vision.
            </p>
            <a
              href="mailto:info@thefalegacy.org?subject=Partnership Inquiry"
              className="inline-flex items-center text-primary hover:underline font-semibold"
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
