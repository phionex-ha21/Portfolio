import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoadingScreen from "./components/LoadingScreen";
import CyberBackground from "./components/CyberBackground";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative bg-onyx text-white overflow-x-hidden"
          >
            <CyberBackground />

            <Navbar />

            <main className="relative z-10">

              <section id="home">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="skills">
                <div className="px-8 py-28">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl border border-primary/30 bg-slate p-8 md:p-14"
                  >
                    <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
                    <div className="absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />

                    <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                      <div className="max-w-2xl">
                        <p className="mb-4 font-mono text-sm uppercase tracking-[5px] text-secondary">
                          Skill archive // status
                        </p>

                        <h2 className="text-4xl font-black leading-tight text-primary md:text-6xl">
                          Uploading soon.
                        </h2>

                        <p className="mt-5 max-w-xl text-lg leading-8 text-white">
                          I&apos;m organizing the tools, technologies, and certifications that shape my work. This space will be live soon.
                        </p>
                      </div>

                      <div className="min-w-40 font-mono text-sm text-secondary md:text-right">
                        <p className="mb-3">STATUS: IN PROGRESS</p>
                        <div className="h-2 overflow-hidden rounded-full bg-onyx">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "62%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="h-full rounded-full bg-secondary"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="experience">
                <Experience />
              </section>

              <section id="contact">
                <Contact />
              </section>

            </main>

            <Footer />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;