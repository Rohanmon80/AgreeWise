import {
  FaRobot,
  FaShieldAlt,
  FaExclamationTriangle,
  FaFileContract,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

function Features() {
  const { darkMode } = useTheme();

  const features = [
    {
      icon: <FaRobot className="text-blue-400 text-5xl" />,
      title: "AI Summary",
      description:
        "Get a simple explanation of complex legal agreements in seconds.",
    },
    {
      icon: <FaShieldAlt className="text-green-400 text-5xl" />,
      title: "Privacy Analysis",
      description:
        "Know exactly what personal information companies collect and share.",
    },
    {
      icon: <FaExclamationTriangle className="text-yellow-400 text-5xl" />,
      title: "Risk Detection",
      description:
        "Detect hidden clauses, auto-renewals and dangerous conditions instantly.",
    },
    {
      icon: <FaFileContract className="text-red-400 text-5xl" />,
      title: "Safety Score",
      description:
        "Receive an easy-to-understand safety score before clicking I Agree.",
    },
  ];

  return (
    <section
  id="features"
  className={`relative py-32 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-[#030712] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            AgreeWise?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-center mt-6 text-xl max-w-3xl mx-auto ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Our AI analyzes every agreement so you understand exactly what
          you're accepting before clicking <strong>I Agree</strong>.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`group rounded-3xl backdrop-blur-xl border p-8 transition-all duration-500 hover:-translate-y-4 hover:border-blue-500/50 hover:shadow-[0_0_60px_rgba(59,130,246,.25)] ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-gray-100 border-gray-200"
              }`}
            >
              <div className="mb-8">{feature.icon}</div>

              <h3 className="text-2xl font-bold mb-5 group-hover:text-blue-400 transition">
                {feature.title}
              </h3>

              <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;