import { useLocation } from "react-router-dom";

function Analysis() {
  const location = useLocation();

  const analysis = location.state?.analysis;

  if (!analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-950">
        No analysis found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        AI Analysis
      </h1>

      <pre className="bg-slate-900 p-6 rounded-xl whitespace-pre-wrap">
        {analysis}
      </pre>
    </div>
  );
}

export default Analysis;