import { motion } from 'framer-motion';
import '@fontsource/twinkle-star';
import '@fontsource/merriweather';

function ConfirmAttandence() {
  return (

    <section className="py-12 px-4 bg-white overflow-hidden">
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-[#7B2E2E] mb-8"
        style={{ fontFamily: "'Pacifico', cursive" }}

      >
        Confirmar asistencia
      </h2>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto bg-orange-50 p-6 rounded-2xl shadow-lg border border-gray-200"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-[#7B2E2E] font-semibold mb-1"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            placeholder="Escribe tu nombre..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B2E2E] bg-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="attendance"
            className="block text-[#7B2E2E] font-semibold mb-1"
            style={{ fontFamily: "'Merriweather', serif" }}
          >

            ¿Asistirás?
          </label>
          <select

            id="attendance"

            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B2E2E] bg-white"
          >
            <option value="">Selecciona una opción</option>
            <option value="yes">Sí, asistiré</option>

            <option value="no">No podré asistir</option>
          </select>
        </div>


        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-[#7B2E2E] font-semibold mb-1"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Correo electrónico (opcional)
          </label>

          <input
            type="email"
            id="email"
            placeholder="Escribe tu correo..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B2E2E] bg-white"
          />
          <p className="text-sm text-gray-400 mt-1">

            *Si deseas recibir avisos o recordatorios antes del evento, déjanos tu correo*
          </p>

        </div>

        <button
          type="button"
          className="w-full py-2 px-4 bg-[#7B2E2E] text-white font-semibold rounded-lg hover:bg-[#622323] transition-colors"
        >
          Confirmar
        </button>
      </motion.form>

    </section>
  );
}


export default ConfirmAttandence;

