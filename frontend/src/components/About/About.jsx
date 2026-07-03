import { motion } from "framer-motion";
import {
  FaRobot,
  FaShieldAlt,
  FaLock,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot className="text-5xl text-blue-400" />,
    title: "Powered by Gemini AI",
    description:
      "AgreeWise uses Google's Gemini AI to analyze agreements and explain them in simple language.",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-green-400" />,
    title: "Privacy Focused",
    description:
      "Your agreement is analyzed in real time. We do not save your agreements or personal information.",
  },
  {
    icon: <FaLock className="text-5xl text-violet-400" />,
    title: "Secure",
    description:
      "Designed with privacy and transparency in mind so you understand what you're accepting.",
  },
  {
    icon: <FaBolt className="text-5xl text-yellow-400" />,
    title: "Fast Analysis",
    description:
      "Receive an AI-generated summary, risks, hidden clauses and safety score within seconds.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center"
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            AgreeWise
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 text-xl mt-6 max-w-4xl mx-auto leading-9"
        >
          AgreeWise helps users understand Terms & Conditions,
          Privacy Policies and User Agreements before clicking
          <strong> "I Agree"</strong>.
          Instead of reading thousands of words,
          AI explains everything in seconds.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                p-8
                hover:border-blue-500/40
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              <div className="mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;