export default function GallerySection() {
  return (
    <section className="py-section-gap bg-surface" id="gallery">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Gallery</h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">Explore our facilities and see our students in action across various training programs.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 md:row-span-2 relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{"backgroundImage":"url('/gallery-1.jpg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="font-headline-sm text-headline-sm text-on-primary">Our Expert Trainers</h4>
              <p className="font-body-sm text-body-sm text-on-primary/80">Dedicated teachers guiding the next generation.</p>
            </div>
          </div>
          <div className="relative h-[150px] md:h-[192px] rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{"backgroundImage":"url('/gallery-2.jpg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="font-label-md text-label-md text-on-primary font-bold">Metal Work Tools</h4>
            </div>
          </div>
          <div className="relative h-[150px] md:h-[192px] rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{"backgroundImage":"url('/gallery-3.jpg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="font-label-md text-label-md text-on-primary font-bold">IT Lab</h4>
            </div>
          </div>
          <div className="relative h-[150px] md:h-[192px] rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{"backgroundImage":"url('/gallery-4.jpg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="font-label-md text-label-md text-on-primary font-bold">Practical Workshop</h4>
            </div>
          </div>
          <div className="relative h-[150px] md:h-[192px] rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{"backgroundImage":"url('/gallery-5.jpg')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="font-label-md text-label-md text-on-primary font-bold">Garment Training</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
