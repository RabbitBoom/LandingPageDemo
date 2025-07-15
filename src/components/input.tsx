import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

export type InputPropsTypes = {
  appendNode?: React.ReactNode | Element;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputPropsTypes> = (props) => {
  const { type = "text", appendNode, placeholder, className } = props;
  return (
    <div className={cn(["input-wrap", className])}>
      <input
        type={type}
        placeholder={placeholder}
      />
      {appendNode as ReactNode}
    </div>
  );
};

export default Input;
