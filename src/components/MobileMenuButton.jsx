import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileMenuButton() {
  // State to track whether the menu is open
  const [isOpen, setIsOpen] = useState(false);


  // Toggle the menu state when button is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}

        className="md:hidden text-[#7B2E2E]"
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Mobile Menu */}

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-full sm:w-1/2 bg-[#7B2E2E] text-white flex flex-col items-center justify-center gap-6 text-lg font-medium z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button

          onClick={toggleMenu}
          className="absolute top-4 right-4"
        >
          <X className="w-8 h-8" />

        </button>

        <a href="/" className="hover:underline">Inicio</a>
        <a href="/itinerary" className="hover:underline">Programa</a>
        <a href="/rsvp" className="hover:underline">Asistencia</a>
        <a href="/gifts" className="hover:underline">Regalos</a>
        <a href="/gallery" className="hover:underline">Galería</a>
      </div>
    </>
  );
}

