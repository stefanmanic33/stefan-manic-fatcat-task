import React from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: React.CSSProperties;
  isDisabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  className,
  isDisabled,
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: isDisabled ? "gray" : "black",
        color: "white",
        alignSelf: "center",
        height: "50px",
        width: "30%",
        borderRadius: "20px",
        ...className,
      }}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
