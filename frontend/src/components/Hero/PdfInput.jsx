import { useRef, useState } from "react";
import { FaFilePdf, FaUpload } from "react-icons/fa";

function PdfInput({ onFileSelect }) {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFile = (file) => {
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please select a PDF file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Maximum file size is 10 MB.");
      return;
    }

    setFileName(file.name);

    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <div className="h-80 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-red-400 bg-slate-900/40">

      <FaFilePdf className="text-red-500 text-7xl mb-6" />

      <h2 className="text-2xl font-bold">
        Upload PDF Agreement
      </h2>

      <p className="text-slate-400 mt-2 mb-8">
        Drag & Drop or click below
      </p>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        hidden
        onChange={(e) => handleFile(e.target.files[0])}
      />

      <button
        onClick={() => inputRef.current.click()}
        className="
          flex items-center gap-3
          px-8 py-4
          rounded-xl
          bg-red-600
          hover:bg-red-700
          transition
        "
      >
        <FaUpload />

        Choose PDF
      </button>

      {fileName && (
        <p className="mt-6 text-green-400">
          Selected: {fileName}
        </p>
      )}

    </div>
  );
}

export default PdfInput;