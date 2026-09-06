import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experience = [
  {
    company: "News Speaks",
    role: "Website Manager",
    period: "2025",
    desc: "Managed website updates, publishing workflow and overall site maintenance."
  },
  {
    company: "ZobsAI",
    role: "QA Tester",
    period: "2025",
    desc: "Performed manual testing, reported bugs and validated application functionality."
  }
];

export default function Experience() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          title="EXPERIENCE"
          subtitle="CAREER"
        />

        <div className="relative border-l border-primary/30 ml-4">

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              className="mb-12 ml-8"
            >

              <div className="absolute -left-[11px] w-5 h-5 rounded-full bg-secondary"></div>

              <span className="text-secondary">
                {item.period}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.role}
              </h3>

              <h4 className="text-primary mb-4">
                {item.company}
              </h4>

              <p className="text-white leading-8">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}