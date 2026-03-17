import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const faqs = [
  { q: "What is Kie.ai and how does it work?", a: "Kie.ai is an AI platform providing advanced AI APIs designed for developers and businesses. It offers powerful AI APIs for text generation, music creation, video generation and more." },
  { q: "Does Kie.ai offer a free trial for new users?", a: "Yes, Kie.ai offers a free trial that allows you to explore the capabilities of our AI APIs before committing to any paid plan." },
  { q: "What is the Kie.ai pricing model?", a: "Kie.ai provides flexible pricing with a point-based system, making it cost-effective for startups. Detailed pricing plans are available on our website." },
  { q: "What AI APIs does Kie.ai provide?", a: "Kie.ai provides advanced AI model APIs, including Veo 3.1 for video generation, Runway API for video creation, Suno API for music generation, and 4o Image API, Flux.1 Kontext API for image generation." },
  { q: "Is there API documentation available?", a: "Yes, Kie.ai provides comprehensive API documentation that covers integration steps, configuration details, and best practices." },
  { q: "How do I integrate Kie.ai APIs into my project?", a: "Simply sign up for an account, obtain your API key, and follow the API documentation for configuration. Contact support@kie.ai for assistance." },
];

const FAQSection = () => (
  <section className="py-24 sm:py-32 bg-secondary">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-3xl sm:text-4xl font-black text-center text-foreground tracking-tight"
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="mt-12"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-background px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
