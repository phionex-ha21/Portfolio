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
      className="group bg-slate border border-primary/20 rounded-2xl overflow-hidden hover:border-secondary hover:shadow-[0_0_35px_rgba(0,245,212,.2)] transition-all"
    >
      {/* Image Placeholder */}
      <div className="h-52 bg-gradient-to-br from-onyx to-slate flex items-center justify-center border-b border-primary/20">

        <span className="text-6xl text-secondary opacity-30">
          {"</>"}
        </span>

      </div>

      <div className="p-7">

        <h3 className="text-2xl font-bold text-primary">
          {title}
        </h3>

        <p className="mt-4 text-white leading-7">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-sm text-secondary"
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
            className="flex items-center gap-2 px-5 py-3 border border-secondary rounded-lg hover:bg-secondary hover:text-onyx transition"
          >
            <FiGithub />

            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-lg hover:bg-secondary hover:text-onyx transition"
          >
            <FiExternalLink />

            Live
          </a>

        </div>

      </div>

    </motion.div>
  );
}