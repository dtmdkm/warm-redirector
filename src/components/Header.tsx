import { motion } from "framer-motion";

const CTA_LINK = "https://kie.ai?ref=7aeab286e5dd98f649125ca37e966864";

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16 sm:h-20">
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-black text-sm">K</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">KIE API</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["API Market", "Pricing", "AI Video API", "AI Image API", "Updates"].map((item) => (
            <a
              key={item}
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-sm font-bold bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.08),_0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),_0_4px_12px_rgba(0,0,0,0.12)] active:scale-[0.98]"
        >
          Get Started
        </a>
      </div>
    </div>
  </motion.header>
);

export default Header;
