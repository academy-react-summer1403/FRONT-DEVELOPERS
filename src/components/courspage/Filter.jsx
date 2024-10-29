import { useState } from "react";

// images:
import trash from "../../assets/courses/icons8-trash-can 1.svg";
import fillter from "../../assets/courses/Vector(1).svg";
import AccarFilter from "./AccarFilter";
import TypeFilter from "./TypeAccar";
import TypeAccar from "./TypeAccar";
import LevelAccar from "./LevelAccar";
import { useTranslation } from "react-i18next";
import TeacherAccar from "./TeacherAccar";

const Filter = () => {

 const { t } = useTranslation();

  const [filter, setFilter] = useState([
    {
      id: 1,
      name: `${t("technology")}`,

      isOpen: true,
    },
  ]);

  const [type, setType] = useState([
    {
      id: 1,
      name: `${t("status")}`,
      isOpen: true,
    },
  ]);


  const [level, setLevel] = useState([
    {
      id: 1,
      name:`${t("level")}`,
      isOpen: true,
    },
  ]);

  const [teacher, setTeacher] = useState([
    {
      id: 1,
      name:`${t("teacher")}`,
      isOpen: true,
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

  const toggleAccordeionTeacher = (accordionkey) => {
    const updateAccordions = teacher.map((accrdion) => {
      if (accrdion.id === accordionkey) {
        return { ...accrdion, isOpen: !accrdion.isOpen };
      } else {
        return { ...accrdion };
      }
    });

    setTeacher(updateAccordions);
  };

  return (
    <div className="shadow-sm shadow-gray-300 bg-white dark:bg-slate-500 outline-none rounded-xl p-4 ">
      <div
        className="flex p-3 relative 
            rounded-sm rounded-t-lg shadow-sm shadow-gray-400 
            text-gray-900 bg-neutral-200 dark:bg-gray-700/70 dark:text-white"
      >
        <img src={trash} className="h-6 w-6 mr-8 flex-none " />
        <p className="absolute right-10 ">{t("filters")}</p>
        <img src={fillter} className="absolute right-2 top-4" />
      </div>

      <ul
        className="relative rounded-b-md 
            max-md:grid max-md:grid-cols-3 
            max-sm:grid-cols-1 max-sm:justify-items-center max-sm:rounded-b-md"
      >
        <AccarFilter filter={filter} toggleAccordeion={toggleAccordeion} />

        <TypeAccar filter={type} toggleAccordeion={toggleAccordeionType} />

        <LevelAccar filter={level} toggleAccordeion={toggleAccordeionLevel} />

        <TeacherAccar teacher={teacher} toggleAccordeion={toggleAccordeionTeacher} />

      
        

      </ul>
    </div>
  );
};

export default Filter;
