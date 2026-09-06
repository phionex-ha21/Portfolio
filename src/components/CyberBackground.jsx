import { motion } from "framer-motion";

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-onyx">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,245,212,.28) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,212,.28) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow 1 */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute w-[450px] h-[450px]
        rounded-full
        bg-primary/15
        blur-[140px]
        top-[-120px]
        left-[-100px]"
      />

      {/* Glow 2 */}

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px]
        rounded-full
        bg-secondary/10
        blur-[150px]
        bottom-[-180px]
        right-[-120px]"
      />

      {/* Scan Lines */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "repeating-linear-gradient(180deg, transparent 0px, transparent 3px, rgba(0,245,212,.18) 4px)",
        }}
      />

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.5) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

    </div>
  );
}