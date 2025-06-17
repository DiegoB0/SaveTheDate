import { DollarSign, Package, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import '@fontsource/twinkle-star';
import '@fontsource/merriweather';

export default function GiftsSection() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },

  };

  const cards = [
    {
      title: 'Efectivo',
      icon: <DollarSign className="w-12 h-12 text-[##f7dac6]" />,

      description: 'Puedes hacernos un regalo en efectivo el día del evento.',
      link: null,
    },
    {
      title: 'Amazon',
      icon: <Package className="w-12 h-12 text-[##f7dac6]" />,
      description: 'Tenemos una lista de regalos disponible en Amazon.',
      link: '/gifts',
    },
    {
      title: 'Liverpool',
      icon: <Gift className="w-12 h-12 text-[##f7dac6]" />,
      description: 'Consulta nuestra mesa de regalos en Liverpool.',
      link: '/gifts',
    },
  ];

  return (

    <section className="relative overflow-hidden">

      <div className="py-12 px-4 max-w-6xl mx-auto">
        <h2
          className="text-5xl font-bold text-center text-[#f2a366] mb-8"
        >
          LISTA DE REGALOS
        </h2>

        <motion.p
          className="text-center text-2xl font-semibold text-[#f7dac6] mb-12 montserrat"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}

        >
          Si nos quieres tener un detalle
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 md:px-0">
          {cards.map((card, index) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-4 rounded-xs p-6 shadow text-center cursor-pointer bg-rose-950/20 transition-all hover:-translate-y-1 backdrop-blur-xs"

              >
                <div className="flex justify-center mb-4 ">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-[#f2a366] montserrat">{card.title}</h3>
                <p className="text-white text-lg montserrat">

                  {card.description}
                </p>
              </motion.div>
            );

            return card.link ? (
              <a href={card.link} key={index}>
                {content}
              </a>

            ) : (
              <div key={index}>{content}</div>

            );
          })}
        </div>
      </div>
    </section>

  );

}

