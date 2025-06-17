import { motion, useAnimation, useInView } from 'framer-motion';
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
    <section className="py-24 xl:px-4 bg-rose-950/10">
      <motion.h2

        className="text-5xl font-bold text-center text-[#f2a366] mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >

        ¿DÓNDE Y CUANDO?
      </motion.h2>

      <div className=" px-4 xl:px-32 mx-auto flex flex-col md:flex-row gap-14 montserrat">
        <motion.div
          ref={leftRef}

          variants={fadeInUp}
          initial="hidden"
          animate={leftControls}
          className="min-h-[150px] flex flex-col gap-3 xl:text-right md:mt-14"
        >
          <h3 className="text-2xl font-semibold text-[#f7dac6] mr-2">
            UBICACIÓN
          </h3>
          <p className="text-white text-xl montserrat">
            Av. Universidad S/N, Fracc. Villa Universitaria, Durango, México
          </p>
          <h3 className="text-2xl font-semibold text-[#f7dac6] mr-2">
            HORARIO
          </h3>
          <p className="text-white text-xl montserrat">
            La recepción comienza a las 8:00 PM
          </p>
          <div className='flex justify-center xl:justify-end mt-4'>
            <a
              href="/itinerary"
              className="w-2/3 xl:ml-auto flex justify-center p-4 rounded-sm border-3 border-[#f7dac680] text-[#f7dac6] bg-rose-950/20 hover:border-[#f7dac6] shadow montserrat font-semibold transition-all hover:opacity-100 hover:-translate-y-1 active:-translate-y-0.5 backdrop-blur-xl"
            >
              Ver programa
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
            whileTap={{ scale: 0.98 }}
            className="w-full h-[26rem] rounded-lg overflow-hidden min-h-[256px] transition-all hover:-translate-y-2"
          >
            <motion.img
              src="/wedding_location.jpeg"
              alt="Ubicación del evento"
              className="object-cover w-full h-full"
              style={{ cursor: 'pointer' }}
            />
          </motion.div>
          <motion.div 
            className='flex justify-start py-4'
            variants={fadeInUp}
            initial="hidden"
            animate={rightControls}
          >
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Av.+Universidad+S%2FN%2C+Fraccionamiento+Villa+Universitaria%2C+Durango%2C+Mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center p-4 rounded-sm bg-rose-950/80 shadow mt-4 text-[#f7dac6] montserrat font-semibold transition-all hover:bg-rose-950 hover:-translate-y-1 active:-translate-y-0.5 backdrop-blur-xl"
            >
              Ir al mapa
              <MapPinned className="w-6 h-6 ml-4" />
            </a>
          </motion.div>
        </a>

        {/*<motion.div
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
        </motion.div>*/}

      </div>
    </section>
  );
}


