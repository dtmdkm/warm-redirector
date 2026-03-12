import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA_LINK = "https://kie.ai?ref=7aeab286e5dd98f649125ca37e966864";
const ease = [0.25, 0.1, 0.25, 1] as const;

const models = [
  { name: "Google Veo 3.1", category: "Video Generation", desc: "Cinematic motion, strong prompt adherence, and synchronized audio in native 1080p." },
  { name: "Runway Aleph", category: "Video Generation", desc: "Multi-task editing — add/remove objects, relight footage, change angles via text prompts." },
  { name: "Suno API", category: "Music Generation", desc: "Realistic vocals, precise lyric-to-melody alignment, and high-quality multi-genre production." },
  { name: "4o Image API", category: "Image Generation", desc: "High-fidelity visuals with accurate text rendering and flexible style control." },
  { name: "Flux.1 Kontext", category: "Image Generation", desc: "Vivid, coherent scenes with strong subject consistency for detailed outputs." },
  { name: "Nano Banana", category: "Image Generation", desc: "Fast and precise AI image generation with realistic physics simulation." },
];

const ModelsSection = () => (
  <section className="py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-3xl sm:text-4xl font-black text-center text-foreground tracking-tight"
      >
        Popular AI Models You Can Access Today
      </motion.h2>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((m, i) => (
          <motion.a
            key={m.name}
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07, ease }}
            className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-lg hover:border-accent/30"
          >
            <span className="inline-block text-xs font-semibold text-accent bg-accent/10 rounded-full px-3 py-1">
              {m.category}
            </span>
            <h3 className="mt-4 text-lg font-bold text-foreground">{m.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all duration-200">
              Learn More <ArrowRight className="w-4 h-4" />
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease }}
        className="mt-12 text-center"
      >
        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold border border-border bg-background text-foreground transition-all duration-200 hover:bg-secondary active:scale-[0.98] gap-2"
        >
          Explore All Models <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default ModelsSection;
