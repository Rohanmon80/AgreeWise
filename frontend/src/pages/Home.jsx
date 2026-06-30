import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import BackgroundGlow from "../components/common/BackgroundGlow";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import AnalysisPreview from "../components/AnalysisPreview/AnalysisPreview";

function Home() {
  return (
    <div className="min-h-screen bg-[#030712] overflow-x-hidden">

      <BackgroundGlow />

      <Navbar />

      <main className="pt-32">
    <Hero />
    <Features />
    <HowItWorks />
    <AnalysisPreview />
</main>

    </div>
  );
}

export default Home;