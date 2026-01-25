"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";

import { importIcon } from "@/lib/utils";
import { MenuFactory } from "./logic/MenuFactory";

import styles from "./Sidebar.module.scss";

import Settings_icon from "@/public/settings-svgrepo-com.svg";
import Window_icon from "@/public/window.svg";

export default function Sidebar() {
  const pathName = usePathname();
  const [activeId, setActiveId] = useState<string>("");

  const menuItems = useMemo(() => {
    const strategy = MenuFactory.getMenuStrategy(pathName);
    return strategy.getMenuItems();
  }, [pathName]);

  // === SCROLL SPY EFFECT ===
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerOption = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Kích hoạt khi element vào vùng giữa màn hình
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newId = entry.target.id;
          setActiveId(newId);
          // Cập nhật URL hash mà không reload trang
          window.history.replaceState(null, "", `#${newId}`);
        }
      });
    }, observerOption);

    menuItems.forEach((item) => {
      // Chỉ observe các link là anchor (có dấu #)
      if (item.href?.startsWith("#")) {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [menuItems]);

  const settingsIcon = importIcon({
    svgSource: Settings_icon.src,
    size: 24,
  });

  const windowIcon = importIcon({
    svgSource: Window_icon.src,
    size: 24,
  });

  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        <div className={styles.menuItem}>
          {windowIcon}
          <span>Dashboard</span>
        </div>

        {menuItems.map((item) => {
          const isActive =
            activeId ===
            (item.href?.startsWith("#") ? item.href.substring(1) : "");

          return (
            <Link key={item.href} href={item.href || "#"}>
              <div
                className={`${styles.menuItem} ${isActive ? styles.active : ""}`}>
                {item.icon}
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className={styles.bottomSection}>
        <Link href={"/settings"}>
          <div className={styles.menuItem}>
            {settingsIcon}
            <span>Settings</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
