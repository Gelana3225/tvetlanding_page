import { Card, CardContent } from "../ui/card";

const programs = [
  {
    title: "Agriculture",
    desc: "Modern farming techniques, crop management, and sustainable agricultural practices.",
    level: "Level I - IV",
    req: "Grade 12",
    image: "/program-1.png"
  },
  {
    title: "General Metal Fabrication and Assembly",
    desc: "Welding, structural fabrication, and modern metalworking machinery operation.",
    level: "Level I - IV",
    req: "Grade 12",
    image: "/program-2.jpg"
  },
  {
    title: "Hardware and Networking Service(HNS)",
    desc: "Fundamental IT skills, software applications, and basic hardware troubleshooting.",
    level: "Level I - IV",
    req: "Grade 12",
    image: "/program-4.jpg"
  },
  {
    title: "Garment",
    desc: "Textile design, tailoring, apparel manufacturing, and quality control.",
    level: "Level I - IV",
    req: "Grade 12",
    image: "/program-5.jpg"
  },
  {
    title: "Animal Production",
    desc: "Livestock management, animal health, breeding, and sustainable farming practices.",
    level: "Level I - IV",
    req: "Grade 12",
    image: "/program-6.png"
  },
  {
    title: "Crop Production",
    desc: "Agronomy, soil science, pest management, and maximizing crop yields.",
    level: "Level I - IV",
    req: "Grade 12",
    image: "/program-7.png"
  },
  {
    title: "Wood Work Technology",
    desc: "Design, fabrication, and finishing of modern and traditional furniture pieces.",
    level: "Level I - IV",
    req: "Grade 12",
    image: "/program-8.png"
  },
  {
    title: "Structural Construction Work(SCW)",
    desc: "Building fundamentals, masonry, concrete work, and site safety management.",
    level: "Level I - IV",
    req: "Grade 12",
    image: "/program-10.png"
  }
];

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-surface-container-low" id="programs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-sm tracking-[0.2em] uppercase text-primary mb-4 font-semibold">
            Vocational Training Programs
          </h2>
          <p className="text-3xl md:text-4xl font-light text-on-surface">
            Build expertise from fundamental to advanced proficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {programs.map((prog, idx) => (
            <Card 
              key={idx} 
              className="group overflow-hidden bg-surface border-none shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer"
            >
              <div className="h-56 relative overflow-hidden">
                {/* Image scales up and sharpens on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110" 
                  style={{ backgroundImage: `url('${prog.image}')` }}
                ></div>
                {/* Gradient overlay shifts on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-60"></div>
                

              </div>
              <CardContent className="p-6 relative">
                {/* Subtle top border accent line that expands on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-primary/20 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                
                <h3 className="font-semibold text-lg text-on-surface mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {prog.title}
                </h3>
                <p className="text-sm text-secondary mb-6 leading-relaxed line-clamp-2">
                  {prog.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-md font-medium tracking-wide">
                    {prog.level}
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-md font-medium tracking-wide">
                    {prog.req}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
