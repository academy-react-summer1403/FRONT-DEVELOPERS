import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {LessRange} from '../../core/redux/slices/QueryState/LessRangeSlice'

const RangeFilterTwo = ({min , max , value , bufferd , onChange}) => {

  const disPatch =useDispatch()

  // console.log(value)

  function mapToRange(value , min , max){
    value = Math.min(Math.max(value , min) , max)

    const percentage = (value - min) / (max - min);

    const mappedValue = percentage * 100;

    return mappedValue;


  }



  const [isDragging , setIsDragging] = useState(false)

  const handleChange = (e)=>{

    if(!onChange) return

      const {value} = e.target
      onChange(+value)
     disPatch(LessRange(value)) 
  }

  const handleDragStart = ()=>{
    if(onDragStart) onDragStart()
      setIsDragging(true)
   
  }

  const handleDragEnd = (e)=>{

    if(onDragEnd) onDragEnd(+e.currentTarget.value)
    setIsDragging(false)  
  }


  return (

      <div className='relative bg-white flex items-center rounded'>
        <input min={min} max={max} value={value} className='range-slider2 range-slider' type="range"
        onChange={handleChange}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        style={{zIndex: isDragging ? 1:2}}
        />

        <div style={{width:mapToRange(bufferd , min , max) + "%" }} className='absolute h-full bg-gray-300 rounded'></div>

        <div style={{width:mapToRange(value , min , max) + "%" }} className='absolute h-full bg-primary rounded'></div>
      </div>
       );
  
}

export default RangeFilterTwo
