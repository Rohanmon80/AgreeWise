import { FaFileWord } from "react-icons/fa6";

function DocxInput() {
  return (
    <div className="h-80 rounded-2xl border-2 border-dashed border-blue-400 flex flex-col justify-center items-center">

      <FaFileWord className="text-6xl text-blue-400 mb-5" />

      <h3 className="text-2xl font-bold">
        Upload DOCX
      </h3>

      <p className="text-slate-400 mt-3">
        DOCX support coming soon
      </p>

    </div>
  );
}

export default DocxInput;