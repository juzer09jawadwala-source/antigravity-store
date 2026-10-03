import Header from "../components/Header";
import Hero from "../components/sections/Hero";
import KeyHighlights from "../components/sections/KeyHighlights";
import SiriAiSection from "../components/sections/SiriAiSection";
import UltimateUpgrade from "../components/sections/UltimateUpgrade";
import VaporChamberSection from "../components/sections/VaporChamberSection";
import ProductShowcase from "../components/sections/ProductShowcase";
import FullWidthImageSection from "../components/sections/FullWidthImageSection";
import OrderSummary from "../components/sections/OrderSummary";
import WhatsInTheBox from "../components/sections/WhatsInTheBox";
import TrustHub from "../components/sections/TrustHub";
import IncludedServices from "../components/sections/IncludedServices";
import AiMatchmaker from "../components/sections/AiMatchmaker";
import IPhoneCarouselSection from "../components/sections/IPhoneCarouselSection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#00D4FF]/30 text-white font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <SiriAiSection />
      <KeyHighlights />
      <UltimateUpgrade />
      <VaporChamberSection />
      <ProductShowcase />
      <FullWidthImageSection />
      <OrderSummary />
      <WhatsInTheBox />
      <TrustHub />
      <IncludedServices />
      <AiMatchmaker />
      <IPhoneCarouselSection />
      <Footer />
    </main>
  );
}
