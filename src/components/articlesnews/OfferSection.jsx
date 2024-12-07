import React from "react";
import Offers from "./Offers";
import Favorite from "./Favorit";
import Podcasts from "./Podcasts";

const OfferSection = () => {
  return (
    <div className="relative col-span-1 pt-[47px] max-lg:px-10">
      <Offers />
      <Podcasts />
      <Favorite />
    </div>
  );
};

export default OfferSection;
