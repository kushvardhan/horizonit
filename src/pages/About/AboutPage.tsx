import { InteractiveBg } from "./interactive-bg"; 
import { HeroSection } from "./hero-section"; 
import { StatsSection } from "./stats-section"; 
import { WhoSection } from "./who-section";
import { ServicesSection } from "./services-section";
import { ValuesSection } from "./values-section"; 
import { TimelineSection } from "./timeline-section"; 
import { LeadershipSection } from "./leadership-section"; 
import { TechSection } from "./tech-section"; 
import { RecognitionSection } from "./recognition-section"; 
import { CtaSection } from "./cta-section"; 

export default function AboutPage() {
  return (
    <>
      <InteractiveBg />
      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <WhoSection />
        <ServicesSection />
        <ValuesSection />
        <TimelineSection />
        <LeadershipSection />
        <TechSection />
        <RecognitionSection />
        <CtaSection />
      </main>
    </>
  );
}
