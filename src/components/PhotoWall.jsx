import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import '@fontsource/twinkle-star';
import '@fontsource/merriweather';


function PhotoWall() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },

  };

  return (
    <section className="min-h-screen py-12 px-4 bg-orange-100 overflow-hidden relative">
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-[#7B2E2E] mb-6"

        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Mural de fotos
      </h2>

      <motion.p
        className="text-center font-semibold text-gray-400 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ fontFamily: "'Merriweather', normal" }}
      >
        Ayudanos a capturar momentos especiales de nuestra boda
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <label className="inline-block px-6 py-2 bg-[#7B2E2E] text-white font-semibold rounded-lg cursor-pointer hover:bg-[#622323] transition-colors">
          Subir foto
          <input

            type="file"
            accept="image/*"
            className="hidden"
          />
        </label>
      </motion.div>

      {/* Skeleton grid for photos */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}

        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-full aspect-square bg-white rounded-lg animate-pulse"

          />

        ))}
      </motion.div>

      {/* Floating circular camera button */}
      <button
        type="button"

        className="fixed bottom-6 right-6 bg-[#7B2E2E] text-white p-4 rounded-full shadow-lg transition-all block md:hidden"
        title="Tomar foto"
      >

        <Camera className="w-6 h-6" />
      </button>
    </section >
  );
}

export default PhotoWall;

