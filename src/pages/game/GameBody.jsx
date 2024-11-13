import React from 'react'
import WinButton from '../../components/gameComponents/WinButton'
import { Button } from '@nextui-org/react'

const GameBody = ({
    index ,question,score ,handleNext ,button ,checkAnswer ,
    answer1 , answer2 , answer3 , answer4
}) => {
    
  return (
    <div>
        <h3 className='text-[30px] font-bold border-b-2 border-darkgreen pb-2'>queiz App</h3>
        <div className='my-3 py-3'>

            <div className='flex relative'>
                <h2 className='text-[20px] font-semibold pb-2 mb-4'>{index+1}: {question.question}</h2>
                <p className='absolute right-0'>  امتیاز شما : {score} از 4 </p>
            </div>

            <ul className='grid mx-auto gap-2'>                    
                               
                <li ref={answer1} onClick={(e)=>checkAnswer(e , question.answer[0])} className="pl-2 border border-darkgreen h-8 py-1 text-left rounded-md w-full">
                    {question.answer[0]}
                </li>
                                
                <li ref={answer2} onClick={(e)=>checkAnswer(e ,question.answer[1])} className="pl-2 border border-darkgreen h-8 py-1 text-left rounded-md w-full">
                    {question.answer[1]}                    
                </li>                                        
                                
                <li ref={answer3} onClick={(e)=>checkAnswer(e ,question.answer[2])} className="pl-2 border border-darkgreen h-8 py-1 text-left rounded-md w-full">
                    {question.answer[2]}
                </li>
                                
                <li ref={answer4} onClick={(e)=>checkAnswer(e , question.answer[3])} className="pl-2 border border-darkgreen h-8 py-1 text-left rounded-md w-full">
                    {question.answer[3]}
                </li>                          
            </ul> 

                        {
                            button === true? <WinButton handleNext={handleNext}/>  :
                            <Button onClick={()=>handleNext()} 
                            className="relative mt-5 mx-auto flex overflow-visible rounded-full px-12 shadow-xl bg-primary/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                            >
                                بعدی
                            </Button>
                        }


        </div>
    </div>
  )
}

export default GameBody