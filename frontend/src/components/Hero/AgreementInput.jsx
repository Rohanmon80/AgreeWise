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

import TextInput from "./TextInput";
import PdfInput from "./PdfInput";
import DocxInput from "./DocxInput";
import UrlInput from "./UrlInput";

function AgreementInput() {
  const [agreement, setAgreement] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [docxFile, setDocxFile] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputType, setInputType] = useState("text");

  const navigate = useNavigate();

  const maxCharacters = 15000;

  const tabs = [
    {
      id: "text",
      label: "Paste Text",
      icon: FaPaste,
    },
    {
      id: "pdf",
      label: "PDF",
      icon: FaFilePdf,
    },
    {
      id: "docx",
      label: "DOCX",
      icon: FaFileWord,
    },
    {
      id: "url",
      label: "URL",
      icon: FaLink,
    },
  ];

  // -------------------------
  // TEXT ANALYSIS
  // -------------------------
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

      navigate("/analysis", {
        state: {
          agreement,
          analysis: response.data.result,
        },
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to analyze agreement."
      );
    } finally {
      setLoading(false);
    }
  };

  // -------------------------
  // PDF ANALYSIS
  // -------------------------
  const handleURLAnalyze = async () => {
  if (!url.trim()) {
    alert("Please enter a URL.");
    return;
  }

  try {
    setLoading(true);

    const response = await api.post("/analyze/url", {
      url,
    });

    navigate("/analysis", {
      state: {
        agreement: url,
        analysis: response.data.result,
      },
    });

  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to analyze URL."
    );

  } finally {
    setLoading(false);
  }
};

  const handleDOCXAnalyze = async () => {
  if (!docxFile) {
    alert("Please choose a DOCX file first.");
    return;
  }

  try {
    setLoading(true);

    const formData = new FormData();
    formData.append("docx", docxFile);

    const response = await api.post(
      "/analyze/docx",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    navigate("/analysis", {
      state: {
        agreement: docxFile.name,
        analysis: response.data.result,
      },
    });

  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to analyze DOCX."
    );

  } finally {
    setLoading(false);
  }
};
  const handlePDFAnalyze = async () => {
    if (!pdfFile) {
      alert("Please choose a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("pdf", pdfFile);

      const response = await api.post(
        "/analyze/pdf",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/analysis", {
        state: {
          agreement: pdfFile.name,
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
    <div className="mt-16 max-w-5xl mx-auto">

      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(37,99,235,0.20)] overflow-hidden">

        {/* Tabs */}

        <div className="grid grid-cols-4 border-b border-white/10">

          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setInputType(tab.id)}
                className={`flex items-center justify-center gap-2 py-4 transition ${
                  inputType === tab.id
                    ? "bg-blue-500/10 text-blue-400"
                    : "hover:bg-white/5"
                }`}
              >
                <Icon />
                {tab.label}
              </button>
            );
          })}

        </div>

        {/* Input Area */}

        <div className="p-7">

          {/* TEXT */}

          {inputType === "text" && (
            <>
              <TextInput
                agreement={agreement}
                setAgreement={setAgreement}
                maxCharacters={maxCharacters}
              />

              <div className="flex justify-end mt-8">

                <button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 ${
                    loading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:scale-105 shadow-lg shadow-blue-500/30"
                  }`}
                >
                  <FaWandMagicSparkles />

                  {loading
                    ? "Analyzing with AI..."
                    : "Analyze Agreement"}

                </button>

              </div>
            </>
          )}

          {/* PDF */}

          {inputType === "pdf" && (
            <>
              <PdfInput
                onFileSelect={setPdfFile}
              />

              <div className="flex justify-end mt-8">

                <button
                  onClick={handlePDFAnalyze}
                  disabled={loading}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 ${
                    loading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 shadow-lg shadow-red-500/30"
                  }`}
                >
                  <FaFilePdf />

                  {loading
                    ? "Analyzing PDF..."
                    : "Analyze PDF"}

                </button>

              </div>
            </>
          )}

          {/* DOCX */}

          {inputType === "docx" && (
  <>
    <DocxInput
      onFileSelect={setDocxFile}
    />

    <div className="flex justify-end mt-8">

      <button
        onClick={handleDOCXAnalyze}
        disabled={loading}
        className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 ${
          loading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:scale-105 shadow-lg shadow-blue-500/30"
        }`}
      >
        <FaFileWord />

        {loading
          ? "Analyzing DOCX..."
          : "Analyze DOCX"}

      </button>

    </div>
  </>
)}

          {/* URL */}

          {inputType === "url" && (
  <>
    <UrlInput
      url={url}
      setUrl={setUrl}
    />

    <div className="flex justify-end mt-8">

      <button
        onClick={handleURLAnalyze}
        disabled={loading}
        className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 ${
          loading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gradient-to-r from-green-600 to-emerald-600 hover:scale-105 shadow-lg shadow-green-500/30"
        }`}
      >
        <FaLink />

        {loading
          ? "Analyzing URL..."
          : "Analyze URL"}

      </button>

    </div>
  </>
)}

        </div>

      </div>

    </div>
  );
}

export default AgreementInput;