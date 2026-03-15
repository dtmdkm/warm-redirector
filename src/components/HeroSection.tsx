import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA_LINK = "https://kie.ai?ref=1b1f37bc2dbdda958f9c78ee38171437";
const ease = [0.25, 0.1, 0.25, 1] as const;

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "25.2s", label: "Response Time" },
  { value: "24/7", label: "Support" },
  { value: "#1", label: "Data Security" },
];

const HeroSection = () => (
  <section className="relative min-h-svh flex items-center pt-20 overflow-hidden">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="text-[clamp(2.2rem,7vw,5rem)] font-black leading-[1.1] tracking-tight text-foreground"
        style={{ textWrap: "balance" } as React.CSSProperties}
      >
        Access the Best Video, Image
        <br />
        <span className="text-accent">& Music Models</span> in One API
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
        style={{ textWrap: "pretty" } as React.CSSProperties}
      >
        All your AI APIs for video, image, music, and chat — lower cost than Fal.ai, fast, and developer-friendly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.08),_0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),_0_4px_12px_rgba(0,0,0,0.12)] active:scale-[0.98] gap-2"
        >
          Explore AI API
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold border border-border bg-background text-foreground transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-secondary active:scale-[0.98] gap-2"
        >
          API Documentation
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-foreground">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
