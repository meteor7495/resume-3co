import React from "react";

const ComingSoon = ({ visible, className }) => {
  return (
    visible && (
      <div
        className={`backdrop-blur-[6px] bg-[rgba(255,_255,_255,_0.1)] absolute w-full h-full left-0 top-0 flex flex-col justify-center z-10 rounded-[10px] ${className}`}
      >
        <div className={`text-center text-[20px]`}>Coming Soon...</div>
      </div>
    )
  );
};

export default ComingSoon;
