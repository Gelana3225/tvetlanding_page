export default function MottoSection() {
  return (
    <section className="py-32 lg:py-40 bg-primary relative overflow-hidden flex items-center justify-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Elegant pre-header */}
        <div className="inline-flex items-center gap-4 mb-10 opacity-80">
          <div className="h-[1px] w-12 bg-tertiary-fixed-dim/60"></div>
          <span className="text-xs tracking-[0.3em] uppercase text-tertiary-fixed-dim font-semibold">Our Philosophy</span>
          <div className="h-[1px] w-12 bg-tertiary-fixed-dim/60"></div>
        </div>
        
        {/* Massive, stylized typography */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.2]">
          Skill is <span className="font-semibold text-white">Power.</span>
          <br className="hidden md:block" />
          <span className="block mt-3 text-white/70">
            Application is <span className="italic text-tertiary-fixed-dim">Transformation.</span>
          </span>
        </h2>
      </div>
    </section>
  );
}
