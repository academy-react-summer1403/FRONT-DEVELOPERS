import { AnimatePresence , motion } from 'framer-motion'
import React from 'react'

const ResponsiveMenu = ({isOpen}) => {
  return (
    <AnimatePresence mode='wait' >
        {
            isOpen && <motion.div 
                initial={{opacity:0,x:200}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:200}}
                transition={{duration:0.3}}
                className="absolute right-0 h-screen w-96 border-2
                 lg:hidden "
            >
                <div className='text-xl font-semibold uppercase bg-primary z-[9999] border-2
                text-white py-10 px-4 rounded-3xl  absolute right-0 w-[200px] h-[400px]  right-[20px] mx-auto z-50 '>
                    <ul className='flex flex-col justify-center items-end gap-10'>
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