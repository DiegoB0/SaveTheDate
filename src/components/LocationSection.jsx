import { motion, useAnimation, useInView } from 'framer-motion';
import '@fontsource/merriweather';
import '@fontsource/pacifico';
import { MapPinned, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },

};

export default function LocationSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: '0px 0px -100px 0px' });

  const rightInView = useInView(rightRef, { once: true, margin: '0px 0px -100px 0px' });

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (leftInView) leftControls.start('visible');
    if (rightInView) rightControls.start('visible');
  }, [leftInView, rightInView]);

  return (
    <section className="bg-white py-12 px-4">
      <motion.h2

        className="text-3xl font-bold text-center text-[#7B2E2E] mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ fontFamily: "'Pacifico', cursive" }}
      >

        ¿Dónde y Cuándo?
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          ref={leftRef}

          variants={fadeInUp}
          initial="hidden"
          animate={leftControls}
          className="min-h-[150px]"
        >
          <h3 className="text-base font-semibold text-[#7B2E2E]" style={{ fontFamily: "'Merriweather', normal" }}>
            Ubicación
          </h3>
          <p className="text-gray-500" style={{ fontFamily: "'Merriweather', normal" }}>
            Av. Universidad S/N, Fracc. Villa Universitaria, Durango, México
          </p>
          <br />
          <h3 className="text-base font-semibold text-[#7B2E2E]" style={{ fontFamily: "'Merriweather', normal" }}>
            Horario
          </h3>
          <p className="text-gray-500" style={{ fontFamily: "'Merriweather', normal" }}>
            La recepción comienza a las 8:00 PM
          </p>

          <div className='flex justify-start py-4'>
            <a
              href="/itinerary"
              className="rounded-lg mt-4 px-4 py-2 text-[#7B2E2E] border-2 border-[#7B2E2E] hover:bg-[#5e2323] hover:text-white transition-colors duration-200 ease-in-out flex gap-2"
            >
              Ver programa
              <ArrowRight />
            </a>
          </div>

        </motion.div>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Av.+Universidad+S%2FN%2C+Fraccionamiento+Villa+Universitaria%2C+Durango%2C+Mexico"
          target="_blank"
          rel="noopener noreferrer"
          className="block"

        >
          <motion.div
            ref={rightRef}
            variants={fadeInUp}
            initial="hidden"
            animate={rightControls}
            whileHover={{ scale: 1.03, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-64 rounded-lg overflow-hidden min-h-[256px]"
          >
            <motion.img
              src="/wedding_location.jpeg"
              alt="Ubicación del evento"
              className="object-cover w-full h-full"
              style={{ cursor: 'pointer' }}
              whileHover={{
                scale: 1.05,
                rotate: 2,

                transition: { type: 'spring', stiffness: 300 },
              }}
            />
          </motion.div>
        </a>

        <motion.div
          ref={rightRef}
          variants={fadeInUp}
          initial="hidden"
          animate={rightControls}
          whileHover={{ scale: 1.03, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          className="flex justify-center items-center font-semibold md:col-span-2"
        >

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Av.+Universidad+S%2FN%2C+Fraccionamiento+Villa+Universitaria%2C+Durango%2C+Mexico"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-[#7B2E2E] text-white rounded hover:bg-[#5e2323] transition-colors duration-200 ease-in-out flex gap-2"
          >
            <MapPinned className="w-4 h-4 mt-1" />
            Ir al mapa
          </a>
        </motion.div>

      </div>
    </section>
  );
}


