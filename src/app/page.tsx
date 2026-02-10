import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import QuickFetchFeatures from "@/components/landing/QuickFetchFeatures";
import HowItWorks from "@/components/landing/HowItWorks";
import DownloadApp from "@/components/landing/DownloadApp";
import Footer from "@/components/landing/Footer";


export default function LandingPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <QuickFetchFeatures/>
      <HowItWorks/>
      <DownloadApp />
      <Footer />
    </main>
  );
}