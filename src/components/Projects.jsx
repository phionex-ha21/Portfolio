import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const projects = [

  {
    title: "Athlete Performance Tracking System",

    description:
      "AI-powered fitness tracking application using computer vision to monitor athlete performance and count exercises in real-time.",

    tech: [
      "Python",
      "OpenCV",
      "Flask",
      "MediaPipe"
    ],

    github: "https://github.com/phionex-ha21",

    live: "#"
  },

  {
    title: "Cyber Portfolio",

    description:
      "Modern hacker-themed portfolio built with React, Tailwind CSS and Framer Motion.",

    tech: [
      "React",
      "Tailwind",
      "Framer Motion"
    ],

    github: "https://github.com/phionex-ha21",

    live: "#"
  },

  {
    title: "Network Analysis Toolkit",

    description:
      "Collection of networking and packet analysis utilities for cybersecurity learning.",

    tech: [
      "Python",
      "Networking",
      "Wireshark"
    ],

    github: "https://github.com/phionex-ha21",

    live: "#"
  }

];

export default function Projects() {

  return (

    <section className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <SectionHeader

          title="PROJECTS"

          subtitle="MY WORK"

        />

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project) => (

            <ProjectCard

              key={project.title}

              {...project}

            />

          ))}

        </div>

      </div>

    </section>

  );

}