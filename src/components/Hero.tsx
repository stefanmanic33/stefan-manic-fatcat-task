import React from "react";

interface HeroProps {
  title: string;
}

export const Hero = ({ title }: HeroProps) => {
  return (
    <div>
      <h1 style={styles.text}>{title}</h1>
    </div>
  );
};

const styles = {
  text: {
    fontSize: "48px",
    marginTop: "100px",
    fontWeight: "bold",
  },
};
