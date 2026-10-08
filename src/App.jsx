import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BugReport from "./components/BugReport";

function App() {
  return (
    <>
      <CustomCursor />

      <div className="app-shell">
        <Navbar />

        <main className="relative z-10">
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="bug-report">
            <BugReport />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;