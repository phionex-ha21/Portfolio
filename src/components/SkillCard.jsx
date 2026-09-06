import { motion } from "framer-motion";

export default function SkillCard({
  title,
  level,
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
      bg-[#070707]
      border
      border-green-500/20
      rounded-xl
      p-6
      hover:border-green-400
      hover:shadow-[0_0_25px_rgba(0,255,120,.15)]
      transition-all"
    >
      <div className="flex justify-between mb-4">

        <h3 className="text-xl font-bold text-violet-300">
          {title}
        </h3>

        <span className="text-violet-500">
          {level}%
        </span>

      </div>

      <div className="w-full h-2 rounded-full bg-[#111] overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="h-full bg-green-500"
        />

      </div>

      <p className="text-gray-400 mt-5 text-sm leading-7">
        {description}
      </p>

    </motion.div>
  );
}