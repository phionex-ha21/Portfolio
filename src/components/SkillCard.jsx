import { motion } from "framer-motion";

export default function SkillCard({
  title,
  description
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      bg-slate
      border
      border-primary/20
      rounded-xl
      p-6
      hover:border-secondary
      hover:shadow-[0_0_25px_rgba(0,245,212,.18)]
      transition-all"
    >
      <div className="mb-4">

        <h3 className="text-xl font-bold text-primary">
          {title}
        </h3>

      </div>

      <p className="text-white mt-5 text-sm leading-7">
        {description}
      </p>

    </motion.div>
  );
}