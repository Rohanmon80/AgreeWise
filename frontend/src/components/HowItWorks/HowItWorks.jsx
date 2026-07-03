import { motion } from "framer-motion";
import {
  FaPaste,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaPaste className="text-5xl text-blue-400" />,
    title: "Paste or Upload",
    description:
      "Paste agreement text or upload a PDF, DOCX or provide a website URL.",
  },
  {
    icon: <FaRobot className="text-5xl text-violet-400" />,
    title: "AI Analysis",
    description:
      "Gemini AI scans privacy policies, hidden clauses, collected data and risks.",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-green-400" />,
    title: "Understand Instantly",
    description:
      "Receive an easy-to-read report with safety score and recommendations.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center"
        >
          How It{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Works
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 text-xl mt-6 max-w-3xl mx-auto"
        >
          Analyze any agreement in just three simple steps.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                p-10
                hover:-translate-y-3
                hover:border-blue-500/40
                transition-all duration-500
              "
            >
              <div className="mb-8">
                {step.icon}
              </div>

              <span className="text-blue-400 font-semibold">
                Step {index + 1}
              </span>

              <h3 className="text-3xl font-bold mt-3">
                {step.title}
              </h3>

              <p className="text-slate-400 leading-8 mt-5">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;