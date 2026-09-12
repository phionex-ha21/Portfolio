import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => document.getElementById(l.id));

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050b14]/90 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto h-[90px] px-8 md:px-10 flex items-center justify-between gap-5">
        <div className="header-name-block shrink-0">
          <h1 className="cinematic-brand header-name" data-text="<MADHAV />">
            &lt;MADHAV /&gt;
          </h1>
        </div>

        <nav className="hidden md:flex items-center justify-center gap-8 text-[0.76rem] uppercase tracking-[0.02em] text-white/80">
          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`transition duration-300 hover:text-secondary ${
                active === item.id ? "text-[#35E06F]" : "text-white/80"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-[#35E06F] ml-auto shrink-0">
          <a
            href="https://github.com/phionex-ha21"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/madhav-yadav-761800206"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}