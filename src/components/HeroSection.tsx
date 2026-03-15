import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const CTA_LINK = "https://kie.ai?ref=1b1f37bc2dbdda958f9c78ee38171437";

const HeroSection = () => (
  <section className="relative min-h-svh flex items-center pt-16 overflow-hidden">
    {/* Gradient orbs */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
    </div>

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
      {/* Text content */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Now available — Start building for free
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground"
        >
          Build AI Applications{" "}
          <span className="text-primary">Faster</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Access powerful APIs for video generation, image creation, music generation and conversational AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Get Free API Access
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold border border-border bg-background text-foreground hover:bg-secondary transition-colors"
          >
            View Documentation
          </a>
        </motion.div>
      </div>

      {/* Dashboard image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-16"
      >
        <div className="rounded-xl border border-border bg-card shadow-2xl shadow-primary/5 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
            </div>
            <div className="flex items-center gap-1.5 ml-2 text-xs text-muted-foreground">
              <Terminal className="w-3.5 h-3.5" />
              dashboard.kie.ai
            </div>
          </div>
          <img
            src={heroDashboard}
            alt="Kie AI API Dashboard - Analytics and usage overview"
            className="w-full"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
