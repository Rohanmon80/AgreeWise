import { useLocation, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaFileAlt,
  FaLock,
  FaDatabase,
  FaUsers,
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";

function Analysis() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state?.analysis;

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        No analysis found.
      </div>
    );
  }

  
  const Card = ({ icon, title, children }) => (
    <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-5">
        <div className="text-blue-400 text-2xl">{icon}</div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#030712] text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-slate-300 hover:text-blue-400 mb-8"
        >
          <FaArrowLeft />
          Back
        </button>

        <h1 className="text-5xl font-black mb-3">
          AI Agreement Analysis
        </h1>

        <p className="text-slate-400 mb-10">
          Generated using Gemini AI
        </p>

        {/* Safety Score */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-8 mb-10">

          <p className="text-lg">Safety Score</p>

          <h2 className="text-7xl font-black mt-2">
            {data.safety_score}/10
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <Card
            icon={<FaFileAlt />}
            title="Summary"
          >
            <p className="text-slate-300 leading-8">
              {data.summary}
            </p>
          </Card>

          <Card
            icon={<FaLock />}
            title="Privacy"
          >
            <ul className="space-y-3">
              {data.privacy?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </Card>

          <Card
            icon={<FaDatabase />}
            title="Collected Data"
          >
            <ul className="space-y-3">
              {data.collected_data?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </Card>

          <Card
            icon={<FaUsers />}
            title="Shared Data"
          >
            <ul className="space-y-3">
              {data.shared_data?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </Card>

          <Card
            icon={<FaExclamationTriangle />}
            title="Hidden Clauses"
          >
            <ul className="space-y-3">
              {data.hidden_clauses?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </Card>

          <Card
            icon={<FaShieldAlt />}
            title="Risks"
          >
            <ul className="space-y-3">
              {data.risks?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </Card>

        </div>

        <div className="mt-10">

          <Card
            icon={<FaLightbulb />}
            title="AI Recommendation"
          >
            <p className="leading-8 text-slate-300">
              {data.recommendation}
            </p>
          </Card>

        </div>

      </div>

    </div>
  );
}

export default Analysis;