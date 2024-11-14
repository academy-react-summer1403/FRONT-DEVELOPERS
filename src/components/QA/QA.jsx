import React from 'react'
import {Textarea} from "@nextui-org/react";

const QA = () => {
  return (
    <div> <Textarea
    
      isReadOnly
      label="robot:"
      variant="bordered"
      labelPlacement="outside"
      defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
      className="max-w-xs "
    /></div>
  )
}

export default QA



