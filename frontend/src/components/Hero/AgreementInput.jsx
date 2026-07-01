import { useState } from "react";
import {
  FaPaste,
  FaFilePdf,
  FaFileWord,
  FaLink,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function AgreementInput() {
  const [agreement, setAgreement] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const maxCharacters = 15000;

  const handleAnalyze = async () => {
    if (!agreement.trim()) {
      alert("Please paste an agreement first.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/analyze", {
        agreement,
      });

      setLoading(false);

      navigate("/analysis", {
        state: {
          agreement,
          analysis: response.data.result,
        },
      });
    } catch (error) {
      setLoading(false);

      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to analyze agreement. Please try again."
      );
    }
  };

  return (
    <div className="mt-16 max-w-5xl mx-auto">
      {/* Glass Card */}
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(37,99,235,0.20)] overflow-hidden">

        {/* Tabs */}
        <div className="grid grid-cols-4 border-b border-white/10">

          <button className="flex items-center justify-center gap-2 py-4 text-blue-400 bg-blue-500/10">
            <FaPaste />
            Paste Text
          </button>

          <button className="flex items-center justify-center gap-2 py-4 hover:bg-white/5 transition">
            <FaFilePdf />
            PDF
          </button>

          <button className="flex items-center justify-center gap-2 py-4 hover:bg-white/5 transition">
            <FaFileWord />
            DOCX
          </button>

          <button className="flex items-center justify-center gap-2 py-4 hover:bg-white/5 transition">
            <FaLink />
            URL
          </button>

        </div>

        {/* Text Area */}
        <div className="p-7">

          <textarea
            value={agreement}
            onChange={(e) => setAgreement(e.target.value)}
            maxLength={maxCharacters}
            placeholder="Paste Terms & Conditions, Privacy Policy or User Agreement here..."
            className="w-full h-80 rounded-2xl bg-slate-900/70 border border-white/10 p-6 text-white placeholder:text-slate-500 resize-none outline-none focus:border-blue-500 transition"
          />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-6">

            <div className="text-slate-400 text-sm">
              {agreement.length} / {maxCharacters} Characters
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className={`
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-2xl
                text-white
                font-semibold
                transition-all
                duration-300
                shadow-lg
                ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:scale-105 shadow-blue-500/30"
                }
              `}
            >
              <FaWandMagicSparkles />

              {loading ? "Analyzing with AI..." : "Analyze Agreement"}
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AgreementInput;