import { motion } from "framer-motion";
import {
  FaPaste,
  FaRobot,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaPaste />,
    title: "Paste Agreement",
    description: "Paste Terms & Conditions, Privacy Policy or upload a PDF.",
  },
  {
    icon: <FaRobot />,
    title: "AI Analysis",
    description: "Our AI reads every clause and understands the legal language.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Risk Detection",
    description: "Privacy risks, hidden clauses and dangerous conditions are detected.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Get Recommendation",
    description: "Receive a safety score and a simple recommendation before accepting.",
  },
];

function HowItWorks() {
  return (
    <section className="py-32 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-blue-500 transition"
            >
              <div className="text-4xl text-blue-400 mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-slate-400">
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