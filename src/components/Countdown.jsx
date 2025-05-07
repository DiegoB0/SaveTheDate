import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '@fontsource/twinkle-star';
import '@fontsource/merriweather';

import '@fontsource/pacifico';

const targetDate = new Date('2025-07-18T21:00:00-06:00').getTime();


function getTimeRemaining(targetTimestamp) {
  const now = Date.now();
  const total = targetTimestamp - now;

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

export default function Countdown() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const t = getTimeRemaining(targetDate);
      setTimeLeft(t);
      if (t.total <= 0) clearInterval(timer);
    }, 1000);


    return () => clearInterval(timer);
  }, []);


  return (
    <div className="text-center text-white space-y-4">
      <h1
        className="text-[#ffffff] text-4xl md:text-5xl font-bold font-twinkle-star"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >

        ¡Te invitamos a nuestra boda!
      </h1>


      <motion.p
        className="text-xl font-semibold text-orange-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ fontFamily: "'Merriweather', normal" }}
      >
        Nos casamos:
      </motion.p>

      {/* <p */}
      {/*   className="text-xl font-semibold text-orange-100" */}
      {/*   style={{ fontFamily: "'Merriweather', normal" }}> */}
      {/*   Nos casamos: */}
      {/* </p> */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >

        <p className="text-2xl font-bold" style={{ fontFamily: "'Merriweather', normal" }}>
          Viernes 18 de Julio 2025
        </p>

        <h2 className="text-lg italic" style={{ fontFamily: "'Merriweather', normal" }}>
          Solo faltan:
        </h2>

        <div className="flex flex-col items-center space-y-6">
          <div
            className="text-2xl font-semibold flex justify-center gap-6 mt-4"
            style={{ fontFamily: "'Merriweather', normal" }}
          >
            {[
              { value: timeLeft.days, label: 'días' },
              { value: timeLeft.hours, label: 'horas' },
              { value: timeLeft.minutes, label: 'minutos' },
              { value: timeLeft.seconds, label: 'segundos' },

            ].map((item, index) => (
              <div key={index} className="text-center">
                <span style={{ color: '#ffffff' }}>{item.value}</span>
                <div className="text-sm text-[#ffffff]">{item.label}</div>
              </div>

            ))}
          </div>

          <a
            href="/rsvp"
            className="border-2 border-orange-100 p-2 rounded-xl text-orange-100 font-semibold hover:bg-orange-100 hover:text-[#7B2E2E] transition-colors duration-200 ease-in-out"
          >
            Confirmar asistencia
          </a>

          <a

            href="/gifts"
            className="border-1 border-orange-100 p-2 text-[#7B2E2E] rounded-xl bg-orange-100 font-semibold hover:text-orange-100 hover:bg-[#7B2E2E] hover:border-[#7B2E2E] transition-colors duration-200 ease-in-out"
          >
            Ver lista de regalos
          </a>
        </div>
      </motion.div>

    </div>
  );
}

