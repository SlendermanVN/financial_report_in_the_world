"use client";

import { useState } from "react";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <aside
        className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
        <button
          className={styles.toggleButton}
          onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "➡️" : "⬅️"}
        </button>
        <Dashboard />
      </aside>
    </div>
  );
}

const Dashboard = () => {
  const menuItems = [
    { id: "API_list", label: "Danh sách API", icon: "🔗" },
    { id: "analytics", label: "Phân tích", icon: "📈" },
    { id: "reports", label: "Báo cáo", icon: "📄" },
    { id: "settings", label: "Cài đặt", icon: "⚙️" },
  ];

  return (
    <ul className={styles.navLinks}>
      {menuItems.map((item) => (
        <li key={item.id} className={styles.navItem}>
          <a href={`#$dashboard-${item.id}`}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
