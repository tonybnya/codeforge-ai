import HeroSection from "../components/HeroSection.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";

const LandingPage = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section id="hero" className="py-16">
        <HeroSection />
      </section>
      {/* {/* Challenge Generator Section */} */}
      {/* <section id="generator" className="py-16 bg-[#0d121f]"> */}
      {/*   <div className="max-w-7xl mx-auto px-6"> */}
      {/*     <h2 className="text-3xl font-bold text-center mb-12"> */}
      {/*       Try Our <span className="text-[#1ba94c]">Challenge Generator</span> */}
      {/*     </h2> */}
      {/*     <ChallengeGenerator /> */}
      {/*   </div> */}
      {/* </section> */}
      {/* Features Showcase Section */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* <h2 className="text-3xl font-bold text-center mb-12 text-white"> */}
          {/*   Powerful <span className="text-[#1ba94c]">Features</span> */}
          {/* </h2> */}
          <FeaturesSection />
        </div>
      </section>
      {/* {/* Testimonials Section */} */}
      {/* <section id="testimonials" className="py-16 bg-[#0d121f]"> */}
      {/*   <div className="max-w-7xl mx-auto px-6"> */}
      {/*     <h2 className="text-3xl font-bold text-center mb-12"> */}
      {/*       Developer <span className="text-[#1ba94c]">Success Stories</span> */}
      {/*     </h2> */}
      {/*     <div className="bg-[#141c2e] p-8 rounded-lg shadow-lg"> */}
      {/*       <p className="text-center text-gray-300 italic"> */}
      {/*         Testimonials section coming soon. This will showcase success */}
      {/*         stories from developers who have improved their skills using */}
      {/*         CodeForge AI. */}
      {/*       </p> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </section> */}
    </main>
  );
};

export default LandingPage;
