import { Link } from "react-router-dom";
import { Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">FNA</span>
              </div>
              <div className="font-bold text-lg">Francisca & Angelina Foundation</div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Based in Oakland, empowering Black youth aged 13+ through Restorative Justice, education, health, and economic opportunity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Events
              </Link>
              <Link to="/get-involved" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Get Involved
              </Link>
              <Link to="/donate" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Donate
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:info@fna-foundation.org"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@fna-foundation.org</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80 text-sm">
          <p>&copy; {new Date().getFullYear()} Francisca & Angelina Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
