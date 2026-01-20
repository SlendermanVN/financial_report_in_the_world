import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";
import Logo from "@/public/Logo/Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
        <h1>Annualy Financial Report</h1>
      </div>
      <NavLink
        listOfLinks={[
          { name: "Home", path: "/" },
          { name: "World Bank", path: "/world-bank" },
          { name: "IMF", path: "/imf" },
          { name: "OCED", path: "/oced" },
        ]}
      />
    </header>
  );
}

const NavLink = ({
  listOfLinks,
}: {
  listOfLinks: { name: string; path: string }[];
}) => {
  return (
    <nav className={styles.navLinks}>
      <ul>
        {listOfLinks.map((route) => (
          <li key={route.path}>
            <Link className={styles.link} href={route.path}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
