import { motion } from "framer-motion";
import { Video, Image, Music, MessageSquare, ArrowRight } from "lucide-react";

import featureVideo from "@/assets/feature-video.png";
import featureImage from "@/assets/feature-image.png";
import featureMusic from "@/assets/feature-music.jpg";
import featureChat from "@/assets/feature-chat.jpg";

const CTA_LINK = "https://kie.ai?ref=1b1f37bc2dbdda958f9c78ee38171437";
const ease = [0.25, 0.1, 0.25, 1] as const;

const features = [
  {
    icon: Video,
    title: "AI Video Generation APIs",
    desc: "Create high-quality videos with Veo 3.1, Veo 3.1 Fast, and Runway Aleph. Synchronized audio, smooth motion, and realistic scenes.",
    image: featureVideo,
  },
  {
    icon: Image,
    title: "AI Image Generation APIs",
    desc: "Produce high-quality, style-rich images with 4o Image API, Flux Kontext API, and Nano Banana API.",
    image: featureImage,
  },
  {
    icon: Music,
    title: "AI Music Generation APIs",
    desc: "Create high-quality music with Suno API, supporting V3.5, V4, V4.5, and V4.5 Plus models. Tracks up to 8 minutes long.",
    image: featureMusic,
  },
  {
    icon: MessageSquare,
    title: "LLM & AI Chat APIs",
    desc: "Power your applications with advanced LLM and AI Chat APIs for natural conversations, coding help, and knowledge-based responses.",
    image: featureChat,
  },
];

const FeaturesSection = () => (
  <section className="py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-3xl sm:text-4xl font-black text-center text-foreground tracking-tight"
      >
        AI APIs for Any Project
      </motion.h2>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {features.map((f, i) => (
          <motion.a
            key={f.title}
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
            className="group relative rounded-2xl border border-border bg-background overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/30"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={f.image}
                alt={f.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all duration-200">
                Get API Key <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
