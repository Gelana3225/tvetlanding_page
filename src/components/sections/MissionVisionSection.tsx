export default function MissionVisionSection() {
  return (
    <section className="py-section-gap bg-surface-container-low" id="mission-vision">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="group relative p-10 bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
            
            <div className="relative z-10 flex flex-col h-full text-left">
              <span className="font-headline-lg text-6xl text-primary/10 font-light mb-8 transition-colors duration-500 group-hover:text-primary/20">01</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4 transition-transform duration-500 group-hover:translate-x-2">Our Mission</h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed transition-colors duration-500 group-hover:text-primary/80">
                To develop skilled human resources and contribute to national prosperity by creating employment opportunities.
              </p>
              <div className="mt-8 h-px w-12 bg-outline-variant transition-all duration-500 group-hover:w-full group-hover:bg-primary/30" />
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative p-10 bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 md:mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
            
            <div className="relative z-10 flex flex-col h-full text-left">
              <span className="font-headline-lg text-6xl text-primary/10 font-light mb-8 transition-colors duration-500 group-hover:text-primary/20">02</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4 transition-transform duration-500 group-hover:translate-x-2">Our Vision</h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed transition-colors duration-500 group-hover:text-primary/80">
                To be a leading center of excellence in vocational training, reducing unemployment through innovation and skill development.
              </p>
              <div className="mt-8 h-px w-12 bg-outline-variant transition-all duration-500 group-hover:w-full group-hover:bg-primary/30" />
            </div>
          </div>

          {/* Goals Card */}
          <div className="group relative p-10 bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 md:mt-16">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
            
            <div className="relative z-10 flex flex-col h-full text-left">
              <span className="font-headline-lg text-6xl text-primary/10 font-light mb-8 transition-colors duration-500 group-hover:text-primary/20">03</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4 transition-transform duration-500 group-hover:translate-x-2">Institutional Goals</h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed transition-colors duration-500 group-hover:text-primary/80">
                Focus on expanding practical training, strengthening community ties, and fostering innovation in agriculture and technology.
              </p>
              <div className="mt-8 h-px w-12 bg-outline-variant transition-all duration-500 group-hover:w-full group-hover:bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
