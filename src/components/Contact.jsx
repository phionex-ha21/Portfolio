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

        <div className="bg-slate border border-primary/20 rounded-2xl p-10">

          <p className="text-white leading-8 mb-10">

            Interested in collaborating, internships,
            cybersecurity, development or freelance work?
            Feel free to connect with me.

          </p>

          <div className="space-y-6">

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-4 text-white hover:text-secondary"
            >
              <FiMail />

              madhavyyadavv@gmail.com
            </a>

            <a
              href="https://github.com/phionex-ha21"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-white hover:text-secondary"
            >
              <FiGithub />

              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/madhav-yadav-761800206"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-white hover:text-secondary"
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