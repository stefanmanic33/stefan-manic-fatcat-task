import React from "react";

interface HeroProps {
  title: string;
  image?: string;
}

export const Hero = ({ title, image }: HeroProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={"w-4/12"}>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div>
        <img src={image} width="100%" height="300px" />
      </div>
    </div>
  );
};
