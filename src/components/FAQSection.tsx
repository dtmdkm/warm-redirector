import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is Kie Signup?", a: "Kie Signup is an AI developer platform that gives you access to powerful APIs for video generation, image creation, music production, and conversational AI — all in one place." },
  { q: "Is there a free tier?", a: "Yes! You can create a free account and start exploring our AI APIs immediately. No credit card required." },
  { q: "What AI models are available?", a: "We offer APIs for video generation (Veo 3.1, Runway), image generation (4o Image, Flux Kontext), music generation (Suno), and chat/LLM models." },
  { q: "How do I integrate the APIs?", a: "Sign up, get your API key, and follow our documentation. Most integrations take less than 5 minutes." },
  { q: "What kind of support do you offer?", a: "We provide 24/7 developer support, comprehensive documentation, and code examples for all our APIs." },
];

const FAQSection = () => (
  <section id="faq" className="py-24 sm:py-32 bg-secondary/50">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
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
