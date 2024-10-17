import { AnimatePresence , motion } from 'framer-motion'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'




export const NavbarMenu =[ {
        id:1,
        title:"صفحه نخست",
        link:"/",
    },   {
        id:2,
        title:"دوره ها",
        link:"/courses",
    },  {
        id:3,
        title:"اساتید",
        link:"/Dashboard",
    },   {
        id:4,
        title:"اخبار و مقالات",
        link:"/article-news",
    },
    {
        id:5,
        title:"تماس با ما",
        link:"#",
    },
 
  
 
   
  ]

const ResponsiveMenu = ({isOpen}) => {
  return (
    <AnimatePresence mode='wait' className="">
        {
            isOpen && <motion.div 
                initial={{opacity:0,x:200}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:200}}
                transition={{duration:0.3}}
                className=" 
                 lg:hidden "
            >
            
                    <ul className='border border-red-500  bg-slate-100  w-[300px]  border max-sm:-right-28 absolute top-10 -right-32   rounded-[10px]
                    '>
                        {
                        NavbarMenu.map((item)=>(
                            <Link to={item.link} className=' w-full  cursor-pointer ' >
                            
                                
                                    <h3 className='flex justify-end pr-3 w-[300px] text-gray-800  hover:text-orange  border-b h-8'>{item.title}</h3>
                            </Link>
                        ))
                         }

                    </ul>
                
            </motion.div>
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu