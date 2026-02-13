import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import molLogo from "@/assets/mol-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-mol-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Address */}
          <div className="space-y-4">
            <img src={molLogo} alt="MOL Indonesia" className="h-12 w-auto bg-card rounded p-1" />
            <div className="flex items-start gap-3 text-sm opacity-80">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" />
              <p>
                Menara Astra 30th Floor<br />
                Jl. Jenderal Sudirman, Karet Tengsin,<br />
                Kecamatan Tanah Abang, Jakarta Selatan<br />
                DKI Jakarta 10250
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm opacity-80">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
              <Link to="/corporate-profile" className="hover:opacity-100 transition-opacity">Corporate Profile</Link>
              <Link to="/career" className="hover:opacity-100 transition-opacity">Career</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>(62-21) 8665 6855</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:IDPCC@molgroup.com" className="hover:opacity-100">IDPCC@molgroup.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-4 text-center text-xs opacity-60">
          Copyright © 2026 MOL INDONESIA | Powered by MOL INDONESIA
        </div>
      </div>
    </footer>
  );
};

export default Footer;
