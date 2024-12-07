import React, {  useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import HomeOfAssistant from "../../components/3DAssistant/HomeOfAssistant";
import { NavLink, useNavigate } from "react-router-dom";
import GameBody from "./GameBody";
import Back from "../../assets/landing/authBack.png";


const Game = () => {

  const navigate=useNavigate()
  const questionList = [
    {
      id: 1,
      question: "2+2 ? ",
      answer: ["1", "2", "4", "0"],
      isCorrect: "4",
    },
    {
      id: 2,
      question: "limt 1/X ? which X-> infinit",
      answer: ["1", "x", "infinit", "0"],
      isCorrect: "0",
    },
    {
      id: 3,
      question: " 4*2? ",
      answer: ["8", "6", "16", "4"],
      isCorrect: "8",
    },
    {
      id: 4,
      question: "تعداد رنگ های رنگین کمان چند است؟",
      answer: ["8", "6", "7", "4"],
      isCorrect: "7",
    },
    {
      id: 5,
      question: "کاربرد ctrl+c چیست؟",
      answer: ["کپی(copy)", "بریدن(cut)", "الصاق(Paste)", "انتخاب(select)"],
      isCorrect: "کپی(copy)",
    },
    {
      id: 6,
      question: "کاربرد ctrl+v چیست؟",
      answer: ["کپی(copy)", "بریدن(cut)", "الصاق(Paste)", "انتخاب(select)"],
      isCorrect: "الصاق(Paste)",
    },
  ];

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(questionList[index]);
  let [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [button, setButton] = useState(false);
  const [lose, setLose] = useState(false);

  const answer1 = useRef(null);
  const answer2 = useRef(null);
  const answer3 = useRef(null);
  const answer4 = useRef(null);
  const answerArrey = [answer1, answer2, answer3, answer4];

  const handleNext = () => {
    if (lock === true) {
      if (index === questionList.length - 2) {
        setIndex(0);
        setScore(0);
        setLose(true);
        setQuestion(questionList[index + 1]);
        setLock(false);
        answerArrey.map((i) => {
          i.current.classList.remove("Correct", "wrong");
          return null;
        });
      } else {
        setIndex(++index);
        setQuestion(questionList[index + 1]);
        setLock(false);
        answerArrey.map((i) => {
          i.current.classList.remove("Correct", "wrong");
          return null;
        });
      }
    }
  };
  const checkAnswer = (e, a) => {
    if (lock === false) {
      if (question.isCorrect === a) {
        e.target.classList.add("Correct");
        setLock(true);
        setScore(score + 1);
        setButton(true);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        setButton(false);
      }
    }
  };

  return (
    <div className="container py-2">

      <div
        className="rounded-[25px] py-12 px-4 mx-auto w-[60%] max-lg:w-[80%] z-[999]
            bg-gradient-to-br from-secondary/20 dark:from-amber-100/80 from-10% to-primary/30 dark:to-cyan-100/80 to-90%
        "
      >
        <div className="w-1/2 bg-white opacity-100 p-4 rounded-[15px] mx-auto">
          {score !== 2 ? (
            <GameBody
              answerArrey={answerArrey}
              checkAnswer={checkAnswer}
              button={button}
              index={index}
              question={question}
              score={score}
              handleNext={handleNext}
              answer1={answer1}
              answer2={answer2}
              answer3={answer3}
              answer4={answer4}
            />
          ) : (
            navigate("/auth/v3")
          )}
        </div>
      </div>

      {/* lose modal  */}

      <div>
        <div
          className={`${
            lose == false ? "hidden" : "block"
          } fixed left-0 top-0 w-screen h-screen bg-black/70 z-[99999]
                backdrop-blur-sm transition-all duration-700`}
        >
          <div className="bg-white rounded-lg shadow-lg grid gap-3 p-8 mx-auto w-1/3 mt-40">
            <p className="dark:text-gray-950 text-[20px] text-center">
              !! شما باختید{" "}
            </p>
            <Button
              onClick={() => setLose(false)}
              className="bg-secondary p-2 rounded-md text-xs w-20 hover:scale-110
                        transition duration-500 hover:shadow-md mx-auto text-center"
            >
              {" "}
              تلاش مجدد{" "}
            </Button>
          </div>
        </div>
      </div>

      <HomeOfAssistant />
    </div>
  );
};

export default Game;
