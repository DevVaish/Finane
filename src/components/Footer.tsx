import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-primary rounded-full" />
                <div className="absolute inset-[3px] bg-foreground rounded-full flex items-center justify-center">
                  <span className="text-primary font-display font-bold text-lg">A</span>
                </div>
              </div>
              <span className="font-display text-xl font-semibold text-card">ccruefy</span>
            </Link>
            <p className="text-card/70 text-sm leading-relaxed">
              Transforming numbers into financial success with expert-led strategies and unmatched precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Pricing", path: "/pricing" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-card/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Bookkeeping & Reporting",
                "Cash Flow Management",
                "Tax Planning",
                "Payroll Solutions",
                "Financial Statements",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-card/70 text-sm hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-card/70 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>441-9189 x9761</span>
              </li>
              <li className="flex items-center gap-3 text-card/70 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@accruefy.com</span>
              </li>
              <li className="flex items-start gap-3 text-card/70 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>123 Financial District<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/50 text-sm">
              © {new Date().getFullYear()} Accruefy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/contact" className="text-card/50 text-sm hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-card/50 text-sm hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
