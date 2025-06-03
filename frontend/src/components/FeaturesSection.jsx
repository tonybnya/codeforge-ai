import FeatureCard from "./FeatureCard.jsx";
import { Code, Layers, Zap, Globe, BookOpen, Award } from "lucide-react";

const FeaturesShowcase = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: "Custom Challenges",
      description:
        "Generate personalized coding challenges tailored to your specific learning needs and skills level.",
    },
    {
      icon: <Globe size={24} />,
      title: "Multiple Languages",
      description:
        "Practice in a wide range of programming languages including JavaScript, Python, Bash, C, and more.",
    },
    {
      icon: <Layers size={24} />,
      title: "Difficulty Progression",
      description:
        "Gradually increase challenge complexity as you improve, ensuring continuous growth and learning.",
    },
    {
      icon: <Zap size={24} />,
      title: "Real-time Feedback",
      description:
        "Get instant feedback on your solutions with detailed explanations and optimization suggestions.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Learning Resources",
      description:
        "Access comprehensive guides and documentation to help you solve challenges and improve your skills.",
    },
    {
      icon: <Award size={24} />,
      title: "Skill Certification",
      description:
        "Earn certificates and badges as you master different programming concepts and techniques.",
    },
  ];

  return (
    <section className="w-full py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            CodeForge AI provides everything you need to enhance your coding
            skills through practical, customized challenges and comprehensive
            learning tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
