import { IMenuStrategy, MenuItem } from "../types";

export class HomeMenuStrategy implements IMenuStrategy {
  getMenuItems(): MenuItem[] {
    return [
      { id: "overview", label: "Overview", href: "#overview" },
      { id: "statistics", label: "Statistics", href: "#statistics" },
      { id: "reports", label: "Reports", href: "#reports" },
      { id: "about", label: "About", href: "#about" },
    ];
  }
}
