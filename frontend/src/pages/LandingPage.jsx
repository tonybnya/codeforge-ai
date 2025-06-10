import HeroSection from "../components/HeroSection.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";

const LandingPage = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section id="hero" className="py-16">
        <HeroSection />
      </section>
      {/* Features Showcase Section */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <FeaturesSection />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
