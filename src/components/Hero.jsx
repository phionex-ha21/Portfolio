import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-violet-500 mb-4 tracking-[4px]">
            INITIALIZING USER...
          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-tight">

            MADHAV

            <br />

            <span className="text-violet-400">
              YADAV
            </span>

          </h1>

          <div className="mt-8 space-y-3 text-lg text-violet-300">

            <p>&gt; Cyber Security Student</p>

            <p>&gt; QA Tester</p>

            <p>&gt; Ethical Hacker</p>

            <p>&gt; Python Developer</p>

          </div>

          <p className="mt-10 text-gray-400 leading-8 max-w-xl">

            Passionate about Cyber Security, Penetration Testing,
            Web Development and building secure applications.
            I enjoy finding vulnerabilities, solving real-world
            problems and creating modern web experiences.

          </p>

          <div className="flex gap-5 mt-12 flex-wrap">

            <a
              href="#projects"
              className="flex items-center gap-3
              bg-green-500
              text-black
              px-8
              py-4
              rounded-lg
              font-semibold
              hover:scale-105
              transition"
            >
              View Projects

              <FiArrowRight />
            </a>

            <a
              href="/Madhav Yadav.pdf"
              className="border
              border-green-500
              px-8
              py-4
              rounded-lg
              flex
              items-center
              gap-3
              hover:bg-green-500
              hover:text-black
              transition"
              download
            >
              Resume

              <FiDownload />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="rounded-xl border border-green-500 overflow-hidden shadow-[0_0_40px_rgba(0,255,120,.2)]">

            <div className="bg-black border-b border-green-500 px-5 py-3 flex gap-2">

              <div className="w-3 h-3 rounded-full bg-red-500"></div>

              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

              <div className="w-3 h-3 rounded-full bg-green-500"></div>

            </div>

            <div className="bg-[#050505] p-8 font-mono text-violet-400 leading-8">

              <p>$ whoami</p>

              <p>Madhav Yadav</p>

              <br />

              <p>$ role</p>

              <p>Cyber Security Student</p>

              <br />

              <p>$ skills</p>

              <p>
                Python • Networking • Postman • QA Testing •
                Web Security
              </p>

              <br />

              <p>$ status</p>

              <p className="text-violet-300">
                Building Secure Systems...
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
