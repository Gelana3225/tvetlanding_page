import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import AboutSection from "./components/sections/AboutSection";
import MissionVisionSection from "./components/sections/MissionVisionSection";
import JourneyTimelineSection from "./components/sections/JourneyTimelineSection";
import PresidentMessageSection from "./components/sections/PresidentMessageSection";
import LeadershipSection from "./components/sections/LeadershipSection";
import MottoSection from "./components/sections/MottoSection";
import ProgramsSection from "./components/sections/ProgramsSection";
import GallerySection from "./components/sections/GallerySection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-surface text-on-surface font-manrope selection:bg-primary/20 selection:text-primary scroll-smooth min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <MissionVisionSection />
        <JourneyTimelineSection />
        <PresidentMessageSection />
        <LeadershipSection />
        <MottoSection />
        <ProgramsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
