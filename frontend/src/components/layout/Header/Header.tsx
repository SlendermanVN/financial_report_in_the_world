"use client";

import Link from "next/link";

import styles from "./Header.module.scss";
import Logo from "@/public/Logo/Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
        <Link className={styles.link} href="/">
          Annual World Financial Report
        </Link>
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
