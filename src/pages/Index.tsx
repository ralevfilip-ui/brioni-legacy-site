import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import MenuSection from "@/components/MenuSection";
import ParkSection from "@/components/ParkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HeritageSection />
      <MenuSection />
      <ParkSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
