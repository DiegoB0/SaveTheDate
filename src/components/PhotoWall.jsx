import { motion } from 'framer-motion';
import { Camera, CameraIcon } from 'lucide-react';
import '@fontsource/twinkle-star';
import '@fontsource/merriweather';


function PhotoWall() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },

  };

  return (
    <section className="min-h-screen py-12 px-4 overflow-hidden relative">
      <h2
        className="text-5xl font-bold text-center text-[#f2a366] mb-6"
      >
        MURAL DE FOTOS
      </h2>

      <motion.p
        className="text-center text-2xl font-semibold text-[#f7dac6] mb-8 montserrat"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Ayudanos a capturar momentos especiales de nuestra boda
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <label className=" flex justify-center p-4 px-12 w-fit mx-auto cursor-pointer rounded-sm bg-rose-950/80 shadow mt-4 text-[#f7dac6] montserrat font-semibold transition-all hover:bg-rose-950 hover:-translate-y-1 active:-translate-y-0.5">
          <CameraIcon className=' mr-4 -mt-0.5'/>
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

        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-full aspect-square bg-black/60 rounded-xs animate-pulse"

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

