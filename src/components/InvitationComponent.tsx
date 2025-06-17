import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function InvitationComponent({ data }: { data: any }) {

    const [openEnvelope, setOpenEnvelope] = useState(false)
    const [currentQrIndex, setCurrentQrIndex] = useState(0)

    const [isDownloading, setIsDownloading] = useState(false)

    async function handleDownload() {
        setIsDownloading(true);
        const pdfUrl = data[0].pdfiles[0];

        console.log(pdfUrl)

        const fileName = `invitacion-${data[0].guestName}`;

        try {

            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);

        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download PDF. Please try again.');
        } finally {
            setIsDownloading(false);
        }
    }

    return (
        <motion.div
            className=' fixed inset-0 bg-[#1c0009] z-[60]'
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            onClick={() => {
                if (!openEnvelope) setOpenEnvelope(true)
            }}
        >
            <div
                className="fixed inset-0 opacity-[0.01] z-[61]"
                style={{
                    backgroundImage: 'url(/bg.png)',
                    backgroundSize: '500px 500px'
                }}
            />
            <motion.div
                className=' fixed left-0 top-0 bottom-0 right-[49%] bg-[#fde8d7] shadow-2xl rounded-sm'
                animate={{
                    x: openEnvelope ? "-70vw" : '0'
                }}
                transition={{
                    duration: 0.75
                }}
            />
            <motion.div
                className=' fixed right-0 top-0 bottom-0 left-[49%] bg-[#fde8d7] shadow-2xl z-10 rounded-sm'
                animate={{
                    x: openEnvelope ? "70vw" : '0'
                }}
                transition={{
                    duration: 0.75
                }}
            />
            <Stamp openEnvelope={openEnvelope} />
            {/*Contenido*/}
            <motion.div
                animate={{
                    translateY: openEnvelope ? 0 : 10,
                    opacity: openEnvelope ? 1 : 0
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.5
                }}
                className='fixed inset-0 z-[70] flex flex-col gap-4 justify-center items-center w-full h-full text-center opacity-0'>
                <p className=' text-[#f2a366] text-5xl'>V & C</p>
                <p className=' text-[#f7dac6] text-xl mt-4 montserrat'>
                    Invitado: <span className=' opacity-70'>{data[0].guestName}</span>
                </p>
                {
                    !!data[0].additionals && (
                        <p className=' text-[#f7dac6] text-xl montserrat'>
                            Acompañantes:  <span className=' opacity-70'>{data[0].additionals}</span>
                        </p>
                    )
                }
                <p className=' text-[#f7dac6] text-xl montserrat'>
                    Fecha:  <span className=' opacity-70'>Viernes 18 de Julio</span>
                </p>
                <p className=' text-[#f7dac6] text-xl montserrat'>
                    Lugar:  <span className=' opacity-70'>Jardin y Salón Velvet</span>
                </p>
                <img src={data[0].qrCodes[currentQrIndex]} className=' w-40 h-40 mt-4 rounded-xs' alt='Código qr' />
                {
                    data[0].qrCodes.map((qr: string, index: number) => {

                        if (data[0].qrCodes.length = 1) return null

                        return (
                            <button onClick={() => setCurrentQrIndex(index)} className={` border-x-[1px] border-y-2 ${index == 0 && 'border-l-2'} ${index == data[0].qrCodes.length - 1 && 'border-r-2'} px-3 py-0.5 text-lg montserrat ${currentQrIndex == index && 'bg-rose-900'}`}>
                                {index}
                            </button>
                        )
                    })
                }
                <div className='grid grid-cols-2 gap-4 max-w-2xl w-[75vw] mt-8'>
                    <a
                        href="/rsvp"
                        className="w-full flex justify-center py-2 rounded-sm bg-rose-950/80 shadow text-[#f7dac6] montserrat font-semibold transition-all hover:bg-rose-950 hover:-translate-y-1 active:-translate-y-0.5 backdrop-blur-xl"
                    >
                        Volver
                    </a>

                    <button
                        disabled={isDownloading}
                        onClick={handleDownload}
                        className={`w-full flex justify-center py-2 rounded-sm border-3 bg-rose-950/20 border-[#f7dac680] text-[#f7dac6] shadow montserrat font-semibold transition-all hover:border-[#f7dac6] hover:-translate-y-1 active:-translate-y-0.5 backdrop-blur-xl ${isDownloading && 'opacity-60 pointer-events-none'}`}
                    >
                        Descargar
                    </button>
                </div>

                <motion.div animate={{ x: openEnvelope ? 0 : -40, opacity: openEnvelope ? 1 : 0 }} transition={{ delay: 0.75 }} className='absolute left-3 top-6  w-3 h-3 bg-[#f2a366] rounded-2xl opacity-0' />
                <motion.div animate={{ x: openEnvelope ? 0 : -40, opacity: openEnvelope ? 1 : 0 }} transition={{ delay: 0.75 }} className='absolute left-4 top-12 bottom-12 w-1 bg-[#f2a366] rounded-2xl opacity-0' />
                <motion.div animate={{ x: openEnvelope ? 0 : -40, opacity: openEnvelope ? 1 : 0 }} transition={{ delay: 0.75 }} className='absolute left-3 bottom-6  w-3 h-3 bg-[#f2a366] rounded-2xl opacity-0' />
                <motion.div animate={{ x: openEnvelope ? 0 : 40, opacity: openEnvelope ? 1 : 0 }} transition={{ delay: 0.75 }} className='absolute right-4 top-12 bottom-12 w-1 bg-[#f2a366] round opacity-0d-2xl ' />
                <motion.div animate={{ x: openEnvelope ? 0 : 40, opacity: openEnvelope ? 1 : 0 }} transition={{ delay: 0.75 }} className='absolute right-3 top-6  w-3 h-3 bg-[#f2a366] rounded-2xl ' />
                <motion.div animate={{ x: openEnvelope ? 0 : 40, opacity: openEnvelope ? 1 : 0 }} transition={{ delay: 0.75 }} className='absolute right-3 bottom-6  w-3 h-3 bg-[#f2a366] rounded-2xl opacity-0' />
            </motion.div>
        </motion.div>
    )
}


