import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import VideoSection from "../components/VideoSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";
import PainVideosSection from "../components/PainVideosSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <VideoSection />
      <PainVideosSection />
      <Testimonials />
      <PricingSection />
      <Footer />
    </>
  );
}