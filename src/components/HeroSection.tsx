import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

const CTA_LINK = "https://kie.ai?ref=1b1f37bc2dbdda958f9c78ee38171437";

const HeroSection = () => (
  <section className="relative min-h-svh flex items-center pt-16 overflow-hidden">
    {/* Gradient orbs */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
    </div>

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
            className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            Access powerful APIs for video generation, image creation, music generation and conversational AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
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

        {/* Right — Code preview */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="rounded-xl border border-border bg-card shadow-2xl shadow-primary/5 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              </div>
              <div className="flex items-center gap-1.5 ml-2 text-xs text-muted-foreground">
                <Terminal className="w-3.5 h-3.5" />
                api-example.js
              </div>
            </div>
            <div className="p-6 text-sm font-mono leading-7">
              <div className="text-muted-foreground">
                <span className="text-primary">const</span>{" "}
                <span className="text-foreground">response</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-primary">await</span>{" "}
                <span className="text-foreground">fetch</span>
                <span className="text-muted-foreground">(</span>
              </div>
              <div className="pl-4 text-emerald-600 dark:text-emerald-400">"https://api.kie.ai/v1/generate"</div>
              <div className="text-muted-foreground">,{"{"}</div>
              <div className="pl-4">
                <span className="text-foreground">method</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-emerald-600 dark:text-emerald-400">"POST"</span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div className="pl-4">
                <span className="text-foreground">headers</span>
                <span className="text-muted-foreground">: {"{"}</span>
              </div>
              <div className="pl-8">
                <span className="text-emerald-600 dark:text-emerald-400">"Authorization"</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-emerald-600 dark:text-emerald-400">`Bearer $&#123;API_KEY&#125;`</span>
              </div>
              <div className="pl-4 text-muted-foreground">{"}"}</div>
              <div className="text-muted-foreground">{"}"});</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
