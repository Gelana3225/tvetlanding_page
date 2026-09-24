const timelineData = [
  { year: "1998", title: "Establishment", description: "Established as a Technical and Vocational Training Center under the Education Office." },
  { year: "2001", title: "Expansion", description: "Began Level I and II training in Agriculture, Metal/Wood, Computer, and Garment." },
  { year: "2004", title: "Workforce", description: "Trainer expansion and occupational recognition development." },
  { year: "2005", title: "Level I & II", description: "Formalized provision of Level I and Level II vocational training." },
  { year: "2006", title: "New Areas", description: "Added Animal/Crop Production, Furniture Making, and Garment." },
  { year: "2009", title: "Capacity", description: "Expanded training capacity with four additional specialized trainers." },
  { year: "2012", title: "Higher Levels", description: "Introduced Level III and IV training with on-site competency assessments." },
  { year: "2012", title: "Graduation", description: "Successfully graduated 225 Level IV trainees (123 male, 112 female)." },
  { year: "2015", title: "Recognition", description: "Formally received college-level recognition from the Oromia Bureau." },
  { year: "2016", title: "Construction", description: "Introduced Construction training field with 32 initial trainees." },
];

export default function JourneyTimelineSection() {
  return (
    <section className="py-section-gap bg-surface" id="history">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Journey</h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            A legacy of empowering the next generation through vocational excellence since 1998.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Vertical Center Line with Gradient */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent md:-translate-x-1/2 hidden sm:block"></div>
          {/* Solid line for mobile so it doesn't fade too early if content is long, but let's use a subtle line */}
          <div className="absolute left-[28px] md:hidden top-4 bottom-4 w-px bg-primary/20"></div>
          
          <div className="flex flex-col gap-8 md:gap-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[28px] md:left-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 md:-translate-x-1/2 mt-[40px] md:mt-0 z-10 transition-all duration-500 group-hover:scale-150 group-hover:ring-primary/40 shadow-sm"></div>
                  
                  {/* Content Container */}
                  <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'}`}>
                     <div className={`p-6 md:p-8 bg-surface rounded-2xl border border-outline-variant/20 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 relative overflow-hidden`}>
                       {/* Subtle background pattern/gradient on hover */}
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       
                       <div className="relative z-10">
                         <span className="inline-block px-4 py-1 bg-primary text-on-primary font-label-md md:font-label-lg rounded-full mb-3 md:mb-4 shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                           {item.year}
                         </span>
                         <h4 className="font-headline-sm md:text-headline-md text-primary mb-2 md:mb-3">
                           {item.title}
                         </h4>
                         <p className="font-body-sm md:font-body-md text-secondary leading-relaxed">
                           {item.description}
                         </p>
                       </div>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
