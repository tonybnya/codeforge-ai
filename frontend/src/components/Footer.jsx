const Footer = () => {
  return (
    <footer className="bg-[#070b12] py-12 border-t border-[#2a3142]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-[#1ba94c] text-xl font-bold">&lt;/&gt;</div>
              <h3 className="text-lg font-bold text-white">
                CodeForge<span className="text-[#1ba94c]">AI</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Elevate your coding skills with AI-generated challenges tailored
              to your needs.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-white">CodeForgeAI</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="contact" className="hover:text-[#1ba94c]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-white">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://tonybnya-portfolio.onrender.com"
                  target="_blank"
                  className="hover:text-[#1ba94c]"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tonybnya"
                  target="_blank"
                  className="hover:text-[#1ba94c]"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tonybnya"
                  target="_blank"
                  className="hover:text-[#1ba94c]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/tonybnya"
                  target="_blank"
                  className="hover:text-[#1ba94c]"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2a3142] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CodeForge AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-[#1ba94c]">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#1ba94c]">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#1ba94c]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
