import React from 'react'
import { Button } from "@nextui-org/react";


const Buton = ({onClick , text , icon , style}) => {
  return (
   <Button onClick={onClick} className={style} >
        <h1>
            {text}
        </h1>
        {icon}
   </Button>
  )
}

export default Buton