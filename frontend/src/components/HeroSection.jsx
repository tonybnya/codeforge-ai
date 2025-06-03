import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Terminal } from "lucide-react";

const HeroSection = ({ onGetStarted = () => {} }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const codeBlockVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.8,
        type: "spring",
      },
    },
  };

  return (
    <div className="relative w-full bg-[#0a0e17] text-white overflow-hidden min-h-[700px] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10 text-[#00ea64] text-6xl">
          &lt;/&gt;
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 text-[#00ea64] text-6xl">{`{ }`}</div>
        <div className="absolute top-1/3 right-1/4 opacity-5 text-[#00ea64] text-4xl">
          function()
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-5 text-[#00ea64] text-4xl">
          return;
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <div className="flex-1 max-w-2xl">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Master Coding with{" "}
                <span className="text-[#00ea64]">AI-Powered</span> Challenges
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              <span className="font-bold">
                CodeForge<span className="text-[#1ba94c]">AI</span>
              </span>{" "}
              generates personalized coding challenges tailored to your skills
              level, preferred programming language, and areas you want to
              improve.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={onGetStarted}
                size="lg"
                className="bg-[#00ea64] hover:bg-[#00c853] text-black font-medium px-8 py-6 rounded-md text-lg"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-[#00ea64] text-[#00ea64] hover:bg-[#00ea64]/10 px-8 py-6 rounded-md text-lg"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-[#00ea64]" />
                <span className="text-gray-300">5+ Languages</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-[#00ea64]" />
                <span className="text-gray-300">Custom Challenges</span>
              </div>
            </motion.div>
          </div>

          {/* Right content - Code animation */}
          <motion.div className="flex-1 max-w-xl" variants={codeBlockVariants}>
            <div className="bg-[#1a1f2e] rounded-lg p-4 shadow-lg border border-[#2a3142]">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-gray-400">challenge.py</div>
              </div>

              <pre className="text-sm md:text-base overflow-x-auto">
                <code className="font-mono">
                  <span className="text-blue-400">def</span>{" "}
                  <span className="text-[#00ea64]">binary_search</span>
                  <span className="text-yellow-300">
                    (arr: list[int], target: int) -> int:
                  </span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-gray-400">"""</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-gray-400">
                    Find the index of `target` in a sorted list `arr`.
                  </span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-gray-400">
                    :param arr: list of integers in ascending order.
                  </span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-gray-400">
                    :param target: integer value to search for.
                  </span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-gray-400">
                    :returns: index of `target` if found; otherwise, -1.
                  </span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-gray-400">
                    Time Complexity: O(
                    <span className="text-yellow-300">logn</span>)
                  </span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-gray-400">
                    Space Complexity: O(
                    <span className="text-yellow-300">1</span>)
                  </span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-gray-400">"""</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-gray-600"># Your solution here...</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
