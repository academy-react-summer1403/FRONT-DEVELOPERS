import { Button } from "@nextui-org/react";
import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { ImageErrore } from "../../ImageErrore";
// import jsQR from "jsqr";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

const Camera = ({setPreview , base64ToFile}) => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    setPreview(base64ToFile(imageSrc))
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <div className="w-[600px] h-[400px] grid grid-cols-2  pb-10 justify-items-center bg-white rounded-xl" >
      <div className="text-center h-60 grid grid-col-1 text-md font-semibold text-darkgreen pl-12 mt-8 ">
        <p>دوربین </p>
        <Webcam
          ref={webcamRef}
       
          screenshotFormat="image/jpeg"
          
          onUserMedia={onUserMedia}
          className="w-60 h-58  rounded-xl "
        />
      </div>
      <div className="  h-60 pr-14 mt-8 grid grid-col-1 text-center text-md font-semibold text-darkgreen ">
          عکس نهایی
        {url ? (
        
            <img src={url} alt="Screenshot " className="mr-8 rounded-xl" />
         ) : <div className="border-dashed border-2 rounded-md border-gray-400 w-60 h-[178px] "> </div>}
      </div>
      <div className=" w-full absolute bottom-20 left-0 flex mx-auto items-center justify-center">
      <Button onClick={capturePhoto} className="  rounded-xl border-2 border-primary  hover:bg-primary hover:text-white">ثبت عکس</Button>
      <Button onClick={() => setUrl(null)} className=" rounded-xl border-2 border-secondary mx-2 hover:bg-secondary hover:text-white">پاک کردن</Button>
      </div>
    </div>
  );
};

export default Camera;
