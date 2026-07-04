import { FaLink } from "react-icons/fa";

function UrlInput({ url, setUrl }) {
  return (
    <div className="h-80 flex flex-col justify-center">

      <div className="flex items-center gap-3 rounded-2xl bg-slate-900/70 border border-white/10 px-5 py-4">

        <FaLink className="text-blue-500 text-xl" />

        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com/privacy-policy"
          className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
        />

      </div>

      <p className="text-slate-400 mt-5 leading-7">
        Paste the URL of a Terms & Conditions, Privacy Policy or User Agreement.
        AgreeWise will fetch the webpage, extract the readable text and analyze it with AI.
      </p>

    </div>
  );
}

export default UrlInput;