import React from "react";

interface InputBoxProps {
  type: string;
  name: string;
  value: string;
  handleChange: (value: string) => void;
  placeholder: string;
}

const InputBox = (props: InputBoxProps) => {
  return (
    <div className="w-full h-full relative">
      <input
        type={props.type}
        className="w-full h-full p-2 border-2 border-slate-800 rounded-lg"
        name={props.name}
        value={props.value}
        onChange={(e) => props.handleChange(e.currentTarget.value)}
        placeholder={props.placeholder}
      ></input>
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => props.handleChange("")}
      >
        <svg
          className="h-8 w-8 text-slate-800"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <line x1="18" y1="6" x2="6" y2="18" />{" "}
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </div>
  );
};

export default InputBox;
