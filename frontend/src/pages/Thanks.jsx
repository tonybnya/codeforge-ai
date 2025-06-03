import { motion } from "framer-motion";
import "./styles/thanks.css";

const Thanks = () => {
  return (
    <div id="thanks">
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

      <h1 className="thanks uppercase text-[#1ba94c]">Thanks!</h1>
    </div>
  );
};

export default Thanks;
