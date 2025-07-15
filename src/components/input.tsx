import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

const Input: React.FC<InputHTMLAttributes<{ append?: React.ReactNode | Element } & HTMLInputElement>> = (props) => {
  const { type = "text", append, placeholder, className } = props;
  return (
    <div className={cn(["input-wrap", className])}>
      <input
        type={type}
        placeholder={placeholder}
      />
      {append}
    </div>
  );
};

export default Input;
