import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";

const skills = [

  {
    title: "Python",
    level: 90,
    description:
      "Automation, scripting, networking tools and backend fundamentals."
  },

  {
    title: "Cyber Security",
    level: 88,
    description:
      "Web security, vulnerability assessment, penetration testing and OWASP."
  },

  {
    title: "Networking",
    level: 82,
    description:
      "TCP/IP, DNS, HTTP, Wireshark, packet analysis and troubleshooting."
  },

  {
    title: "React",
    level: 78,
    description:
      "Modern UI development using React, Vite and TailwindCSS."
  },

  {
    title: "Postman",
    level: 85,
    description:
      "REST API testing, collections, debugging and validation."
  },

  {
    title: "QA Testing",
    level: 87,
    description:
      "Manual testing, bug reporting, usability testing and functional testing."
  }

];

export default function Skills() {

  return (

    <section className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <SectionHeader
          title="SKILLS"
          subtitle="WHAT I DO"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skills.map((skill) => (

            <SkillCard
              key={skill.title}
              {...skill}
            />

          ))}

        </div>

      </div>

    </section>

  );

}