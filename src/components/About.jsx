import { motion } from "framer-motion";
import { FiShield, FiCode, FiCpu } from "react-icons/fi";
import SectionHeader from "./SectionHeader";

const cards = [
  {
    icon: <FiShield size={28} />,
    title: "Cyber Security",
    desc: "Learning penetration testing, web security, vulnerability assessment and secure development."
  },
  {
    icon: <FiCode size={28} />,
    title: "Development",
    desc: "Building modern React applications with performance, clean UI and responsive design."
  },
  {
    icon: <FiCpu size={28} />,
    title: "Problem Solver",
    desc: "I enjoy solving real-world challenges through automation, QA testing and scripting."
  }
];

export default function About() {

  return (

    <section className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <SectionHeader
          title="ABOUT ME"
          subtitle="WHO AM I"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div

            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}

          >

            <h3 className="text-4xl font-bold text-primary mb-8">

              Hello,

              <br/>

              I'm Madhav Yadav

            </h3>

            <p className="text-white leading-9">

              I'm currently pursuing BCA (Hons.) in Cyber Security.

              My primary interests are Ethical Hacking, QA Testing,
              Network Security and Secure Web Development.

              I enjoy learning how systems work internally,
              identifying security flaws and building applications
              with both functionality and security in mind.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>

                <p className="text-secondary">Location</p>

                <p>Ghaziabad, India</p>

              </div>

              <div>

                <p className="text-secondary">Experience</p>

                <p>QA Testing & Web Management</p>

              </div>

              <div>

                <p className="text-secondary">Education</p>

                <p>BCA Cyber Security</p>

              </div>

              <div>

                <p className="text-secondary">Focus</p>

                <p>Cyber Security</p>

              </div>

            </div>

          </motion.div>

          <motion.div

            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}

            className="grid gap-6"

          >

            {cards.map((item,index)=>(

              <div

                key={index}

                className="border border-secondary/20 rounded-xl p-8 bg-slate hover:border-secondary transition"

              >

                <div className="text-primary mb-5">

                  {item.icon}

                </div>

                <h4 className="text-2xl font-bold mb-3">

                  {item.title}

                </h4>

                <p className="text-white">

                  {item.desc}

                </p>

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>

  );

}