import { create } from "domain";
import React from "react";

const createStarPoints = ({
  centerX,
  centerY,
  innerRadius,
  outerRadius,
}: {
  centerX: number;
  centerY: number;
  innerRadius: number;
  outerRadius: number;
}) => {
  const results = [];
  const points = 5;

  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (Math.PI / points) * i - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    results.push(`${x},${y}`);
  }
  return results.join(" ");
};

export default createStarPoints;
