import { motion } from "framer-motion";
import { Shield, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center">
                  <span className="text-navy font-bold text-2xl">S</span>
                </div>
                <div>
                  <span className="text-white font-bold text-xl block leading-tight">
                    Shiloh Digital
                  </span>
                  <span className="text-gold text-sm font-medium tracking-wider">
                    PRIVATE LIMITED
                  </span>
                </div>
              </div>
              <p className="text-white/70 mb-6 max-w-md">
                A compliant VDA trading company that operates through
                FIU-registered exchanges. All transactions are transparent,
                traceable, and routed only through approved exchanges and
                registered bank accounts.
              </p>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Shield className="w-4 h-4 text-gold" />
                <span>FIU Registered | KYC Compliant</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About Us", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Process", href: "#process" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  "VDA Trading",
                  "INR Conversion",
                  "Compliant Operations",
                  "Asset Management",
                  "Exchange Integration",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-white/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Shiloh Digital Private Limited. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-gold text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-gold text-sm transition-colors"
              >
                Terms of Service
              </a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-royal to-sky flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
