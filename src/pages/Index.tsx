import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ModelsSection from "@/components/ModelsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="bg-background text-foreground">
    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <ModelsSection />
      <FAQSection />
      <CTASection />
    </main>
    <FooterSection />
  </div>
);

export default Index;
