import { motion, useAnimation, useInView } from 'framer-motion';
import '@fontsource/merriweather';
import '@fontsource/pacifico';
import { MapPin, MapPinned } from 'lucide-react';
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
    <section className="py-12 px-4 overflow-hidden">
      <h2
        className="text-5xl font-bold text-center text-[#f2a366] mb-16"
      >
        PROGRAMA
      </h2>

      <div
        ref={ref}
        className="flex justify-center montserrat"
      >
        <div className='px-2 sm:px-4 xl:px-32 rounded-xs h-[250dvh] w-full grid gid-rows-3'>
          <div 
             className=' w-5 h-5 rounded-full bg-[#f7dac6] absolute -translate-y-8 -translate-x-1.5 xl:-translate-x-0 xl:justify-self-center'
          />
          <div
            className=' w-2 rounded-3xl h-[250dvh] bg-[#f7dac6] absolute xl:justify-self-center'
          />
            <div 
             className=' w-5 h-5 rounded-full bg-[#f7dac6] absolute translate-y-[calc(250dvh+0.8rem)] -translate-x-1.5 xl:-translate-x-0 xl:justify-self-center'
          />
          <div className=' xl:grid xl:grid-cols-5 items-center'>
            <div className=' mt-36 xl:mt-0 ml-8 xl:ml-0 w-[min(80vw,40rem)] xl:w-full p-8 border-4 bg-red-950/50 shadow col-span-2 flex flex-col gap-6 relative rounded-xs backdrop-blur-xs'>
              <div className=' h-16 w-16 rounded-full border-4 border-[#f7dac6] shadow absolute -top-30 flex justify-center items-center left-1/2 -translate-x-1/2 opacity-80'>
                <div className=' h-8 w-8 rounded-full bg-[#f7dac6] ' />
                <div className=' h-1.5 w-[min(30vw,15rem)] xl:w-[18vw] rounded-3xl bg-[#f7dac6] absolute right-20 xl:left-20' />
              </div>
              <h1 className=' text-center text-3xl underline underline-offset-8'> 18:00 HRS </h1>
              <h2 className=' text-center text-2xl text-white'>MISA</h2>
              <p className=' text-white text-center opacity-85'>Rio Balsas, valle del sur, 34120 Durango Dgo</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+Universidad+S%2FN%2C+Fraccionamiento+Villa+Universitaria%2C+Durango%2C+Mexico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center p-4 rounded-sm bg-rose-950/80 shadow mt-4 text-[#f7dac6] montserrat font-semibold transition-all hover:bg-rose-950 hover:-translate-y-1 active:-translate-y-0.5"
              >
                Ver el mapa
                <MapPinned className="w-6 h-6 ml-4" />
              </a>
            </div>
          </div>

          <div className='xl:grid items-center xl:grid-cols-5'>
            <div className=' mt-36 xl:mt-0 ml-8 xl:ml-0  w-[min(80vw,40rem)] xl:w-full p-8 border-4 bg-red-950/50 shadow col-span-2 col-start-4 flex flex-col gap-6 relative rounded-xs backdrop-blur-xs'>
              <div className=' h-16 w-16 rounded-full border-4 border-[#f7dac6] shadow absolute -top-30 flex justify-center items-center left-1/2 -translate-x-1/2 opacity-80' >
                <div className=' h-8 w-8 rounded-full bg-[#f7dac6] ' />
                <div className=' h-1.5 w-[min(30vw,15rem)] xl:w-[18vw] rounded-3xl bg-[#f7dac6] absolute right-20' />
              </div>
              <h1 className=' text-center text-3xl underline underline-offset-8'> 20:00 HRS </h1>
              <h2 className=' text-center text-2xl text-white'>BODA CIVIL</h2>
              <p className=' text-white text-center opacity-85'>Jardin y Salon Velvet</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+Universidad+S%2FN%2C+Fraccionamiento+Villa+Universitaria%2C+Durango%2C+Mexico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center p-4 rounded-sm bg-rose-950/80 shadow mt-4 text-[#f7dac6] montserrat font-semibold transition-all hover:bg-rose-950 hover:-translate-y-1 active:-translate-y-0.5"
              >
                Ver el mapa
                <MapPinned className="w-6 h-6 ml-4" />
              </a>
            </div>
          </div>
          <div className='xl:grid items-center xl:grid-cols-5'>
            <div className=' mt-36 xl:mt-0 ml-8 xl:ml-0  w-[min(80vw,40rem)] xl:w-full p-8 border-4 bg-red-950/50 shadow col-span-2 flex flex-col gap-6 relative rounded-xs backdrop-blur-xs'>
              <div className=' h-16 w-16 rounded-full border-4 border-[#f7dac6] shadow absolute -top-30 flex justify-center items-center left-1/2 -translate-x-1/2 opacity-80'>
                <div className=' h-8 w-8 rounded-full bg-[#f7dac6] ' />
                <div className=' h-1.5 w-[min(30vw,15rem)] xl:w-[18vw] rounded-3xl bg-[#f7dac6] absolute right-20 xl:left-20' />
              </div>
              <h1 className=' text-center text-3xl underline underline-offset-8'> 21:00 HRS </h1>
              <h2 className=' text-center text-2xl text-white'>RECEPCIÓN</h2>
              <p className=' text-white text-center opacity-85'>Jardin y Salón Velvet</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+Universidad+S%2FN%2C+Fraccionamiento+Villa+Universitaria%2C+Durango%2C+Mexico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center p-4 rounded-sm bg-rose-950/80 shadow mt-4 text-[#f7dac6] montserrat font-semibold transition-all hover:bg-rose-950 hover:-translate-y-1 active:-translate-y-0.5"
              >
                Ver el mapa
                <MapPinned className="w-6 h-6 ml-4" />
              </a>
            </div>
          </div>

        </div>
        {/*{eventData.map((event, index) => (


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

        ))}*/}
      </div>
    </section>
  );
}

