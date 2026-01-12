import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 hero">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-custom px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-card/20 rounded-full px-4 py-2 mb-8"
          >
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-foreground/90 text-sm font-medium">
              Operating via FIU-Registered Exchanges
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Trusted Digital Asset{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Trading & Conversion
            </span>{" "}
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
          >
            Warenx Cashflow Private Limited provides secure, transparent, and regulatory-compliant Virtual Digital Asset services with complete adherence to Indian financial regulations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-primary to-secondary text-foreground hover:opacity-90 font-semibold px-8 py-6 text-lg rounded-xl group"
            >
              Partner With Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={() => scrollToSection("#process")}
              variant="outline"
              className="border-card/30 text-foreground hover:bg-card/10 px-8 py-6 text-lg rounded-xl"
            >
              Learn Our Process
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Shield, title: "FIU-Compliant", desc: "Via registered exchanges" },
              { icon: TrendingUp, title: "Transparent Trading", desc: "Traceable transactions" },
              { icon: Building, title: "Bank Integrated", desc: "Direct settlement to accounts" },
            ].map((item, index) => (
              <div key={index} className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-left">
                  <h3 className="text-foreground font-semibold">{item.title}</h3>
                  <p className="text-foreground/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
