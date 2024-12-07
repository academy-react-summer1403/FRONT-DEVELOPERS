import React from "react";

const DateApi = ({ dateapi }) => {
  const date = new Date(dateapi);
  const formattedDate = date.toLocaleDateString("fa-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  return <p>{formattedDate}</p>;
};

export default DateApi;
