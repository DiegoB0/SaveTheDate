import { motion, useAnimation, useInView } from 'framer-motion';
import '@fontsource/merriweather';
import '@fontsource/pacifico';
import { MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const eventData = [
  {
    time: '18:00 Hrs',

    title: 'Misa',
    location: 'Rio Balsas, valle del sur, 34120 Durango Dgo',
  },
  {
    time: '20:00 Hrs',
    title: 'Boda Civil',
    location: 'Jardin y Salon Velvet',
  },
  {
    time: '21:00 Hrs',
    title: 'Recepcion',
    location: 'Jardin y Salon Velvet',
  },
];

export default function ItinerarySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const controls = useAnimation();


  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView]);

  return (
    <section className="py-12 px-4 bg-white overflow-hidden">
      <h2
        className="text-3xl font-bold text-center text-[#7B2E2E] mb-8"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Programa
      </h2>

      <div
        ref={ref}
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4"
      >
        {eventData.map((event, index) => (


          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="w-full max-w-md bg-white border-l-3 border-[#7B2E2E] relative pl-8 py-6 px-6 shadow-sm rounded-md"
          >
            <h3
              className="text-base font-semibold text-[#7B2E2E] flex flex-col gap-1 mb-1"
              style={{ fontFamily: "'Merriweather', normal" }}
            >
              {event.time}
              <span className="text-gray-500">{event.title}</span>
            </h3>
            <p className="text-gray-400 mb-2" style={{ fontFamily: "'Merriweather', normal" }}>
              {event.location}

            </p>
            <a
              href=""
              className="flex gap-2 text-[#7B2E2E] px-2 py-1 border-2 border-[#7B2E2E] rounded-lg w-fit hover:bg-[#7B2E2E] hover:text-white transition-colors duration-200 ease-in-out"
            >

              <MapPin className="h-4 w-4 mt-1" />
              Ver el mapa

            </a>
          </motion.div>

        ))}
      </div>
    </section>
  );
}

