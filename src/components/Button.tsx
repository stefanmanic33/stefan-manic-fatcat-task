import clsx from "clsx";
import React from "react";

interface ButtonProps {
  children?: string;
  onClick?: () => void;
  //   className: React.CSSProperties | Array<React.CSSProperties>;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-lg",
        "px-4",
        "py-2",
        "bg-black",
        "text-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
