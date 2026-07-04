import { useRef, useState } from "react";
import { FaFileWord, FaUpload } from "react-icons/fa";

function DocxInput({ onFileSelect }) {
  const inputRef = useRef(null);

  const [fileName, setFileName] = useState("");

  const handleFile = (file) => {
    if (!file) return;

    const valid =
      file.name.endsWith(".docx") ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    if (!valid) {
      alert("Please select a DOCX file.");
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
    <div className="h-80 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-500">

      <FaFileWord className="text-6xl text-blue-500 mb-6" />

      <h2 className="text-2xl font-bold">
        Upload DOCX File
      </h2>

      <p className="text-slate-400 mt-2">
        Choose a Microsoft Word document
      </p>

      <input
        ref={inputRef}
        type="file"
        accept=".docx"
        hidden
        onChange={(e) =>
          handleFile(e.target.files[0])
        }
      />

      <button
        onClick={() => inputRef.current.click()}
        className="mt-8 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-3"
      >
        <FaUpload />

        Choose DOCX
      </button>

      {fileName && (
        <p className="mt-6 text-green-400">
          Selected: {fileName}
        </p>
      )}

    </div>
  );
}

export default DocxInput;