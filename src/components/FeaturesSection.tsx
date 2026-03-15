import { motion } from "framer-motion";
import { Video, Image, Music, MessageSquare, ArrowRight } from "lucide-react";

import featureVideo from "@/assets/feature-video-new.jpg";
import featureImage from "@/assets/feature-image-new.jpg";
import featureMusic from "@/assets/feature-music-new.jpg";
import featureChat from "@/assets/feature-chat-new.jpg";

const CTA_LINK = "https://kie.ai?ref=1b1f37bc2dbdda958f9c78ee38171437";

const features = [
  {
    icon: Video,
    title: "AI Video Generation API",
    desc: "Create stunning videos from text prompts. Generate cinematic content with synchronized audio and smooth motion.",
    tag: "Video",
    image: featureVideo,
  },
  {
    icon: Image,
    title: "AI Image Generation API",
    desc: "Generate high-quality images with AI models. From photorealistic renders to creative illustrations.",
    tag: "Image",
    image: featureImage,
  },
  {
    icon: Music,
    title: "AI Music Generation API",
    desc: "Produce music and soundtracks with AI. Support for multiple genres, vocals, and instrumentals.",
    tag: "Music",
    image: featureMusic,
  },
  {
    icon: MessageSquare,
    title: "AI Chat API",
    desc: "Build chatbots and AI assistants. Power conversational AI with advanced language models.",
    tag: "Chat",
    image: featureChat,
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Powerful AI APIs
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Everything you need to build AI-powered applications, all accessible through a single platform.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {features.map((f, i) => (
          <motion.a
            key={f.title}
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={f.image}
                alt={f.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-0.5">
                  {f.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                Get Started <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
