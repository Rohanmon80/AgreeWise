import { useState } from "react";
import { FaFilePdf, FaUpload } from "react-icons/fa6";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function PdfInput() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("pdf", file);

      const response = await api.post("/analyze/pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/analysis", {
        state: {
          analysis: response.data.result,
        },
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to analyze PDF."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border-2 border-dashed border-red-400 p-10 flex flex-col items-center">

      <FaFilePdf className="text-red-500 text-7xl mb-6" />

      <h2 className="text-2xl font-bold mb-3">
        Upload PDF Agreement
      </h2>

      <p className="text-slate-400 mb-8 text-center">
        Choose a Terms & Conditions or Privacy Policy PDF.
      </p>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="mb-6"
      />

      {file && (
        <div className="mb-6 text-green-400">
          Selected:
          <br />
          <strong>{file.name}</strong>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className="px-8 py-4 rounded-xl bg-red-500 hover:bg-red-600 transition flex items-center gap-3"
      >
        <FaUpload />

        {loading ? "Analyzing..." : "Analyze PDF"}
      </button>

    </div>
  );
}

export default PdfInput;