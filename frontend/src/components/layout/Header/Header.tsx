import Link from "next/link";
import Image from "next/image";
import globe from "@/public/globe.svg";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={globe}
        alt="Globe"
        width={100}
        height={100}
      />
      <nav>
        <ul>
          <li>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/world-bank">
              World Bank
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/imf">
              IMF
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/oced">
              OCED
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
