"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useState } from "react";
import Link from "next/link";

import styles from "./Sidebar.module.scss";
import { MenuFactory } from "./logic/MenuFactory";

export default function Sidebar() {
  const pathName = usePathname();

  const menuItems = useMemo(() => {
    const strategy = MenuFactory.getMenuStrategy(pathName);
    return strategy.getMenuItems();
  }, [pathName]);

  return (
    <div className={styles.sidebar}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href || "#"}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
