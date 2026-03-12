import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA_LINK = "https://kie.ai?ref=7aeab286e5dd98f649125ca37e966864";
const ease = [0.25, 0.1, 0.25, 1] as const;

const CTASection = () => (
  <section className="py-24 sm:py-32">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-tight"
      >
        Start Building with the World's
        <br />
        <span className="text-accent">Top AI Models</span> Today
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
      >
        Access video, image, music, and chat APIs in one platform — faster, more affordable, and developer-friendly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
        className="mt-10"
      >
        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full px-10 py-5 text-lg font-bold bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.08),_0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),_0_4px_12px_rgba(0,0,0,0.12)] active:scale-[0.98] gap-2"
        >
          TRY KIE.AI NOW
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
