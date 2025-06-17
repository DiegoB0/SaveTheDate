import { AnimatePresence, motion } from 'framer-motion';
import '@fontsource/twinkle-star';
import '@fontsource/merriweather';
import { useRef, useState } from 'react';
import api from '../../lib/api';
import { Flip, Slide, toast, ToastContainer } from 'react-toastify'
import { FaFrown, FaGrin } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { navigate } from 'astro/virtual-modules/transitions-router.js';
import InvitationComponent from './InvitationComponent';

function ConfirmAttandence() {

  const [values, setValues] = useState({
    name: '',
    willAttend: '',
    email: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    willAttend: '',
    email: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const toastId = useRef<any>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setErrors({
      name: '',
      email: '',
      willAttend: ''
    })

    let hasErrors = false


    if (!values.name) {
      setErrors(prev => ({ ...prev, name: 'El nombre es obligatorio' }))
      toast.error(`El campo del nombre es obligatorio`)
      hasErrors = true
    }
    if (!values.willAttend) {
      setErrors(prev => ({ ...prev, willAttend: 'Es necesario seleccionar al menos una opción' }))
      toast.error(`Es necesario especificar asistencia`)
      hasErrors = true
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (values.email && !emailRegex.test(values.email)) {
      setErrors(prev => ({ ...prev, email: 'El correo electrónico proporcionado no es válido' }))
      toast.error(`El correo proporcionado no es válido`)
      hasErrors = true
    }

    if (hasErrors) return

    setIsLoading(true)

    try {

      toastId.current = toast.info('Buscando invitación...', {autoClose: false, icon: <AiOutlineLoading className=' animate-spin'/>})

      const willAttend = values.willAttend === 'yes' ? 'true' : 'false'

      const response = await api.get(`tickets/info/${values.name}?confirmAttendance=${willAttend}&email=${values.email}`)

      setData(response.data)

      toast.update(toastId.current, {render: '¡Invitación encontrada!', type: 'warning', icon: <FaGrin className=' text-2xl'/>})
      setIsLoading(false)

    } catch (error) {
      setIsLoading(false)
      //setTimeout(() => navigate('/'), 3000)
      //@ts-expect-error
      if (error?.response?.data?.error?.includes('not found')) {
        toast.update(toastId.current, {render: `Lo sentimos, no se encontró al invitado ${values.name}`, type: 'error'})
        return
      }
      //@ts-expect-error
      if (error?.response?.data?.error?.includes('must confirm')) {
        toast.update(toastId.current, {render: `Lamentamos que no puedas asistir, pero agradecemos que nos hayas confirmado`, type: 'warning', icon: <FaFrown className=' text-2xl'/>})
        return
      }
      toast.update(toastId.current, {render: `Ocurrió un error inesperado, por favor intentalo de nuevo más tarde`, type: 'error'})

    } finally{
      setTimeout(() => {
        toast.dismiss(toastId.current)
      }, 3000);
    }

  }

  return (
    <>
     <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />

    {
      data ? (
        <InvitationComponent data={data}/>
      ) : (
        
        <AnimatePresence>
          <motion.section 
            className="py-12 px-4 overflow-hidden"
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 0.5
            }}
          >
            <h2
              className="text-5xl font-bold text-center text-[#f2a366] mb-12"
            >
              CONFIRMA TU ASISTENCIA
            </h2>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl mx-auto sm:p-8 rounded-xs shadow-lg sm:bg-red-950/30 backdrop-blur-sm sm:border-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 montserrat">
                <label
                  htmlFor="name"
                  className="block text-[#f7c8a3] font-semibold mb-1"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Escribe tu nombre..."
                  className="w-full text-white/80 px-4 py-2 rounded-xs border-b-2 border-[#f7c8a3] focus:outline-none bg-rose-950/40 shadow focus:bg-rose-950/65 text-sm focus:[box-shadow:0_3px_5px_#f7c8a335]"
                  value={values.name}
                  onChange={e => setValues(prev => ({ ...prev, name: e.target.value || '' }))}
                  required
                />
                <p className=' text-xs text-rose-700 mt-2'>
                  {errors.name}
                </p>
              </div>

              <div className="mb-4 montserrat">
                <label
                  htmlFor="attendance"
                  className="block text-[#f7c8a3] font-semibold mb-1"
                >

                  ¿Asistirás?
                </label>
                <div className='flex gap-6'>
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                      htmlFor="willAttend"
                      data-ripple-dark="true"
                    >
                      <input
                        id="willAttend"
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-rose-950 checked:bg-rose-950 checked:before:bg-rose-950 hover:before:opacity-10"
                        checked={values.willAttend === 'yes'}
                        onChange={() => setValues(prev => ({ ...prev, willAttend: 'yes' }))}
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <label
                      className={`mt-px cursor-pointer select-none font-light text-white ${values.willAttend === 'yes' ? 'opacity-80' : 'opacity-50'}`}
                      htmlFor="willAttend"
                    >
                      Si, asistiré
                    </label>
                  </div>
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                      htmlFor="wontAttend"
                      data-ripple-dark="true"
                    >
                      <input
                        id="wontAttend"
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-rose-950 checked:bg-rose-950 checked:before:bg-rose-950 hover:before:opacity-10"
                        checked={values.willAttend == 'no'}
                        onChange={() => setValues(prev => ({ ...prev, willAttend: 'no' }))}
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <label
                      className={`mt-px cursor-pointer select-none font-light text-white ${values.willAttend === 'no' ? 'opacity-80' : 'opacity-50'}`}
                      htmlFor="wontAttend"
                    >
                      No podré asistir
                    </label>
                  </div>
                </div>
              </div>
              <p className=' text-xs text-rose-700 -mt-4 mb-2 montserrat'>
                {errors.willAttend}
              </p>

              <div className="mb-4 montserrat">
                <label
                  htmlFor="email"
                  className="block text-[#f7c8a3] font-semibold mb-1"
                >
                  Correo electrónico (opcional)
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="Escribe tu correo..."
                  className="w-full text-white/80 px-4 py-2 rounded-xs border-b-2 border-[#f7c8a3] focus:outline-none bg-rose-950/40 shadow focus:bg-rose-950/65 text-sm focus:[box-shadow:0_3px_5px_#f7c8a335]"
                  onChange={e => setValues(prev => ({ ...prev, email: e.target.value || '' }))}
                />
                <p className="text-xs text-[#f7c8a3] opacity-80 mt-1">

                  *Si deseas recibir avisos o recordatorios antes del evento, déjanos tu correo*
                </p>
                <p className=' text-xs text-rose-700 mt-2 montserrat'>
                  {errors.email}
                </p>
              </div>
              <button
                disabled={isLoading}
                type='submit'
                className={` cursor-pointer w-full flex justify-center p-4 rounded-sm bg-rose-950/80 shadow mt-4 text-[#f7dac6] montserrat font-semibold transition-all hover:bg-rose-950 hover:-translate-y-1 active:-translate-y-0.5 backdrop-blur-xl relative ${isLoading && 'pointer-events-none opacity-75'}`}
              >
                {isLoading && <AiOutlineLoading className=' animate-spin text-2xl absolute left-4'/>}
                Confirmar
              </button>
            </motion.form>
          </motion.section>
        </AnimatePresence>
      )
    }
    </>
  );
}


export default ConfirmAttandence;

