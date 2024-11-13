import React, { useRef, useState } from 'react'
import LoginModal from '../../components/mainAuth/LoginModal'
import { Button } from '@nextui-org/react'
import HomeOfAssistant from '../../components/3DAssistant/HomeOfAssistant'
import { NavLink } from 'react-router-dom'
import GameBody from './GameBody'



const Game = () => {
   const questionList =[
    {
        id:1,
        question:"2+2 ? ",
        answer:["1","2","4","0"],
        isCorrect:"4"
    },
    {
        id:2,
        question:"limt 1/X ? which X-> infinit",
        answer:["1","x","infinit","0"],
        isCorrect:"0"
    },
    {
        id:3,
        question:" 4*2? ",
        answer:["8","6","16","4"],
        isCorrect:"8"
        
    },
    {
        id:4,
        question:"how maney color does the rainbow have?",
        answer:["8","6","7","4"],
        isCorrect:"7"
    },
    {
        id:5,
        question:" what does ctrl+c do? ",
        answer:["copy","cut","past","select"],
        isCorrect:"copy"
         
    },
    {
        id:6,
        question:"what does ctrl+v do??",
        answer:["copy","cut","past","select"],
        isCorrect:"past"
       

    },
   ]

   let [index, setIndex] = useState(0)
   let [question, setQuestion] = useState(questionList[index])
   let [lock, setLock] = useState(false)
   const [score, setScore] = useState(0)
   const [button, setButton] = useState(false)

   const answer1 =useRef(null)
   const answer2 =useRef(null)
   const answer3 =useRef(null)
   const answer4 =useRef(null)
   const answerArrey =[answer1 ,answer2 ,answer3 ,answer4]
   console.log("answerArrey" , answer1 ,answer2 ,answer3 ,answer4)

   const handleNext =()=>{
    if(lock===true){
        if(index === questionList.length-2){
            setIndex(0)
            alert("you lose try again");
            setQuestion(questionList[index +1])
            setLock(false)
            answerArrey.map((i)=>{
            i.current.classList.remove("Correct" , "wrong")
            return null
        })
        }else{
            setIndex(++index);
        setQuestion(questionList[index +1])
        setLock(false)
        answerArrey.map((i)=>{
            i.current.classList.remove("Correct" , "wrong")
            return null
        })
        }
        
    }
   }
    const checkAnswer=(e ,a)=>{
        if(lock === false){
            if( question.isCorrect === a){
                e.target.classList.add("Correct")
                setLock(true)
                setScore(score+1)
                setButton(true)
             }
            else{
                e.target.classList.add("wrong")
                setLock(true)
                setButton(false)
            }
        }        
    }   

  return (
    // <div className='container py-12'>
    //     <div  className='rounded-xl bg-secondary/30 p-4 mx-auto w-[50%] max-lg:w-[80%]'>
    //         {                   
    //                  score !== 4  ? <GameBody 
    //                     answerArrey={answerArrey} checkAnswer={checkAnswer} button={button}
    //                     index={index} question={question} score={score} handleNext={handleNext}
    //                     answer1={answer1} answer2={answer2} answer3={answer3} answer4={answer4}
    //                  /> :
                    
                    

    //                  <NavLink to={"/"} className='group '>
    //                     <Button 
    //                         className="relative mt-5 mx-auto flex overflow-visible rounded-full px-12 shadow-xl bg-primary/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
    //                         >
    //                         رفتن به صفحه اصلی
    //                     </Button>
    //                 </NavLink>                
            
    //         }        

    //     </div>
       
    // </div>


    //  <LoginModal/> 

    <div className='h-[900px]'>
    <HomeOfAssistant/>
 
    </div>
  )
}

export default Game