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
                COMING SOON
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