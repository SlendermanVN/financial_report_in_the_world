import styles from "./Logo.module.scss";
import Icon_report from "@/public/report-svgrepo-com.svg";

import createStarPoints from "@/public/Star/Star";

const Logo = () => {
  const logoSize = 50;

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.face}>
          <svg
            viewBox={`0 0 ${logoSize * 2} ${logoSize * 2}`}
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx={logoSize}
              cy={logoSize}
              r={logoSize - 2}
              fill="#008B8B"
              stroke="#005757"
              strokeWidth={2}
            />
            <circle
              cx={logoSize}
              cy={logoSize}
              r={logoSize - (1 / 4) * logoSize}
              fill="#16213E"
            />
            <circle
              cx={logoSize}
              cy={logoSize}
              r={logoSize - (2 / 4) * logoSize}
              fill="red"
            />
            <Star size={logoSize * 2} fill="#F9D423" stroke="#E1B12C" />
          </svg>
        </div>

        <div className={`${styles.face} ${styles.back}`}>
          <svg
            viewBox={`0 0 ${logoSize * 2} ${logoSize * 2}`}
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx={logoSize}
              cy={logoSize}
              r={logoSize - 2}
              fill="#008B8B"
              stroke="#005757"
              strokeWidth={2}
            />
            <image
              href={Icon_report.src}
              x={logoSize / 2}
              y={logoSize / 2}
              width={logoSize}
              height={logoSize}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Star = ({
  size,
  fill,
  stroke,
}: {
  size: number;
  fill: string;
  stroke: string;
}) => {
  const center = size / 2;
  const outerRadius = size * 0.45;
  const innerRadius = size * 0.2;

  const points = createStarPoints({
    centerX: center,
    centerY: center,
    innerRadius,
    outerRadius,
  });

  return (
    <polygon
      points={points}
      fill={fill}
      stroke={stroke}
      strokeWidth={size * 0.025}
      strokeLinejoin="round"
    />
  );
};

export default Logo;
