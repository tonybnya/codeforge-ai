import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Code, Terminal, Zap } from "lucide-react";

const ChallengeGenerator = ({ className = "" }) => {
  const [language, setLanguage] = useState("javascript");
  const [difficulty, setDifficulty] = useState("medium");
  const [topic, setTopic] = useState("algorithms");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <section id="generator" className="py-16 bg-[#0d121f] py-30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Try Our <span className="text-[#1ba94c]">Challenge Generator</span>
        </h2>
        <div className={`w-full max-w-6xl mx-auto px-4 py-4 ${className}`}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              Generate Your Custom Challenge
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select your preferences below and let our AI create a personalized
              coding challenge tailored to your skill level and interests.
            </p>
          </div>

          <Card className="bg-[#1a1a2e] border-[#2c2c54] text-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-[#00ea64]" />
                <span>Challenge Generator</span>
              </CardTitle>
              <CardDescription className="text-gray-400">
                Customize your coding challenge parameters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Programming Language
                  </label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="bg-[#252547] border-[#2c2c54] text-white">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#252547] border-[#2c2c54] text-white">
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="java">Bash</SelectItem>
                      <SelectItem value="csharp">C</SelectItem>
                      <SelectItem value="ruby">Ruby</SelectItem>
                      <SelectItem value="cpp">Rust</SelectItem>
                      <SelectItem value="go">Go</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Difficulty Level
                  </label>
                  <Select value={difficulty} onValueChange={setDifficulty}>
                    <SelectTrigger className="bg-[#252547] border-[#2c2c54] text-white">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#252547] border-[#2c2c54] text-white">
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Topic Category
                  </label>
                  <Select value={topic} onValueChange={setTopic}>
                    <SelectTrigger className="bg-[#252547] border-[#2c2c54] text-white">
                      <SelectValue placeholder="Select topic" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#252547] border-[#2c2c54] text-white">
                      <SelectItem value="algorithms">Algorithms</SelectItem>
                      <SelectItem value="data-structures">
                        Data Structures
                      </SelectItem>
                      <SelectItem value="web-development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="system-design">
                        System Design
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#252547] rounded-md border border-[#2c2c54]">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-5 w-5 text-[#00EA64]" />
                  <h3 className="font-medium">Challenge Preview</h3>
                </div>
                <div className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
                  {isGenerating ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#00EA64]"></div>
                    </div>
                  ) : (
                    <div>
                      <p className="mb-2 text-[#00EA64] font-semibold">
                        {difficulty === "easy"
                          ? "Easy"
                          : difficulty === "medium"
                            ? "Medium"
                            : difficulty === "hard"
                              ? "Hard"
                              : "Expert"}{" "}
                        {topic} Challenge in{" "}
                        {language.charAt(0).toUpperCase() + language.slice(1)}
                      </p>
                      <p>
                        {language === "javascript" && topic === "algorithms"
                          ? "Implement a function that finds the longest substring without repeating characters in a given string."
                          : "Your custom challenge will appear here after generation. Click 'Generate Challenge' to create a personalized coding problem based on your selections."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-[#00EA64] hover:bg-[#00c853] text-black font-medium cursor-pointer"
              >
                <Zap className="mr-2 h-4 w-4 text-[#1ba94c]" />
                {isGenerating ? "Generating..." : "Generate Challenge"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChallengeGenerator;
