import React from "react";
import image from "../../public/image-qr-code.png";


export default function Qr() {
  return (
    <div className="grid h-screen place-content-center bg-blue-100 ">
      <div className="font-outfit shadow-lg shadow-slate-300 leading-tight max-w-[325px] flex flex-col flex-initial bg-white border-solid m-4 border-2 p-4 rounded-3xl">
        <img src={image.src} alt="" className="rounded-xl object-contain w-[290px] h-[290px] cursor-default" />
        <div className="text-center my-6">
          <h3 className="text-[22px] font-bold px-4">
            Improve your front-end skills by building projects{" "}
          </h3>
          <p className="mt-4 px-4 text-grayish-blue text-base font-normal">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
