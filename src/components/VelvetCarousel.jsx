import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import '@fontsource/pacifico';

const images = [
  '/velvet1.jpeg',
  '/velvet2.jpeg',
  '/velvet3.jpeg',
  '/velvet4.jpeg',
  '/velvet5.jpeg',
  '/velvet6.jpeg',

];


export default function VelvetCarousel() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 768);
    update();
    window.addEventListener('resize', update);

    return () => window.removeEventListener('resize', update);

  }, []);

  const visibleCount = isDesktop ? 3 : 1;
  const totalGroups = Math.ceil(images.length / visibleCount);

  const next = () => setCurrentGroup((prev) => (prev + 1) % totalGroups);
  const prev = () => setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  return (
    <section className="py-12 min-h-[calc(100vh-6rem)] bg-rose-950/20">
      <motion.h2
        className="text-5xl font-bold text-center text-[#f7dac6] mt-4 mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        VISTA DEL LUGAR
      </motion.h2>
      <div className='bg-[#1c0009] backdrop-blur-xs w-full shadow-md'>     
        <motion.div
          className="relative w-full max-w-[90vw] mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div

            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${(images.length / visibleCount) * 100}%`,
              transform: `translateX(-${(100 / totalGroups) * currentGroup}%)`,
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className={`w-full ${isDesktop ? 'md:w-1/3' : 'w-full'} aspect-[4/3] p-2`}
              >
                <motion.img
                  src={src}
                  alt={`Velvet ${index + 1}`}
                  className="w-full h-full object-cover shadow-m rounded-xs transition-all hover:translate-y-0.5 hover:brightness-105 opacity-95"
                />
              </div>
            ))}
          </motion.div>

          {/* Arrows */}
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#f7dac6] p-2 rounded-full z-10 cursor-pointer transition-all hover:-translate-y-[45%]"
            onClick={prev}
          >
            <ChevronLeft className="w-8 h-8 text-rose-950" />
          </button>
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#f7dac6] p-2 rounded-full z-10 cursor-pointer transition-all hover:-translate-y-[45%]"
            onClick={next}
          >
            <ChevronRight className="w-8 h-8 text-rose-950" />
          </button>
        </motion.div>
      </div>

      {/* Pagination Dots */}

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalGroups }).map((_, i) => (
          <button

            key={i}

            onClick={() => setCurrentGroup(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === currentGroup ? 'bg-[#f7dac675]' : 'bg-[#f7dac650]'
              }`}
          />
        ))}

      </div>
    </section>
  );
}

