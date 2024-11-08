import React from 'react'
import WinButton from '../../components/gameComponents/WinButton'
import LoginModal from '../../components/mainAuth/LoginModal'



const Game = () => {
   const question =[
    {
        id:0,
        question:"2+2 ? ",
        correctAnswer:"4",
        wrongA:"0",
        wrongB:"8",
        wrongC:"2",
    },
    {
        id:1,
        question:"limt 1/X ? which X-> infinit",
        correctAnswer:"0",
        wrongA:"infinit",
        wrongB:"x",
        wrongC:"1",

    },
    {
        id:2,
        question:" 4*2? ",
        correctAnswer:"8",
        wrongA:"6",
        wrongB:"16",
        wrongC:"4",
    },
    {
        id:3,
        question:"how maney color does the rainbow have?",
        correctAnswer:"7",
        wrongA:"4",
        wrongB:"6",
        wrongC:"8",

    },
    {
        id:4,
        question:" what does ctrl+c do? ",
        correctAnswer:"copy",
        wrongA:"cut",
        wrongB:"past",
        wrongC:"select",
    },
    {
        id:5,
        question:"what does ctrl+v do??",
        correctAnswer:"past",
        wrongA:"select",
        wrongB:"cut",
        wrongC:"copy",

    },
   ]

  return (
    <div>
        
        <LoginModal/>
        <WinButton/>
    </div>
  )
}

export default Game