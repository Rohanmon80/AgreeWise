import { motion } from "framer-motion";
import AgreementInput from "./AgreementInput";
import { useTheme } from "../../context/ThemeContext";

function Hero() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20 transition-all duration-500 ${
        darkMode
          ? "bg-[#030712] text-white"
          : "bg-gray-50 text-slate-900"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-violet-600/20 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="max-w-6xl w-full text-center">

        {/* AI Badge */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 mb-8 backdrop-blur-md"
        >
          ✨ AI-Powered Agreement Analyzer
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-8xl font-black leading-tight"
        >
          <span className={darkMode ? "text-white" : "text-slate-900"}>
            Understand Before
          </span>

          <br />

          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
            You Agree.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className={`mt-8 text-xl max-w-3xl mx-auto leading-9 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          AI analyzes{" "}
          <span className={darkMode ? "text-white font-semibold" : "text-slate-900 font-semibold"}>
            Terms & Conditions
          </span>
          ,{" "}
          <span className={darkMode ? "text-white font-semibold" : "text-slate-900 font-semibold"}>
            Privacy Policies
          </span>{" "}
          and User Agreements in seconds.

          <br />

          Understand what you're accepting before clicking{" "}

          <span className="text-blue-500 font-semibold">
            I Agree.
          </span>
        </motion.p>

        {/* Agreement Card */}
        <motion.div
  id="agreement-section"
  initial={{ opacity: 0, y: 70 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.45 }}
>
  <AgreementInput />
</motion.div>

        {/* Trusted */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`mt-10 flex justify-center items-center gap-2 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <span className="text-green-500 text-lg">🛡</span>
          Trusted by students, developers and privacy-conscious users.
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;