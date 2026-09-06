import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="mb-20 text-center"
    >
      <p className="uppercase tracking-[6px] text-secondary mb-3">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black text-primary">
        {title}
      </h2>

      <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
    </motion.div>
  );
}