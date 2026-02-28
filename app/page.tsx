import Hero from "@/components/hero";
import VideoSection from "@/components/video-section";
import PainPoints from "@/components/pain-points";
import AuditChat from "@/components/audit-chat";
import ServicesPreview from "@/components/services-preview";
import HowItWorksSection from "@/components/how-it-works-section";
import ROICalculator from "@/components/roi-calculator";
import Testimonials from "@/components/testimonials";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <PainPoints />
      <AuditChat />
      <ServicesPreview />
      <HowItWorksSection />
      <ROICalculator />
      <Testimonials />
      <CTASection />
    </>
  );
}
