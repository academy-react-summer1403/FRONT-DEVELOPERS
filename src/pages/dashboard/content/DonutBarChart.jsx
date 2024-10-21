import React from 'react'
import {  motion } from 'framer-motion'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';




const data = [
    {name:"Electronics" , value:8500},
    {name:"Clothing" , value:3200},


]

const COLORS = ["orange" , "white" ]


const DonutBarChart = () => {
  return (
    <motion.div className=' bg-opacity-50 backdrop-blur-md  rounded-xl p-6  w-[250px] h-[220px] -mt-[60px]'
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.3}}
    >
      
      <div className='h-[100%] w-[100%] relative'>
        <ResponsiveContainer
        width={"100%"}
        height={"100%"}
        >
            <h1 className='absolute top-[70px] left-[80px] text-gray-500 dark:text-white'>salam </h1>
      <PieChart >
        <Pie  
          
          data={data}
          cx={"50%"}
          cy={"50%"}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie> */}
      </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default DonutBarChart