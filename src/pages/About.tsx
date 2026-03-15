import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Video, Image, Music, MessageSquare, Code2, Rocket, Cpu, Layers } from "lucide-react";

const apis = [
  { icon: Video, label: "AI Video Generation" },
  { icon: Image, label: "AI Image Generation" },
  { icon: Music, label: "AI Music Generation" },
  { icon: MessageSquare, label: "AI Chat & LLM" },
];

const audience = [
  { icon: Code2, title: "AI Developers", desc: "Engineers building AI-powered features and products." },
  { icon: Rocket, title: "Startups Building AI SaaS", desc: "Teams shipping AI products fast with reliable APIs." },
  { icon: Cpu, title: "Software Engineers", desc: "Developers integrating AI into existing applications." },
  { icon: Layers, title: "Product Builders", desc: "Creators turning ideas into AI-driven experiences." },
];

const About = () => (
  <div className="bg-background text-foreground min-h-svh">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        ← Back to Home
      </Link>

      {/* About */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          About Kie Signup
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Kie Signup is a resource website that provides information about AI developer tools and helps developers access powerful APIs for building modern AI applications. We connect developers with the tools they need to create, innovate, and ship faster.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Through our platform, developers can discover and access APIs for:
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {apis.map((a) => (
            <div key={a.label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3.5">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <a.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{a.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-14"
      >
        <h2 className="text-xl font-bold text-foreground mb-3">Our Mission</h2>
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to help developers discover powerful AI tools and build innovative applications faster. We believe that access to cutting-edge AI technology should be simple, affordable, and well-documented — so every developer can focus on building great products.
          </p>
        </div>
      </motion.div>

      {/* Who This Platform Is For */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-14"
      >
        <h2 className="text-xl font-bold text-foreground mb-5">Who This Platform Is For</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {audience.map((a) => (
            <div key={a.title} className="rounded-xl border border-border bg-card p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <a.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground">{a.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-14"
      >
        <h2 className="text-xl font-bold text-foreground mb-3">Disclaimer</h2>
        <p className="text-muted-foreground leading-relaxed">
          This website may include referral links to the official AI platform (Kie.ai). When you click on these links and create an account, we may receive a referral credit. This does not affect your experience or the price of any services. We only recommend tools and platforms that we believe provide genuine value to developers.
        </p>
      </motion.div>
    </div>
  </div>
);

export default About;
