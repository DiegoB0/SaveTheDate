import { useState } from 'react';
import { Menu, X, Home, CalendarDays, NotebookTabs, Gift, Camera, ArrowRight } from 'lucide-react';

export default function MobileMenuButton() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}

      <button onClick={toggleMenu} className="md:hidden text-[#7B2E2E]">
        <Menu className="w-8 h-8" />
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-full sm:w-1/2 bg-[#7B2E2E] text-white z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close Button */}
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white z-50">
          <X className="w-8 h-8" />
        </button>

        {/* Grid container for nav links */}

        <div className="h-full w-full flex items-center justify-center">

          <div className="grid grid-rows-5 gap-10 w-3/4 text-xl">

            <a href="/" className="flex justify-between items-center hover:underline w-full">
              <span className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Inicio
              </span>

              <span className="flex justify-end"><ArrowRight /></span>
            </a>

            <a href="/itinerary" className="flex justify-between items-center hover:underline w-full">
              <span className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5" />
                Programa
              </span>


              <span className="flex justify-end"><ArrowRight /></span>
            </a>

            <a href="/rsvp" className="flex justify-between items-center hover:underline w-full">
              <span className="flex items-center gap-2">
                <NotebookTabs className="w-5 h-5" />
                Asistencia
              </span>

              <span className="flex justify-end"><ArrowRight /></span>
            </a>

            <a href="/gifts" className="flex justify-between items-center hover:underline w-full">
              <span className="flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Regalos
              </span>

              <span className="flex justify-end"><ArrowRight /></span>
            </a>

            <a href="/gallery" className="flex justify-between items-center hover:underline w-full">
              <span className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Galería
              </span>

              <span className="flex justify-end"><ArrowRight /></span>
            </a>

          </div>
        </div>

      </div>
    </>
  );
}

