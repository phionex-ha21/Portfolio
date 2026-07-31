import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section className="py-32 px-8">

      <div className="max-w-4xl mx-auto">

        <SectionHeader
          title="CONTACT"
          subtitle="LET'S CONNECT"
        />

        <div className="bg-[#070707] border border-green-500/20 rounded-2xl p-10">

          <p className="text-gray-400 leading-8 mb-10">

            Interested in collaborating, internships,
            cybersecurity, development or freelance work?
            Feel free to connect with me.

          </p>

          <div className="space-y-6">

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-4 hover:text-green-300"
            >
              <FiMail />

              madhavyyadavv@gmail.com
            </a>

            <a
              href="https://github.com/phionex-ha21"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-green-300"
            >
              <FiGithub />

              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/madhav-yadav-761800206"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-green-300"
            >
              <FiLinkedin />

              LinkedIn
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}