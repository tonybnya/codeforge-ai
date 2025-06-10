import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useUser } from "@clerk/clerk-react";

const ChallengeHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [challenges, setChallenges] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    // Simulate fetching challenge history
    const fetchChallenges = async () => {
      setIsLoading(true);
      try {
        // This would be replaced with an actual API call in production
        // const response = await fetch(`/api/challenges?userId=${user.id}`);
        // const data = await response.json();
        
        // For now, using mock data
        setTimeout(() => {
          const mockChallenges = [
            {
              id: 1,
              title: "Longest Substring Without Repeating Characters",
              language: "JavaScript",
              difficulty: "Medium",
              topic: "Algorithms",
              date: "2025-06-08",
              status: "Completed"
            },
            {
              id: 2,
              title: "Binary Tree Level Order Traversal",
              language: "Python",
              difficulty: "Medium",
              topic: "Data Structures",
              date: "2025-06-05",
              status: "Attempted"
            },
            {
              id: 3,
              title: "Two Sum",
              language: "JavaScript",
              difficulty: "Easy",
              topic: "Algorithms",
              date: "2025-06-03",
              status: "Completed"
            }
          ];
          setChallenges(mockChallenges);
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Error fetching challenges:", error);
        setIsLoading(false);
      }
    };

    if (user) {
      fetchChallenges();
    }
  }, [user]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'text-green-400';
      case 'medium':
        return 'text-yellow-400';
      case 'hard':
        return 'text-red-400';
      case 'expert':
        return 'text-purple-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-900/30 text-green-400">Completed</span>;
      case 'attempted':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-900/30 text-yellow-400">Attempted</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-900/30 text-gray-400">{status}</span>;
    }
  };

  return (
    <section className="py-16 bg-[#0d121f] min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Your <span className="text-[#1ba94c]">Challenge History</span>
        </h2>

        {isLoading ? (
          <div className="flex justify-center my-20">
            <LoadingSpinner />
          </div>
        ) : challenges.length === 0 ? (
          <div className="text-center py-12 bg-[#1a1a2e] rounded-lg border border-[#2c2c54]">
            <h3 className="text-xl font-medium text-white mb-2">No challenges yet</h3>
            <p className="text-gray-400 mb-6">You haven't attempted any coding challenges.</p>
            <a 
              href="/challenge" 
              className="px-4 py-2 bg-[#1ba94c] hover:bg-[#158f3e] text-white rounded-md transition-colors inline-block"
            >
              Try a Challenge
            </a>
          </div>
        ) : (
          <div className="bg-[#1a1a2e] rounded-lg border border-[#2c2c54] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#252547] text-left">
                    <th className="px-6 py-4 text-sm font-medium text-gray-300">Challenge</th>
                    <th className="px-6 py-4 text-sm font-medium text-gray-300">Language</th>
                    <th className="px-6 py-4 text-sm font-medium text-gray-300">Difficulty</th>
                    <th className="px-6 py-4 text-sm font-medium text-gray-300">Topic</th>
                    <th className="px-6 py-4 text-sm font-medium text-gray-300">Date</th>
                    <th className="px-6 py-4 text-sm font-medium text-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2c2c54]">
                  {challenges.map((challenge) => (
                    <tr key={challenge.id} className="hover:bg-[#252547]">
                      <td className="px-6 py-4 text-white font-medium">{challenge.title}</td>
                      <td className="px-6 py-4 text-gray-300">{challenge.language}</td>
                      <td className="px-6 py-4">
                        <span className={getDifficultyColor(challenge.difficulty)}>
                          {challenge.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{challenge.topic}</td>
                      <td className="px-6 py-4 text-gray-300">{challenge.date}</td>
                      <td className="px-6 py-4">
                        {getStatusBadge(challenge.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChallengeHistory;
