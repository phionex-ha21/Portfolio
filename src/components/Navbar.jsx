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
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-primary/20 bg-onyx/85">

      <div className="max-w-7xl mx-auto h-20 px-8 flex justify-between items-center">

        <h1 className="text-2xl font-bold tracking-widest text-primary">
          &lt;MADHAV /&gt;
        </h1>

        <nav className="hidden md:flex gap-8">

          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`transition duration-300 hover:text-secondary ${
                active === item.id
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              {item.name}
            </button>
          ))}

        </nav>

        <div className="flex items-center gap-5">

          <a
            href="https://github.com/phionex-ha21"
            target="_blank"
            rel="noreferrer"
            className="text-secondary hover:text-white transition"
          >
            <FiGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/madhav-yadav-761800206"
            target="_blank"
            rel="noreferrer"
            className="text-secondary hover:text-white transition"
          >
            <FiLinkedin size={22} />
          </a>

        </div>

      </div>

    </header>
  );
}