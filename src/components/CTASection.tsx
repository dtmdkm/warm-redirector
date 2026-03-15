import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA_LINK = "https://kie.ai?ref=1b1f37bc2dbdda958f9c78ee38171437";

const CTASection = () => (
  <section className="py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl border border-border bg-card p-12 sm:p-16 text-center overflow-hidden"
      >
        {/* Subtle gradient bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Start Building with AI Today
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Create your free account and get instant access to powerful AI APIs. No credit card required.
          </p>
          <div className="mt-8">
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Create Free Account
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
