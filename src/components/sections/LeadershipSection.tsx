
import { useEffect, useRef, useState } from "react";

const leaders = [
  {
    name: "INST. SOBOKA PAULOS WAKJIRA",
    role: "TRAINING OWNER",
    message: "\"Our focus is on delivering curriculum that meets the demands of tomorrow's industries.\"",
    image: "/leader-1.jpg"
  },
  {
    name: "INST. DAWIT TADASA SAGNI",
    role: "HUMAN RESOURCE CAPACITY BUILDING OWNER",
    message: "\"Hands-on experience is the crucible where theoretical knowledge transforms into true capability.\"",
    image: "/leader-2.jpg"
  },
  {
    name: "INST. TILAHUN ADIMASU TARESA ",
    role: "EIS OWNER",
    message: "\"We nurture not just skilled workers, but well-rounded citizens ready to lead their communities.\"",
    image: "/leader-3.jpg"
  }
];

export default function LeadershipSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className={`flex flex-col group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-lg">
                <div className="hidden md:block absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover animate-breathe md:animate-none md:grayscale md:group-hover:grayscale-0 transition-all duration-700 md:group-hover:scale-110 md:scale-100"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-on-surface tracking-tight mb-1">{leader.name}</h4>
                <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">{leader.role}</p>
                <div className="w-8 h-[2px] bg-outline-variant mb-4"></div>
                <p className="text-secondary leading-relaxed italic text-sm md:text-base">
                  {leader.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
