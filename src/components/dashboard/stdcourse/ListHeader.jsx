import React from "react";

const ListHeader = () => {
  const header = [
    "وضعیت پرداخت",
    "قیمت (تومان)",
    "تاریخ شروع",
    "مدرس دوره",
    "نام دوره",
  ];
  return (
    <div>
      <ul
        className="grid grid-cols-7 border-b-2 border-darkgreen/80 dark:border-green
           font-semibold text-[12px] text-darkgreen dark:text-white justify-items-center pb-2
      "
      >
        <li className="col-1 "></li>
        {header.map((title, index) => (
          <li key={index} className="col-1">
            {title}
          </li>
        ))}
        <li className="col-1 "></li>
      </ul>
    </div>
  );
};

export default ListHeader;
