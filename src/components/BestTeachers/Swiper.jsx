import React, { useState } from "react";
import AsgharImg1 from "../../assets/landing/asghari 1.png";
import AsgharImg2 from "../../assets/landing/asghari 2.png";
import AsgharImg3 from "../../assets/landing/asghari 3.png";
import AsgharImg4 from "../../assets/landing/asghari 4.png";
import { motion, useMotionValue, useTransform } from "framer-motion";


const SwipeCards = () => {

  const [cards, setCards] = useState(cardData);


  return (

    <div

      className="grid h-[500px] w-full place-items-center absolute -bottom-[50px]"

     

    >

      {cards.map((card) => {

        return (

          <Card key={card.id} cards={cards} setCards={setCards} {...card} />

        );

      })}

    </div>

  );

};


const Card = ({ id, url, setCards, cards }) => {

  const x = useMotionValue(0);


  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);


  const isFront = id === cards[cards.length - 1].id;


  const rotate = useTransform(() => {

    const offset = isFront ? 0 : id % 2 ?  4 : -4;


    return `${rotateRaw.get() + offset}deg`;

  });


  const handleDragEnd = () => {

    if (Math.abs(x.get()) > 100) {

      setCards((pv) => pv.filter((v) => v.id !== id));

    }

  };


  return (

    <motion.img
     
      src={url}

      alt="Placeholder alt"

      className="h-[364px] w-[266px] origin-bottom rounded-[20px]  object-cover hover:cursor-grab active:cursor-grabbing "

      style={{

        gridRow: 1,

        gridColumn: 1,

        x,

        opacity,

        rotate,

        transition: "0.125s transform",

        boxShadow: isFront

          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"

          : undefined,

      }}

      animate={{

        scale: isFront ? 1 : 0.98,

      }}

      drag={isFront ? "x" : false}

      dragConstraints={{

        left: 0,

        right: 0,

      }}

      onDragEnd={handleDragEnd}

    />

  );

};


export default SwipeCards;


const cardData = [
    {
        id:1,
        url:AsgharImg4,
        
    },
    {
        id:2,
        url:AsgharImg3,
        
    },
    {
        id:3,
        url:AsgharImg2,
        
    },
    {
        id:4,
        url:AsgharImg1,
        
    },
]