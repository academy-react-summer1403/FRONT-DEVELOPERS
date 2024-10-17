import { useState } from "react";

// images:
import trash from "../../assets/courses/icons8-trash-can 1.svg";
import fillter from "../../assets/courses/Vector(1).svg";
import AccarFilter from "./AccarFilter";
import TypeFilter from "./TypeAccar";
import TypeAccar from "./TypeAccar";
import LevelAccar from "./LevelAccar";

const Filter = () => {
  const [filter, setFilter] = useState([
    {
      id: 1,
      name: "تکنولوژی",

      isOpen: false,
    },
  ]);

  const [type, setType] = useState([
    {
      id: 1,
      name: "وضعیت",
      isOpen: false,
    },
  ]);


  const [level, setLevel] = useState([
    {
      id: 1,
      name: "سطح",
      isOpen: false,
    },
  ]);

  const toggleAccordeion = (accordionkey) => {
    const updateAccordions = filter.map((accrdion) => {
      if (accrdion.id === accordionkey) {
        return { ...accrdion, isOpen: !accrdion.isOpen };
      } else {
        return { ...accrdion };
      }
    });

    setFilter(updateAccordions);
  };

  const toggleAccordeionType = (accordionkey) => {
    const updateAccordions = type.map((accrdion) => {
      if (accrdion.id === accordionkey) {
        return { ...accrdion, isOpen: !accrdion.isOpen };
      } else {
        return { ...accrdion };
      }
    });

    setType(updateAccordions);
  };

  const toggleAccordeionLevel = (accordionkey) => {
    const updateAccordions = level.map((accrdion) => {
      if (accrdion.id === accordionkey) {
        return { ...accrdion, isOpen: !accrdion.isOpen };
      } else {
        return { ...accrdion };
      }
    });

    setLevel(updateAccordions);
  };

  return (
    <div className="shadow-sm shadow-gray-300 outline-none rounded-xl p-4 ">
      <div
        className="flex p-3 relative 
            rounded-sm rounded-t-lg shadow-sm shadow-gray-400 
            text-gray-900 bg-neutral-200 dark:bg-gray-700/70 dark:text-white"
      >
        <img src={trash} className="h-6 w-6 mr-8 flex-none " />
        <p className="absolute right-10 ">فیلتر ها</p>
        <img src={fillter} className="absolute right-2 top-4" />
      </div>

      <ul
        className="relative bg-white dark:bg-slate-500 rounded-md
            max-md:flex  
            max-sm:grid"
      >
        <AccarFilter filter={filter} toggleAccordeion={toggleAccordeion} />

        <TypeAccar filter={type} toggleAccordeion={toggleAccordeionType} />

        <LevelAccar filter={level} toggleAccordeion={toggleAccordeionLevel} />


        

        

      </ul>
    </div>
  );
};

export default Filter;
