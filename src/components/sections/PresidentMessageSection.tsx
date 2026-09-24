export default function PresidentMessageSection() {
  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img alt="Dean of Hawa Gelan TVET College" className="w-full h-auto max-h-[600px] object-cover lg:object-top" src="/dean.jpg"/>
          </div>
          <div className="lg:pl-8 lg:py-8">
            <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4 font-semibold">
              Message from the Dean
            </h2>
            <div className="w-12 h-1 bg-primary/30 mb-8 rounded-full"></div>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium text-on-surface leading-snug">
                "Education is not merely the transmission of knowledge; it is the ignition of potential and the foundation of a prosperous nation."
              </p>
              
              <p className="text-base md:text-lg text-secondary leading-relaxed">
                Welcome to Hawa Gelan TVET College. For over two decades, our institution has been at the forefront of vocational excellence in Oromia. By bridging the gap between rigorous theoretical study and hands-on, real-world application, we ensure our graduates don't just find jobs—they create them. I invite you to join us in our mission to build a skilled, capable, and thriving Ethiopia.
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-outline-variant/30 flex items-center gap-5">
              <div>
                <h3 className="font-headline-md text-xl text-on-surface font-semibold tracking-tight">INST. YOSEF ITAFA TARFA</h3>
                <p className="text-xs md:text-sm text-secondary uppercase tracking-widest mt-1.5 font-medium">Dean, Hawa Gelan TVET College</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
