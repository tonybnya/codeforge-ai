import { motion } from "framer-motion";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e17]/90 backdrop-blur-sm border-b border-[#2a3142] px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
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
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-white">
          <Link
            to="/contact"
            className="hover:text-[#1ba94c] transition-colors"
          >
            Contact
          </Link>
          <SignedIn>
            <Link
              to="/challenge"
              className="hover:text-[#1ba94c] transition-colors"
            >
              Challenge Generator
            </Link>
            <Link
              to="/history"
              className="hover:text-[#1ba94c] transition-colors"
            >
              Challenge History
            </Link>
          </SignedIn>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Desktop auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <Link
                to="/sign-in"
                className="px-4 py-2 text-sm font-medium text-white hover:text-[#1ba94c] transition-colors cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="px-4 py-2 text-sm font-medium bg-[#1ba94c] hover:bg-[#158f3e] rounded-md transition-colors cursor-pointer"
              >
                Sign Up
              </Link>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d121f] border-t border-[#2a3142] py-4">
          <div className="flex flex-col space-y-4 px-6">
            <Link
              to="/contact"
              className="text-white hover:text-[#1ba94c] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <SignedIn>
              <Link
                to="/challenge"
                className="text-white hover:text-[#1ba94c] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Challenge Generator
              </Link>
              <Link
                to="/history"
                className="text-white hover:text-[#1ba94c] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Challenge History
              </Link>
            </SignedIn>
            
            <SignedOut>
              <Link
                to="/sign-in"
                className="text-white hover:text-[#1ba94c] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="bg-[#1ba94c] hover:bg-[#158f3e] text-white py-2 px-4 rounded-md text-center transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </SignedOut>
            
            <SignedIn>
              <div className="pt-2 border-t border-[#2a3142] flex items-center">
                <span className="text-gray-400 mr-2">Account:</span>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
