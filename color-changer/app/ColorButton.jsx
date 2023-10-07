"use client";

import { useContext } from "react";
import { ButtonListenerContext } from "./AppContext";
const ColorButton = () => {
  const { triggered, setTriggered } = useContext(ButtonListenerContext);

  const handleClick = () => {
    setTriggered(!triggered);
  };

  return (
    <div
      onClick={() => handleClick()}
      className=" fixed  right-[10px] bg-green-200 rounded-full h-[50px] w-[50px] cursor-pointer "
    >
      Button
    </div>
  );
};

export default ColorButton;
