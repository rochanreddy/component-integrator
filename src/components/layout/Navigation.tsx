import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Industrial Security", path: "/services/industrial" },
      { label: "Corporate Security", path: "/services/corporate" },
      { label: "Hospital Security", path: "/services/hospital" },
      { label: "Retail Security", path: "/services/retail" },
      { label: "Event Security", path: "/services/event" },
    ],
  },
  { label: "Training Institute", path: "/training" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-foreground">Red Tigers</div>
              <div className="text-xs text-muted-foreground">Security Services</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="px-4 py-2 text-foreground hover:text-primary transition-colors flex items-center space-x-1">
                    <span>{link.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-lg shadow-lg py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setServicesOpen(false)}
                          className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 transition-colors",
                    location.pathname === link.path
                      ? "text-primary font-medium"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <span>Get A Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.children ? (
                  <>
                    <div className="w-full text-left px-4 py-3 text-foreground font-medium">
                      {link.label}
                    </div>
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors text-center"
            >
              Get A Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
