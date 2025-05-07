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
    <section className="bg-orange-100 py-12 px-4">
      <motion.h2
        className="text-3xl font-bold text-center text-[#7B2E2E] mb-8"
        style={{ fontFamily: "'Pacifico', cursive" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Vista del lugar

      </motion.h2>

      <motion.div
        className="relative w-full max-w-6xl mx-auto overflow-hidden"
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
              className={`w-full ${isDesktop ? 'md:w-1/3' : 'w-full'} aspect-[4/3] p-1`}
            >
              <motion.img
                src={src}
                alt={`Velvet ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-md"
                whileHover={{
                  scale: 1.03,
                  filter: 'brightness(1.05)',
                  transition: { type: 'spring', stiffness: 200 },
                }}
              />

              {/* <img */}
              {/*   src={src} */}
              {/*   alt={`Velvet ${index + 1}`} */}
              {/*   className="w-full h-full object-cover rounded-xl shadow-md" */}
              {/* /> */}

            </div>
          ))}
        </motion.div>

        {/* Arrows */}
        <button

          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white z-10"
          onClick={prev}
        >
          <ChevronLeft className="w-6 h-6 text-[#7B2E2E]" />
        </button>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white z-10"
          onClick={next}
        >
          <ChevronRight className="w-6 h-6 text-[#7B2E2E]" />
        </button>
      </motion.div>

      {/* Pagination Dots */}

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalGroups }).map((_, i) => (
          <button

            key={i}

            onClick={() => setCurrentGroup(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === currentGroup ? 'bg-[#7B2E2E]' : 'bg-[#7B2E2E]/30'
              }`}
          />
        ))}

      </div>
    </section>
  );
}

