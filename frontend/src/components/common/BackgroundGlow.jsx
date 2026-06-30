function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-500/20 blur-[140px] animate-pulse"></div>

      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-violet-500/20 blur-[180px] animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]"></div>

    </div>
  );
}

export default BackgroundGlow;