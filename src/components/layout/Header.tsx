import { useState } from "react";
import { Button } from "../ui/button";


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-outline-variant/30 shadow-sm bg-surface/95 dark:bg-surface-container/95 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Hawa Gelan TVET Logo" className="h-12 md:h-16 w-auto object-contain rounded-full" />
          <a className="font-headline-md text-headline-md font-bold text-primary" href="#">
            Hawa Gelan TVET
          </a>
        </div>
        
        <div className="flex items-center gap-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary pb-1" href="#">Home</a>
            <a className="font-label-md text-label-md text-secondary hover:text-on-tertiary-container transition-colors" href="#about">About</a>
            <a className="font-label-md text-label-md text-secondary hover:text-on-tertiary-container transition-colors" href="#programs">Programs</a>
            <a className="font-label-md text-label-md text-secondary hover:text-on-tertiary-container transition-colors" href="#gallery">Gallery</a>
            <a className="font-label-md text-label-md text-secondary hover:text-on-tertiary-container transition-colors" href="#contact">Contact</a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </Button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-surface-container/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Nav Drawer */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-[280px] bg-surface shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <Button variant="ghost" size="icon" className="text-primary" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="material-symbols-outlined text-3xl">close</span>
          </Button>
        </div>
        <div className="flex flex-col px-6 py-2 gap-4">
          {[
            { name: "Home", href: "#" },
            { name: "About", href: "#about" },
            { name: "Programs", href: "#programs" },
            { name: "Gallery", href: "#gallery" },
            { name: "Contact", href: "#contact" }
          ].map((item, i) => (
            <a 
              key={item.name}
              className={`text-headline-sm font-bold text-secondary hover:text-primary transition-colors border-b border-outline-variant/20 pb-4 flex items-center justify-between group ${
                isMobileMenuOpen ? `animate-in slide-in-from-right-8 fade-in duration-500 fill-mode-both` : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 100}ms` }}
              href={item.href} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
              <span className="material-symbols-outlined opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary">arrow_forward</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
