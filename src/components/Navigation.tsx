import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/events", label: "Events" },
    { path: "/get-involved", label: "Get Involved" },
    { path: "/donate", label: "Donate" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm shadow-soft text-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-soft transition-transform group-hover:scale-105">
              <span className="text-background font-bold text-xl">FNA</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-background">Francisca & Angelina Foundation</div>
              <div className="text-sm text-background/80">Empowering Youth, Building Futures</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? "text-primary bg-background/10"
                    : "text-background/80 hover:text-primary hover:bg-background/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/donate">
              <Button variant="cta" size="sm" className="ml-4 text-sm font-semibold">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-background/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-background/10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? "text-primary bg-background/10"
                      : "text-background/80 hover:text-primary hover:bg-background/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/donate" onClick={() => setIsOpen(false)} className="px-4 py-2">
                <Button variant="cta" size="sm" className="w-full text-sm font-semibold">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
