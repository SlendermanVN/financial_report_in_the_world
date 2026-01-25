import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="introduction" className={styles.hero}>
      <div className={styles.content}>
        <h1>Annual World Financial Report</h1>
        <p>
          Access comprehensive public financial reports and data from
          prestigious international organizations worldwide. Gain insights into
          the global economy.
        </p>
        <div className={styles.actions}>
          <Link href="#overview" className={styles.ctaButton}>
            Explore Reports
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
