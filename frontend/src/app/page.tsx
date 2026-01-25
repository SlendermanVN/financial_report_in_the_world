import styles from "./page.module.scss";

import Hero from "./_components/Hero/Hero";
import Overview from "./_components/Overview/Overview";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Overview />
    </main>
  );
}
