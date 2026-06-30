import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaUserSecret,
} from "react-icons/fa";

function AnalysisPreview() {
  return (
    <section className="py-32 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center"
        >
          Example AI Analysis
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-slate-400 mt-5 text-xl"
        >
          Here's what AgreeWise generates after analyzing an agreement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-20
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            p-10
            shadow-[0_0_60px_rgba(59,130,246,.15)]
          "
        >

          {/* Safety */}

          <div className="flex justify-between items-center flex-wrap gap-4">

            <div>
              <p className="text-slate-400">Safety Score</p>

              <h3 className="text-6xl font-black text-green-400">
                92 / 100
              </h3>
            </div>

            <div className="bg-green-500/20 px-6 py-3 rounded-full text-green-400 font-semibold">
              Safe to Accept
            </div>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div className="rounded-2xl bg-slate-900/70 p-6 border border-white/10">
              <FaCheckCircle className="text-green-400 text-3xl mb-4" />

              <h4 className="text-2xl font-bold mb-3">
                AI Summary
              </h4>

              <p className="text-slate-400">
                This agreement collects basic account information and allows
                access to your uploaded content for service improvement.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/70 p-6 border border-white/10">
              <FaUserSecret className="text-blue-400 text-3xl mb-4" />

              <h4 className="text-2xl font-bold mb-3">
                Privacy
              </h4>

              <p className="text-slate-400">
                Personal information may be shared with trusted third-party
                providers for analytics.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/70 p-6 border border-white/10">
              <FaExclamationTriangle className="text-yellow-400 text-3xl mb-4" />

              <h4 className="text-2xl font-bold mb-3">
                Risks
              </h4>

              <p className="text-slate-400">
                Automatic renewal is enabled unless cancelled before the
                renewal date.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/70 p-6 border border-white/10">
              <FaShieldAlt className="text-green-400 text-3xl mb-4" />

              <h4 className="text-2xl font-bold mb-3">
                Recommendation
              </h4>

              <p className="text-slate-400">
                This agreement appears safe, but review the renewal policy
                before accepting.
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default AnalysisPreview;