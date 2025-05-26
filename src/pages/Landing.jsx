import { Header } from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
// import CTA from "../components/CTA";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Stats from "../components/Stats";
import CharacteristicsSection from "../components/CharakteristikSection";
import CTASection from "../components/CTASection";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Stats />
      <CharacteristicsSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Landing;
