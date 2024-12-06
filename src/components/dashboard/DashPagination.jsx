import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DashPagination = ({ setCurrentPage, currentPage, totalPages }) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className="p-2 mx-1 border rounded-full hover:bg-secondary"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`px-3 py-1 mx-1 border rounded-full hover:bg-secondary ${
            currentPage === index + 1
              ? "bg-secondary text-white border-none"
              : ""
          }`}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="p-2 mx-1 border rounded-full hover:bg-secondary"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default DashPagination;
