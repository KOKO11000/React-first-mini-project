import React from "react";
import Button from "./Button.jsx";

export default function ProflieCard(props) {
  let color;
  if (props.prfType === "friend") {
    color = "green";
  }
  if (props.prfType === "teacher") {
    color = "blue";
  }
  if (props.prfType === "student") {
    color = "purple";
  }
  const tailwindColorObj = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
  };
  const tailwindbgColorObj = {
    blue: "bg-blue-300",
    green: "bg-green-300",
    purple: "bg-purple-300",
  };
  const borderObj = {
    blue: "border-blue-600",
    green: "border-green-600",
    purple: "border-purple-600",
  };
  const hoverObj = {
    blue: "hover:bg-blue-700",
    green: "hover:bg-green-700",
    purple: "hover:bg-purple-700",
  };
 
  return (
    <div className={`${tailwindbgColorObj[color]} justify-items-center p-5 m-3.5 rounded-4xl size-100 justify-self-center sm:py-4 shadow-md `}>
      <img
        className={`mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0 border-2 ${borderObj[color]}`}
        src={props.src}
        alt="profile-card"
      />

      <p className="p-2 font-bold">{props.name}</p>
      <p className="m-5 text-gray-600 text-center">{props.description}</p>
      <Button color={tailwindColorObj[color]} hover={hoverObj[color]} />
    </div>
  );
}
