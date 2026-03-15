const sections = [
  {
    title: "1. Introduction",
    content:
      "Kie Signup (kie-signup.online) is a website that provides information about an AI developer platform and directs users to the official platform at Kie.ai to create an account. This Privacy Policy explains how we collect, use, and protect information when you visit our website.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We may collect limited, non-sensitive information when you visit our website, including:",
    list: [
      "Basic analytics data such as page views, browser type, device type, and approximate geographic location",
      "Cookies and similar tracking technologies",
      "Referral tracking parameters used to identify the source of your visit",
    ],
    after:
      "We do not collect, store, or process any sensitive personal data such as names, email addresses, passwords, or payment information on this website. Account creation and data collection for the AI platform occur on Kie.ai, which is governed by its own privacy policy.",
  },
  {
    title: "3. Cookies and Tracking",
    content:
      "Our website may use cookies and similar technologies for the following purposes:",
    list: [
      "Website analytics — to understand how visitors interact with our site and improve user experience",
      "Advertising performance tracking — to measure the effectiveness of advertising campaigns",
      "Referral attribution — to track which sources bring visitors to our website",
    ],
    after:
      'You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect your browsing experience. By continuing to use this website, you consent to the use of cookies as described in this policy.',
  },
  {
    title: "4. Third-Party Links",
    content:
      "This website contains links to Kie.ai, a third-party platform where users can create accounts and access AI developer tools. When you click on these links, you will be redirected to the Kie.ai platform. Please review the privacy policy of Kie.ai for information about how your data is handled on that platform. We are not responsible for the privacy practices or content of third-party websites.",
  },
  {
    title: "5. Data Security",
    content:
      "We implement reasonable technical and organizational security measures to protect any information collected through our website. However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.",
  },
  {
    title: "6. Changes to This Policy",
    content:
      'We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.',
  },
  {
    title: "7. Contact Information",
    content:
      "If you have any questions or concerns about this Privacy Policy, please contact us at:",
    after: "Email: contact@kie-signup.online",
  },
];

const PrivacyPolicy = () => (
  <div className="bg-background text-foreground min-h-svh">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        ← Back to Home
      </a>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Last Updated: March 15, 2026
      </p>

      <div className="mt-10 space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-xl font-bold text-foreground mb-3">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.content}</p>
            {s.list && (
              <ul className="mt-3 space-y-2 list-disc list-inside text-muted-foreground leading-relaxed">
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {s.after && (
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.after}</p>
            )}
          </section>
        ))}
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
