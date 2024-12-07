import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ nextPage, lastPage }) => {
  return (
    <div
      className="relative mx-auto flex flex-row justify-center
            
        "
    >
      <button
        onClick={lastPage}
        className="shadow-sm shadow-gray-400 outline-none indent-1 cursor-pointer transition duration-500
             m-1  pl-[6px] w-7 h-7 rounded-full text-sm hover:bg-secondary text-gray-500 dark:text-white"
      >
        <IoIosArrowBack />
      </button>
      <div className="flex flex-row"></div>
      <button
        onClick={nextPage}
        className="shadow-sm shadow-gray-400 outline-none cursor-pointer text-gray-500 dark:text-white
                indent-1 m-1 pl-[6px] w-7 h-7 rounded-full text-sm hover:bg-secondary transition duration-500"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
