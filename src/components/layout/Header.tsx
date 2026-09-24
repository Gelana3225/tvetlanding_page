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

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface shadow-lg border-b border-outline-variant/30 flex flex-col p-4 animate-in slide-in-from-top-2">
          <a className="py-3 px-4 font-label-md text-label-md text-primary font-bold border-b border-outline-variant/30" href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a className="py-3 px-4 font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a className="py-3 px-4 font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#programs" onClick={() => setIsMobileMenuOpen(false)}>Programs</a>
          <a className="py-3 px-4 font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
          <a className="py-3 px-4 font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
