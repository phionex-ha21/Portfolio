import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bootLines = [
  "> Booting Secure Terminal...",
  "> Loading Kernel Modules...",
  "> Initializing Cyber Engine...",
  "> Connecting Secure Network...",
  "> Loading Portfolio Assets...",
  "> Authenticating User...",
  "> ACCESS GRANTED",
];

export default function LoadingScreen() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setVisibleLines((prev) => [...prev, bootLines[index]]);
      index++;

      if (index === bootLines.length) {
        clearInterval(timer);
      }
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-[999]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl px-8">

        <h2 className="text-3xl text-violet-400 font-bold mb-10 font-mono">
          CYBER TERMINAL
        </h2>

        <div className="font-mono space-y-3 text-violet-500">

          {visibleLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {line}
            </motion.p>
          ))}

          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
            }}
            className="inline-block mt-4"
          >
            █
          </motion.span>

        </div>

      </div>
    </motion.div>
  );
}