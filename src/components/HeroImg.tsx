import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },

};


export default function HeroImg() {

    const boundingRef = useRef<DOMRect | null>(null)

    const [xRotation, setXRotation] = useState(0)
    const [yRotation, setYRotation] = useState(0)


    return (
        <motion.div
            className='relative [perspective:1500px] w-4/5 sm:w-3/5 xl:h-4/5 xl:w-[30%] mb-2 xl:mb-0'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <img
                src='/kiss.jpg'
                className='xl:absolute inset-0 opacity-80 sepia-[30%] shadow inset-shadow-2xs border-4  border-[#f2a366] inline-block w-fit rounded-xs'
                style={{ transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)` }}
                onMouseEnter={(ev) => {
                    boundingRef.current = ev.currentTarget.getBoundingClientRect()
                }}
                onMouseMove={(ev) => {
                    if (!boundingRef.current) return
                    const x = ev.clientX - boundingRef.current.left
                    const y = ev.clientY - boundingRef.current.top;
                    const xPercentage = x / boundingRef.current.width;
                    const yPercentage = y / boundingRef.current.height;

                    const xRotationVal = (xPercentage - 0.5) * 10
                    const yRotationVal = ((yPercentage - 0.5) * 10) * -1

                    //if (xPercentage >= 0 && yPercentage <= 1) {
                    setXRotation(yRotationVal)
                    setYRotation(xRotationVal)

                    //if (xPercentage > 0.15 && yPercentage > 0.15) {
                    ev.currentTarget.style.setProperty('--x', `${xPercentage * 100}%`)
                    ev.currentTarget.style.setProperty('--y', `${yPercentage * 100}%`)
                    //}
                    //}
                }}
            //onMouseLeave={() => {
            //    setXRotation(0)
            //    setYRotation(0)
            //}}
            />
        </motion.div>
    )
}
