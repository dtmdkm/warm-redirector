import { motion } from "framer-motion";
import { DollarSign, Play, Code2, Zap, Shield, Headphones } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const reasons = [
  { icon: DollarSign, title: "Affordable Pricing", desc: "Flexible credit-based system — pay only for what you use." },
  { icon: Play, title: "Free Trial in Playground", desc: "Test any API for free before integration." },
  { icon: Code2, title: "Simple Integration", desc: "Clear documentation and step-by-step examples. Add AI in minutes." },
  { icon: Zap, title: "Fast & Scalable", desc: "99.9% uptime, low latency, high concurrency handling." },
  { icon: Shield, title: "Robust Data Security", desc: "Encryption technology ensures your data is safe and protected." },
  { icon: Headphones, title: "24/7 Support", desc: "Professional technical team always available to assist." },
];

const WhyChooseSection = () => (
  <section className="py-24 sm:py-32 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-3xl sm:text-4xl font-black text-center text-foreground tracking-tight"
      >
        Why Choose Kie.ai
      </motion.h2>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease }}
            className="rounded-2xl bg-background p-6 border border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <r.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
