import React from 'react'
import WinButton from '../../components/gameComponents/WinButton'
import { Button } from '@nextui-org/react'

const GameBody = ({
    index ,question,score ,handleNext ,button ,checkAnswer ,
    answer1 , answer2 , answer3 , answer4
}) => {
    
  return (
    <div>
        <h3 className='text-[25px]  text-center text-green font-semibold border-b-2 border-darkgreen pb-2'> تست کپچا </h3>
        <div className='my-2 py-2 dark:text-black '>

            <div className=' relative mb-4'>
                <h2 className='text-[15px]  font-Yekan font-semibold pb-2 '>{index+1}: {question.question}</h2>
            </div>

            <ul className='grid mx-auto gap-1'>                    
                               
                <li ref={answer1} onClick={(e)=>checkAnswer(e , question.answer[0])} className="pl-2 font-Yekan border border-darkgreen  h-8 py-1 text-left rounded-md w-full">
                    {question.answer[0]}
                </li>
                                
                <li ref={answer2} onClick={(e)=>checkAnswer(e ,question.answer[1])} className="pl-2 font-Yekan border border-darkgreen h-8 py-1 text-left rounded-md w-full">
                    {question.answer[1]}                    
                </li>                                        
                                
                <li ref={answer3} onClick={(e)=>checkAnswer(e ,question.answer[2])} className="pl-2 font-Yekan border border-darkgreen h-8 py-1 text-left rounded-md w-full">
                    {question.answer[2]}
                </li>
                                
                <li ref={answer4} onClick={(e)=>checkAnswer(e , question.answer[3])} className="pl-2 font-Yekan border border-darkgreen h-8 py-1 text-left rounded-md w-full">
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
                <p className=' font-Yekan text-xs text-center mt-4'>  امتیاز شما : {score} از 2 </p>


        </div>
    </div>
  )
}

export default GameBody