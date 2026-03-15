import { motion } from "framer-motion";
import { Code2, Zap, Boxes, TrendingUp, Check } from "lucide-react";

const benefits = [
  { icon: Code2, title: "Simple API Integration", desc: "Get started in minutes with clear documentation and SDKs." },
  { icon: Zap, title: "Fast AI Infrastructure", desc: "Low latency responses powered by optimized GPU infrastructure." },
  { icon: Boxes, title: "Multiple AI Models", desc: "Access video, image, music, and chat models from one platform." },
  { icon: TrendingUp, title: "Built for Scale", desc: "From prototype to production — infrastructure that grows with you." },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Why Developers Choose Us
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md">
            We built the platform we wished existed — fast, simple, and designed for developers who ship.
          </p>

          <div className="mt-8 space-y-3">
            {["No vendor lock-in", "Pay-as-you-go pricing", "99.9% uptime SLA", "24/7 developer support"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              )
            )}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
