export default function AboutSection() {
  return (
    <section className="py-section-gap bg-surface" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">About Hawa Gelan TVET College</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Founded in 1998 in the vibrant Hawa Gelan district of Oromia, our institution has been a cornerstone of practical education and community empowerment for over two decades.
            </p>
            <p className="font-body-md text-body-md text-secondary mb-8">
              We are committed to bridging the gap between education and employment by providing industry-aligned vocational training. Our approach combines rigorous theoretical knowledge with extensive hands-on experience in modern workshops and agricultural fields, ensuring our graduates are ready to contribute meaningfully to Ethiopia's growing economy.
            </p>
            <a className="inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:text-primary-container transition-colors" href="#history">
              Read Full History <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src="/about-gate.jpg" alt="Hawa Gelan TVET College Gate" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
