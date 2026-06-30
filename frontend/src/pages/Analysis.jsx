import { useLocation, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaUserSecret,
} from "react-icons/fa";

function Analysis() {
  const location = useLocation();
  const navigate = useNavigate();

  const agreement = location.state?.agreement || "";

  return (
    <div className="min-h-screen bg-[#030712] text-white p-8">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mb-8 text-slate-300 hover:text-blue-400 transition"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Header */}
        <h1 className="text-5xl font-black">
          Agreement Analysis
        </h1>

        <p className="text-slate-400 mt-3">
          This is a preview. Gemini AI will provide the actual analysis in the next step.
        </p>

        {/* Safety Score */}
        <div className="mt-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">
          <div className="flex justify-between items-center flex-wrap gap-4">

            <div>
              <p className="text-slate-400">Safety Score</p>

              <h2 className="text-6xl font-black text-green-400">
                92 / 100
              </h2>
            </div>

            <div className="bg-green-500/20 text-green-400 px-6 py-3 rounded-full font-semibold">
              Safe to Accept
            </div>

          </div>
        </div>

        {/* Result Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="rounded-3xl bg-white/5 border border-white/10 p-7 backdrop-blur-xl">
            <FaCheckCircle className="text-green-400 text-3xl mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              AI Summary
            </h3>

            <p className="text-slate-400">
              This agreement collects basic user information for account
              management and service improvements.
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-7 backdrop-blur-xl">
            <FaUserSecret className="text-blue-400 text-3xl mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              Privacy
            </h3>

            <ul className="text-slate-400 space-y-2">
              <li>• Collects Email</li>
              <li>• Collects Phone Number</li>
              <li>• Collects Location</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-7 backdrop-blur-xl">
            <FaExclamationTriangle className="text-yellow-400 text-3xl mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              Risks
            </h3>

            <ul className="text-slate-400 space-y-2">
              <li>• Automatic Renewal</li>
              <li>• Third-party Data Sharing</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-7 backdrop-blur-xl">
            <FaShieldAlt className="text-green-400 text-3xl mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              Recommendation
            </h3>

            <p className="text-slate-400">
              This agreement appears relatively safe, but carefully review the
              automatic renewal and data-sharing sections before accepting.
            </p>
          </div>

        </div>

        {/* Agreement Preview */}
        <div className="mt-12 rounded-3xl bg-slate-900 border border-white/10 p-8">

          <h3 className="text-2xl font-bold mb-5">
            Original Agreement
          </h3>

          <div className="max-h-72 overflow-y-auto text-slate-400 whitespace-pre-wrap">
            {agreement}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Analysis;