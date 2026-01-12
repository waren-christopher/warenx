import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  UserCheck,
  ArrowDown,
  ArrowRight,
  Building,
  Repeat,
  Landmark,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "FIU-Compliant Account Setup",
    description:
      "The company maintains verified and compliant trading accounts with FIU-registered Virtual Digital Asset Service Providers (VASPs).",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Building,
    title: "Digital Asset Purchase",
    description:
      "Using the deposited INR balance, purchase Virtual Digital Assets from an FIU Registered Exchange partner.",
    color: "from-royal to-sky",
  },
  {
    icon: Repeat,
    title: "Asset Transfer & Trading",
    description:
      "The purchased digital assets are transferred and traded through our partner FIU Registered Exchange network.",
    color: "from-gold to-gold-light",
  },
  {
    icon: ArrowRight,
    title: "Digital Asset Sale",
    description:
      "The digital assets are sold on another FIU-registered exchange platform to convert back into INR.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Landmark,
    title: "INR Settlement",
    description:
      "The converted INR amount is transferred directly from exchange to the company's registered bank account.",
    color: "from-purple-500 to-indigo-500",
  },
];

const ProcessFlow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-royal font-semibold text-sm uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Business{" "}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Process Flow
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A transparent, step-by-step process ensuring complete compliance and
            traceability at every stage.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal via-gold to-success hidden md:block transform -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div
                className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
              >
                <div className="card-elevated p-6 border border-border/50 inline-block w-full hover:shadow-lg transition-shadow duration-300">
                  <div
                    className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Step Number */}
              <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-navy to-navy-light border-4 border-background items-center justify-center z-10 flex-shrink-0">
                <span className="text-white font-bold text-lg">
                  {index + 1}
                </span>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}

          {/* Arrow indicators for mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 flex flex-col justify-between py-16">
            {steps.slice(0, -1).map((_, index) => (
              <ArrowDown
                key={index}
                className="w-5 h-5 text-royal transform -translate-x-1/2 ml-0.5"
              />
            ))}
          </div>
        </div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-8 text-center">
            <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Fully Compliant Operations
            </h3>
            <p className="text-white/80">
              Shiloh Digital Private Limited is a compliant VDA trading company
              that operates through FIU-registered exchanges. All transactions
              are transparent, traceable, and routed only through approved
              exchanges and registered bank accounts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlow;
