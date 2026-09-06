import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group bg-[#080808] border border-green-500/20 rounded-2xl overflow-hidden hover:border-green-400 hover:shadow-[0_0_35px_rgba(0,255,120,.18)] transition-all"
    >
      {/* Image Placeholder */}
      <div className="h-52 bg-gradient-to-br from-[#0a0a0a] to-[#111] flex items-center justify-center border-b border-green-500/20">

        <span className="text-6xl text-violet-500 opacity-20">
          {"</>"}
        </span>

      </div>

      <div className="p-7">

        <h3 className="text-2xl font-bold text-violet-300">
          {title}
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-violet-300"
            >
              {item}
            </span>
          ))}

        </div>

        <div className="flex gap-4 mt-8">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-green-500 rounded-lg hover:bg-green-500 hover:text-black transition"
          >
            <FiGithub />

            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-green-500 text-black rounded-lg hover:scale-105 transition"
          >
            <FiExternalLink />

            Live
          </a>

        </div>

      </div>

    </motion.div>
  );
}