import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "@fontsource-variable/raleway";

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
    <div className="text-left text-[#f2a366] flex flex-col gap-4 px-4">
      <h1
        className=" text-4xl md:text-5xl font-bold"
      >

        ¡VEN A NUESTRA BODA!
      </h1>


      <motion.p
        className="text-[#f9f1ec] text-xl font-semibold montserrat"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
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
        className=' montserrat flex flex-col gap-4'
      >

        <p className="text-2xl font-bold">
          Viernes 18 de Julio 2025
        </p>

        <h2 className="text-lg font-semibold text-[#f9f1ec]">
          Solo faltan:
        </h2>

        <div className="flex flex-col items-start gap-4">
          <div
            className="text-3xl font-semibold flex justify-center gap-6"
          >
            {[
              { value: timeLeft.days, label: 'días' },
              { value: timeLeft.hours, label: 'horas' },
              { value: timeLeft.minutes, label: 'minutos' },
              { value: timeLeft.seconds, label: 'segundos' },

            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className=' text-[#f7dac6]'>{item.value}</span>
                <div className="text-sm text-[#f7dac6]">{item.label}</div>
              </div>

            ))}
          </div>

          <a
            href="/rsvp"
            className="w-full flex justify-center p-4 rounded-sm bg-rose-950/80 shadow mt-4 text-[#f7dac6] montserrat font-semibold transition-all hover:bg-rose-950 hover:-translate-y-1 active:-translate-y-0.5 backdrop-blur-xl"
          >
            Confirmar asistencia
          </a>

          <a

            href="/gifts"
            className="w-full flex justify-center p-4 rounded-sm border-3 bg-rose-950/20 border-[#f7dac680] text-[#f7dac6] shadow montserrat font-semibold transition-all hover:border-[#f7dac6] hover:-translate-y-1 active:-translate-y-0.5 backdrop-blur-xl"
          >
            Ver lista de regalos
          </a>
        </div>
      </motion.div>

    </div>
  );
}

