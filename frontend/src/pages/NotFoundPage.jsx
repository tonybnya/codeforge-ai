import bg from "/bg.png";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex text-white bg-[#0a0e17]">
      <div className="w-1/2 h-screen">
        <img
          src={bg}
          alt="Background illustration"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-between max-lg:justify-center items-center p-8 bg-black min-h-screen">
        <div className="flex flex-col items-center gap-3 mb-12">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#1ba94c] text-2xl font-bold"
          >
            &lt;/&gt;
          </motion.div>
          <span className="text-4xl max-lg:text-lg font-bold tracking-tight">
            <h1 className="text-xl font-bold">
              CodeForge<span className="text-[#1ba94c]">AI</span>
            </h1>
          </span>
        </div>

        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl max-lg:text-lg font-semibold leading-none tracking-tight">
            Oops! You have
            <br />
            discovered a world not
            <br />
            found!
          </h1>
          <p className="text-lg max-lg:text-sm font-light leading-6 tracking-tight">
            Home is just a click away. Let&apos;s go back and
            <br />
            continue our challenges.
          </p>

          <button
            size="lg"
            className="px-6 py-2 rounded-md bg-[#1ba94c] text-white hover:bg-[#1ba94c]/50 hover:scale-105"
          >
            <a
              href="/"
              className="uppercase font-bold"
              rel="noopener noreferrer"
              aria-label="Go to home page"
            >
              Go to Home
            </a>
          </button>
        </div>

        <div className="mt-12 text-[#1ba94c]/50 text-sm font-bold">
          <span>Error Code 404</span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