function Stamp({ openEnvelope }: { openEnvelope: boolean }) {

    return (
        <>
            <motion.div
                className='fixed left-1/2 top-[33%] p-2 px-4 rounded-full bg-[#fde8d7] -translate-x-[50%] flex shadow-md z-[21] border-2 border-rose-950/50'
                animate={{
                    opacity: openEnvelope ? 0 : 1
                }}
                transition={{
                    duration: 0.5
                }}
            >
                <p className=' text-xl montserrat text text-rose-950'>¡Haz click aqui!</p>
            </motion.div>
            <motion.div
                className={` fixed left-1/2 top-1/2 h-28 w-28 rounded-full bg-rose-900 z-20 -translate-[53%] flex justify-center items-center shadow-md`}
                animate={{
                    x: openEnvelope ? "70vw" : '0'
                }}
                transition={{
                    duration: 0.75
                }}
            >
                <motion.div
                    className=' h-20 w-20 rounded-full bg-rose-950/50 flex justify-center items-center inset-shadow-2xs z-20'
                >
                    <p className=' text-3xl text-rose-900 font-bold text-shadow-md'>V&C</p>
                </motion.div>
                <motion.div
                    className=' h-20 w-20 rounded-full bg-rose-900 absolute left-1/2 top-1/2 -translate-[70%]'
                />
                <motion.div
                    className=' h-24 w-24 rounded-full bg-rose-900 absolute left-1/2 top-1/2 -translate-[40%]'
                />
                <motion.div
                    className=' h-18 w-18 rounded-full bg-rose-900 absolute left-1/2 top-1/2 -translate-x-[30%] -translate-y-[80%]'
                />
            </motion.div>
            <motion.div
                className={` fixed left-1/2 top-1/2 h-[7.2rem] w-[7.2rem] rounded-full bg-[#d1bead] blur-xs z-[19] -translate-[53%] flex justify-center items-center shadow-md`}
                animate={{
                    x: openEnvelope ? "65vw" : '0',
                    opacity: openEnvelope ? '0' : '1'
                }}
                transition={{
                    duration: 0.75
                }}
            >
                <motion.div
                    className=' h-[5.2rem] w-[5.2rem] rounded-full bg-[#d1bead] blur-xs absolute left-1/2 top-1/2 -translate-[70%]'
                />
                <motion.div
                    className=' h-[6.2rem] w-[6.2rem] rounded-full bg-[#d1bead] blur-xs absolute left-1/2 top-1/2 -translate-[40%]'
                />
                <motion.div
                    className=' h-[4.65rem] w-[4.65rem] rounded-full bg-[#d1bead] blur-xs absolute left-1/2 top-1/2 -translate-x-[30%] -translate-y-[80%]'
                />
            </motion.div>
        </>
    )

}