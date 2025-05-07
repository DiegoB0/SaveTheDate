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
      icon: <DollarSign className="w-8 h-8 text-[#7B2E2E]" />,

      description: 'Puedes hacernos un regalo en efectivo el día del evento.',
      link: null,
    },
    {
      title: 'Amazon',
      icon: <Package className="w-8 h-8 text-[#7B2E2E]" />,
      description: 'Tenemos una lista de regalos disponible en Amazon.',
      link: '/gifts',
    },
    {
      title: 'Liverpool',
      icon: <Gift className="w-8 h-8 text-[#7B2E2E]" />,
      description: 'Consulta nuestra mesa de regalos en Liverpool.',
      link: '/gifts',
    },
  ];

  return (

    <section className="relative min-h-screen overflow-hidden bg-white">

      <div className="py-12 px-4 max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold text-center text-[#7B2E2E] mb-8"
          style={{ fontFamily: "'Pacifico', cursive" }}

        >
          Lista de regalos
        </h2>

        <motion.p
          className="text-center font-semibold text-gray-400 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{ fontFamily: "'Merriweather', normal" }}
        >
          Si nos quieres tener un detalle
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-orange-100 rounded-2xl p-6 shadow-lg text-center cursor-pointer"

              >
                <div className="flex justify-center mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#7B2E2E] mb-2">{card.title}</h3>
                <p className="text-gray-600" style={{ fontFamily: "'Merriweather', normal" }}>

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

