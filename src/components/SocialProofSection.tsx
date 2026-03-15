import { motion } from "framer-motion";
import { Users, Globe, Cpu, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Developers" },
  { icon: Globe, value: "99.9%", label: "Uptime" },
  { icon: Cpu, value: "6+", label: "AI Models" },
  { icon: Zap, value: "<2s", label: "Avg Response" },
];

const SocialProofSection = () => (
  <section className="py-16 border-y border-border bg-secondary/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm font-medium text-muted-foreground mb-10 tracking-wide uppercase"
      >
        Trusted by developers building modern AI applications
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-3">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-foreground">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
