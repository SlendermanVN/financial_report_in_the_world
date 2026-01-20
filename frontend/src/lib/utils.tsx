import React from "react";

export const importIcon = ({
  svgSource,
  size,
}: {
  svgSource: string;
  size: number;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg">
      <image href={svgSource} width={size} height={size} />
    </svg>
  );
};
