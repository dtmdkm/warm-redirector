import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="bg-background text-foreground">
    <Header />
    <main>
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <UseCasesSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
    </main>
    <FooterSection />
  </div>
);

export default Index;
