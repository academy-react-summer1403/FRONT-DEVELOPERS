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
    <div className="w-[500px] grid grid-cols-2 pb-10" >
      <Webcam
        ref={webcamRef}
        // audio={true}
        screenshotFormat="image/jpeg"
        // videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        className="w-60 h-60 rounded-xl"
      />
      {url && (
        <div className=" mt-8 rounded-xl">
          <img src={url} alt="Screenshot" />
        </div>
      )}
      <Button onClick={capturePhoto} className="absolute bottom-0 left-[30%] rounded-xl bg-primary">ثبت عکس</Button>
      <Button onClick={() => setUrl(null)} className="absolute bottom-0 left-[48%] rounded-xl bg-secondary mx-2">پاک کردن</Button>
      
    </div>
  );
};

export default Camera;
