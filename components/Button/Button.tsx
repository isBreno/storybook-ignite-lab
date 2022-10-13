import { HTMLAttributes } from "react";
import clsx from 'clsx'

export interface ButtonComponentsProps extends HTMLAttributes<HTMLButtonElement> {
  text: string,
  hover?: boolean,
  focus?: boolean,
}


const Button = (props: ButtonComponentsProps) => {
  return (
    <button
      {...props}
      className={clsx("text-[#000000] w-full py-4 text-center text-sm bg-sky-500 rounded-[4px] mt-2 text-black font-bold outline-none hover:bg-sky-400 focus:bg-sky-400", {
        "bg-sky-400": props.hover,  
        "bg-sky-400 border": props.focus,  
      })}
    >
      {props.text}
    </button>
  );
};

export default Button;
