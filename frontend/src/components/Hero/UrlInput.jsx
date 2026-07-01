function UrlInput() {
  return (
    <div className="h-80 flex flex-col justify-center">

      <input
        type="url"
        placeholder="https://example.com/privacy-policy"
        className="rounded-2xl bg-slate-900/70 border border-white/10 p-5 text-white outline-none focus:border-blue-500"
      />

      <p className="text-slate-400 mt-5">
        Website analysis coming soon
      </p>

    </div>
  );
}

export default UrlInput;