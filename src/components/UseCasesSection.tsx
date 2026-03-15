import { motion } from "framer-motion";
import { Play, Palette, Layers, Bot } from "lucide-react";
import useCasesImage from "@/assets/use-cases.jpg";

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

      <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={useCasesImage}
            alt="AI use cases - video, content, SaaS, automation"
            className="w-full rounded-xl border border-border shadow-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-background p-5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <uc.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground">{uc.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default UseCasesSection;
