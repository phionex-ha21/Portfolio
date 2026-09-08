import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Hand Gesture Recognition",
    description:
      "Real-time hand gesture recognition built with MediaPipe and OpenCV, with a browser-based frontend for interactive gesture tracking.",
    tech: ["Python", "OpenCV", "MediaPipe", "React"],
    github: "https://github.com/phionex-ha21/Hand-Gesture",
  },
  {
    title: "Doom Scroller",
    description:
      "A compact Windows utility that automatically scrolls the active browser window with adjustable speed and a responsive Tkinter control panel.",
    tech: ["Python", "Tkinter", "PyAutoGUI", "Threading"],
    github: "https://github.com/phionex-ha21/Doom-Scroller",
  }
];

export default function Projects() {
  return (
    <section className="px-8 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="PROJECTS" subtitle="MY WORK" />
        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}