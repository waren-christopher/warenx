import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRightLeft,
  Shield,
  Wallet,
  TrendingUp,
  Globe,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: ArrowRightLeft,
    title: "VDA Trading",
    description:
      "Professional Virtual Digital Asset trading services through FIU-registered exchanges with complete compliance.",
    gradient: "from-royal to-sky",
  },
  {
    icon: Wallet,
    title: "INR Conversion",
    description:
      "Seamless conversion between INR and digital assets with transparent pricing and direct bank settlements.",
    gradient: "from-gold to-gold-light",
  },
  {
    icon: Shield,
    title: "Compliant Operations",
    description:
      "All operations adhere to FIU guidelines and KYC regulations ensuring secure and lawful transactions.",
    gradient: "from-success to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Asset Management",
    description:
      "Strategic digital asset portfolio management with focus on security and regulatory compliance.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Globe,
    title: "Exchange Integration",
    description:
      "Integrated with multiple FIU-registered exchanges for optimal trading opportunities and liquidity.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Complete documentation and reporting for all transactions to meet regulatory and audit requirements.",
    gradient: "from-teal-500 to-cyan-500",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="section-padding bg-secondary/30"
      ref={ref}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-royal font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Digital Asset{" "}
            <span className="bg-gradient-to-r from-royal to-sky bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end VDA trading and conversion services with a
            focus on compliance, transparency, and security.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="card-elevated h-full p-8 border border-border/50 hover:border-royal/30 transition-all duration-300 hover:-translate-y-1">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
