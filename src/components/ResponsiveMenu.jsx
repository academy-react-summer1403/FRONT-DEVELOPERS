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
    <AnimatePresence mode='wait' className="   ">
        {
            isOpen && <motion.div 
                initial={{opacity:0,x:200}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:200}}
                transition={{duration:0.3}}
                className=" 
                 lg:hidden "
            >
            
                    <ul className=' bg-gray-200 border w-[300px] absolute top-10 -right-40   rounded-[10px]
                    '>
                    {
            NavbarMenu.map((item)=>(
                <Link to={item.link} className=' w-full   cursor-pointer ' >
                <a href={item.link}  className=' w-[100%]  h-10 flex items-center'  >
                    
                        <h3 className='flex justify-end pr-3 w-[300px] border border-red-500 '>{item.title}</h3>
                </a></Link>
            ))
        }

                    </ul>
                
            </motion.div>
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu