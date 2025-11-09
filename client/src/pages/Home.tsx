import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PowerBISection from "@/components/PowerBISection";
import ChatbotsSection from "@/components/ChatbotsSection";
import VoiceAISection from "@/components/VoiceAISection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <Hero />
        
        {/* Service sections will be added here */}
        <PowerBISection />
        
        <ChatbotsSection />
        
        <VoiceAISection />
      </main>
      <Footer />
    </div>
  );
}
