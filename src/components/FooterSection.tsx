const CTA_LINK = "https://kie.ai?ref=7aeab286e5dd98f649125ca37e966864";

const FooterSection = () => (
  <footer className="border-t border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Kie.ai — All rights reserved.</p>
        <div className="flex items-center gap-6">
          {["API Market", "Pricing", "Documentation", "Get Started"].map((item) => (
            <a
              key={item}
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
