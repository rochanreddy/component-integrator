import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/rtsgs.png" 
                alt="Red Tigers Security Services Logo" 
                className="h-32 sm:h-40 w-auto object-contain"
              />
            </div>
            <p className="text-sm opacity-60">
              Professional security services for all industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm opacity-60 hover:text-primary hover:opacity-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              {[
                { label: "Industrial Security", path: "/services/industrial" },
                { label: "Corporate Security", path: "/services/corporate" },
                { label: "Hospital Security", path: "/services/hospital" },
                { label: "Retail Security", path: "/services/retail" },
                { label: "Event Security", path: "/services/event" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm opacity-60 hover:text-primary hover:opacity-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm opacity-60">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <div className="space-y-1">
                  <div>8977009403</div>
                  <div>8977009402</div>
                  <div>8977009404</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="break-all sm:break-normal">info@rtsgs.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>Old Bowenpally, Chinna thokata, Opp Ganshyam super market, Old Bowenpally, Secunderabad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>&copy; 2026 Red Tigers Security Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
