import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { useCourseDash} from '../../core/services/query/DashboardQuery'


// images:
import react2 from '../../assets/articles and news/Ellipse 39.svg';
import angular from '../../assets/articles and news/Ellipse 39(2).svg';
import figma2 from '../../assets/articles and news/Ellipse 39(1).svg';

import AOS from "aos";
import 'aos/dist/aos.css';

const Favorite = () => {
    const { t } = useTranslation(); // Initialize translation

    const params = {
        RowsOfPage : 3,
        PageNumber : 1
      }
    
      const getCourseDash =  useCourseDash(params)
      console.log(getCourseDash.data?.courseFilterDtos)
      

   
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
            className='bg-white dark:bg-gray-700/70 shadow rounded-xl my-8 p-4 max-sm:mx-4'
        >
            <div className='text-center'>
                <h3 className='text-lg font-medium text-darkgreen dark:text-white mb-2'>{t("favorite_courses")}</h3> {/* Use t() for translation */}
                <p className='text-sm text-gray-400 dark:text-gray-300'>{t("best_things_to_learn")}</p> {/* Use t() for translation */}
            </div>
            {getCourseDash.data?.courseFilterDtos.map((item, key) => (
                <NavLink to={"/courses-detail/" + item.courseId} key={key} className='relative flex flex-row my-4'>
                    <img data-aos="flip-right" data-aos-duration="700" src={figma2} className='z-[9999]' />
                    <div
                        data-aos="fade-right" data-aos-duration="800"
                        className='absolute bg-gray-100 dark:bg-gray-500/70 w-[82%] right-0 my-2 p-4 text-right shadow rounded-lg
                        max-sm:w-[95%]
                        max-md:w-[92%] 
                        max-lg:w-[92%]'
                    >
                                    <p className='text-[11px] font-medium text-darkgreen/80 dark:text-white mb-2'>{item?.title}</p>
                                    <NavLink  to={"/courses-detail/" + item.courseId} className='text-[10px] text-green/80 flex flex-row-reverse '>
                                    {t("view_articles")}<IoIosArrowBack className='mt-[3px]'/>
                                    </NavLink>
                                </div>
                            </NavLink>
                        ))}
                        
                       
            </motion.div>        
            
      
      )
}

export default Favorite