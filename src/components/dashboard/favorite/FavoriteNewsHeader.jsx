import React from "react";

const FavoriteHeaderNews = () => {
  const header = ["نویسنده", "زمان انتشار", "دسته بندی", "عنوان "];
  return (
    <div>
      <ul
        className="grid grid-cols-6 border-b-2 border-darkgreen/80 dark:border-green
           font-semibold text-[12px] text-darkgreen dark:text-white justify-items-center pb-2
           "
      >
        <li className="col-1"></li>
        {header.map((title, index) => (
          <li key={index} className="col-1">
            {title}
          </li>
        ))}
        <li className="col-1"></li>
      </ul>
    </div>
  );
};

export default FavoriteHeaderNews;
