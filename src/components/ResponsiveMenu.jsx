import { AnimatePresence , motion } from 'framer-motion'
import React from 'react'

const ResponsiveMenu = ({isOpen}) => {
  return (
    <AnimatePresence mode='wait'>
        {
            isOpen && <motion.div initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:-100}}
                transition={{duration:0.3}}
                className='absolute top-20 left-0 w-full h-screen 
                 lg:hidden  z-50'
            >
                <div className='text-xl font-semibold uppercase bg-primary
                text-white py-10 m-6 rounded-3xl  absolute w-[200px] h-[400px]  right-[20px] mx-auto z-50 '>
                    <ul className='flex flex-col justify-center items-center gap-10'>
                        <li>صفحه نخست</li>
                        <li>دوره ها</li>
                        <li>اساتید</li>
                        <li>اخبار و مقالات</li>
                        <li>تماس با ما</li>

                    </ul>
                </div>
            </motion.div>
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu