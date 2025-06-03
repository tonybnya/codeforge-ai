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
          {/* <h2 className="text-3xl font-bold text-center mb-12 text-white"> */}
          {/*   Powerful <span className="text-[#1ba94c]">Features</span> */}
          {/* </h2> */}
          <FeaturesSection />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
