function TextInput({
  agreement,
  setAgreement,
  maxCharacters,
}) {
  return (
    <>
      <textarea
        value={agreement}
        onChange={(e) => setAgreement(e.target.value)}
        maxLength={maxCharacters}
        placeholder="Paste Terms & Conditions, Privacy Policy or User Agreement here..."
        className="w-full h-80 rounded-2xl bg-slate-900/70 border border-white/10 p-6 text-white placeholder:text-slate-500 resize-none outline-none focus:border-blue-500 transition"
      />

      <div className="flex justify-between mt-6">
        <span className="text-slate-400 text-sm">
          {agreement.length} / {maxCharacters} Characters
        </span>
      </div>
    </>
  );
}

export default TextInput;