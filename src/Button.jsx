import React from "react";

export default function Button(props) {
  return (
    <div className=" ">
      <button
        className={` justify-items-center rounded-4xl w-3xs ${props.color} ${props.hover}`}
      >
        Button
      </button>
    </div>
  );
}
