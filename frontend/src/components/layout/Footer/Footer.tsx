import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.logoText}>Annual World Financial Report</h3>
          <p>
            Aggregating global financial data for better economic understanding.
          </p>
        </div>

        <div className={styles.column}>
          <h4>Data Sources</h4>
          <ul>
            <li>
              <Link href="/imf">IMF</Link>
            </li>
            <li>
              <Link href="/world-bank">World Bank</Link>
            </li>
            <li>
              <Link href="/oced">OECD</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {currentYear} Annual World Financial Report. All rights reserved.
      </div>
    </footer>
  );
}
