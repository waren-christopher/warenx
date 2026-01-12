import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, FileCheck, Users, Landmark } from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description:
      "All operations conducted through FIU-registered exchanges, adhering to applicable KYC regulations as per Indian law.",
  },
  {
    icon: Users,
    title: "Verified Partnerships",
    description:
      "We maintain verified and compliant trading accounts with FIU-registered Virtual Digital Asset Service Providers (VASPs).",
  },
  {
    icon: Landmark,
    title: "Bank Integration",
    description:
      "All transactions are routed through approved exchanges and registered bank accounts for complete transparency.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-royal font-semibold text-sm uppercase tracking-wider mb-4">
              About Our Company
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Leading{" "}
              <span className="bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
                Digital Asset
              </span>{" "}
              Trading Solutions
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Warenx Cashflow Private Limited is engaged in the business of
              Virtual Digital Asset (VDA) trading and P2P conversion services. We
              operate through FIU-registered exchanges and follow all applicable
              compliance and KYC regulations as per Indian law.
            </p>
            <p className="text-muted-foreground mb-8">
              Our core business activity involves P2P (peer-to-peer) selling of 
              digital assets through FIU-registered exchanges. All transactions 
              are transparent, traceable, compliant, and routed only through 
              approved exchanges and registered bank accounts.
            </p>

            <div className="space-y-4">
              {[
                "Transparent and traceable transactions",
                "Complete regulatory compliance",
                "Secure bank settlements",
                "Professional asset management",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="card-elevated p-6 hover:shadow-lg transition-all duration-300 border border-border/50"
              >
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-royal to-sky flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
