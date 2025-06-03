import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e17]/90 backdrop-blur-sm border-b border-[#2a3142] px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/">
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#1ba94c] text-2xl font-bold"
            >
              &lt;/&gt;
            </motion.div>
            <h1 className="text-xl font-bold text-white">
              CodeForge<span className="text-[#1ba94c]">AI</span>
            </h1>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8 text-white">
          <a
            href="challenge"
            className="hover:text-[#1ba94c] transition-colors"
          >
            Challenge Generator
          </a>
          <a href="contact" className="hover:text-[#1ba94c] transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-white hover:text-[#1ba94c] transition-colors">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-[#1ba94c] hover:bg-[#158f3e] rounded-md transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
