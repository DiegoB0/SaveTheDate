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

      <button onClick={toggleMenu} className="md:hidden text-[#7B2E2E] ml-auto">
        <Menu className="w-8 h-8" />
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-[100dvh] w-full sm:w-1/2 bg-[#1c0009] text-[#f9f1ec] z-50 transition-transform duration-300 md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        {/* Close Button */}
        <button onClick={toggleMenu} className="absolute top-4 right-4 z-50">
          <X className="w-8 h-8" />
        </button>

        {/* Grid container for nav links */}

        <div className="h-full w-full flex items-center justify-center montserrat">

          <div className="grid grid-rows-5 gap-6 w-3/4 mb-auto mt-24 text-2xl">

            <a href="/" className="flex justify-between items-center hover:underline w-full">
              <span className="flex items-center gap-4">
                <Home className="w-7 h-7" />
                Inicio
              </span>

              <span className="flex justify-end"><ArrowRight className=' w-7 h-7'/></span>
            </a>

            <a href="/itinerary" className="flex justify-between items-center hover:underline w-full">
              <span className="flex items-center gap-4">
                <CalendarDays className="w-7 h-7" />
                Programa
              </span>


              <span className="flex justify-end"><ArrowRight className=' w-7 h-7'/></span>
            </a>

            <a href="/rsvp" className="flex justify-between items-center hover:underline w-full">
              <span className="flex items-center gap-4">
                <NotebookTabs className="w-7 h-7" />
                Asistencia
              </span>

              <span className="flex justify-end"><ArrowRight className=' w-7 h-7'/></span>
            </a>

            <a href="/gifts" className="flex justify-between items-center hover:underline w-full">
              <span className="flex items-center gap-4">
                <Gift className="w-7 h-7" />
                Regalos
              </span>

              <span className="flex justify-end"><ArrowRight className=' w-7 h-7'/></span>
            </a>

            {/*<a href="/gallery" className="flex justify-between items-center hover:underline w-full">
              <span className="flex items-center gap-4">
                <Camera className="w-7 h-7" />
                Galería
              </span>

              <span className="flex justify-end"><ArrowRight className=' w-7 h-7'/></span>
            </a>*/}

          </div>
        </div>

      </div>
    </>
  );
}

