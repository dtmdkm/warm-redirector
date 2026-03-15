import { motion } from "framer-motion";
import { Play, Palette, Layers, Bot } from "lucide-react";

const useCases = [
  { icon: Play, title: "AI Video Generator Apps", desc: "Build apps that create marketing videos, social media content, and cinematic clips from text." },
  { icon: Palette, title: "AI Content Tools", desc: "Power content creation platforms with AI-generated images, copy, and multimedia assets." },
  { icon: Layers, title: "AI SaaS Platforms", desc: "Launch SaaS products with built-in AI capabilities — from generation to analysis." },
  { icon: Bot, title: "Automation Tools", desc: "Automate workflows with AI — from data processing to intelligent content pipelines." },
];

const UseCasesSection = () => (
  <section id="use-cases" className="py-24 sm:py-32 bg-secondary/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          What You Can Build
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          From startups to enterprises, developers use our APIs to power a wide range of AI applications.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {useCases.map((uc, i) => (
          <motion.div
            key={uc.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl border border-border bg-background p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <uc.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-base font-bold text-foreground">{uc.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
