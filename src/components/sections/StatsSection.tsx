export default function StatsSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Subtle lighting effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          
          <div className="flex flex-col items-center text-center group">
            <div className="text-5xl lg:text-7xl font-light text-white mb-4 tracking-tight transition-transform duration-700 group-hover:-translate-y-2">
              1998
            </div>
            <div className="text-xs lg:text-sm tracking-[0.25em] uppercase text-white/60 font-semibold">
              Year Established
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center group">
            <div className="text-5xl lg:text-7xl font-light text-white mb-4 tracking-tight transition-transform duration-700 group-hover:-translate-y-2">
              10<span className="text-white/40">+</span>
            </div>
            <div className="text-xs lg:text-sm tracking-[0.25em] uppercase text-white/60 font-semibold">
              Training Programs
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center group">
            <div className="text-5xl lg:text-7xl font-light text-white mb-4 tracking-tight transition-transform duration-700 group-hover:-translate-y-2">
              2k<span className="text-white/40">+</span>
            </div>
            <div className="text-xs lg:text-sm tracking-[0.25em] uppercase text-white/60 font-semibold">
              Successful Graduates
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center group">
            <div className="text-5xl lg:text-7xl font-light text-white mb-4 tracking-tight transition-transform duration-700 group-hover:-translate-y-2">
              387
            </div>
            <div className="text-xs lg:text-sm tracking-[0.25em] uppercase text-white/60 font-semibold">
              Current Students
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
