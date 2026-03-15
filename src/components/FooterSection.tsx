const CTA_LINK = "https://kie.ai?ref=1b1f37bc2dbdda958f9c78ee38171437";

const links = [
  { label: "About", href: CTA_LINK, external: true },
  { label: "Contact", href: CTA_LINK, external: true },
  { label: "Privacy Policy", href: "/privacy-policy", external: false },
  { label: "Terms of Service", href: CTA_LINK, external: true },
];

const FooterSection = () => (
  <footer className="border-t border-border">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-extrabold text-xs">K</span>
          </div>
          <span className="text-sm font-semibold text-foreground">Kie Signup</span>
        </div>

        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Kie Signup. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
