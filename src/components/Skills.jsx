import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";

const skills = [

  {
    title: "Python",
    description:
      "Automation, scripting, networking tools and backend fundamentals."
  },

  {
    title: "Cyber Security",
    description:
      "Web security, vulnerability assessment, penetration testing and OWASP."
  },

  {
    title: "Networking",
    description:
      "TCP/IP, DNS, HTTP, Wireshark, packet analysis and troubleshooting."
  },

  {
    title: "React",
    description:
      "Modern UI development using React, Vite and TailwindCSS."
  },

  {
    title: "Postman",
    description:
      "REST API testing, collections, debugging and validation."
  },

  {
    title: "QA Testing",
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