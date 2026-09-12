import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero-shell flex items-center justify-center px-6 md:px-10">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center pt-32 pb-20 relative z-10">
        <div>
          <div className="hero-title-block">
            <span className="status-led" aria-hidden="true" />
            <div className="hero-title-stack">
              <h1 className="cinematic-title hero-main-text">INITIALIZING USER...</h1>
            </div>
          </div>

          <div className="hero-list mt-8">
            <span>&gt; Cyber Security Student</span>
            <span>&gt; QA Tester</span>
            <span>&gt; Ethical Hacker</span>
            <span>&gt; Python Developer</span>
          </div>

          <p className="hero-bio">
            Passionate about Cyber Security, Penetration Testing, Web Development and
            building secure applications. I enjoy finding vulnerabilities, solving
            real-world problems and creating modern web experiences.
          </p>

          <div className="btn-row">
            <a href="#projects" className="primary-btn">
              View Projects
              <FiArrowRight />
            </a>

            <a href="/Madhav Yadav.pdf" className="secondary-btn" download>
              Resume
              <FiDownload />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>

            <div className="terminal-body">
              <div className="terminal-block">
                <p className="terminal-id">$ whoami</p>
                <p className="terminal-name">Madhav Yadav</p>
              </div>

              <div className="terminal-block">
                <p className="terminal-id">$ role</p>
                <p className="terminal-name">Cyber Security Student</p>
              </div>

              <div className="terminal-block">
                <p className="terminal-id">$ skills</p>
                <p className="terminal-name">Python • Networking • Postman • QA Testing • Web Security</p>
              </div>

              <div className="terminal-block">
                <p className="terminal-id">$ status</p>
                <p className="terminal-status">Building Secure Systems...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
