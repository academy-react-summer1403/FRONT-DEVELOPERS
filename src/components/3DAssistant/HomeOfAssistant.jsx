import React from "react";
import CameraRig from "./CameraRig";

const HomeOfAssistant = () => {
  return (
    <div className="fixed bottom-[-150px] z-[9999] -left-12 w-[350px] max-w-full h-[350px] transition-all ease-in ">
      <CameraRig />
    </div>
  );
};

export default HomeOfAssistant;
