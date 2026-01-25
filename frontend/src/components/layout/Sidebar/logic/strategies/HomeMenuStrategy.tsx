import { IMenuStrategy, MenuItem } from "../types";

import Overview_icon from "@/public/overview-svgrepo-com.svg";
import Statistics_icon from "@/public/statistics-circle-chart-graph-stats-analytics-svgrepo-com.svg";
import Reports_icon from "@/public/book-study-svgrepo-com.svg";
import About_icon from "@/public/about-svgrepo-com.svg";
import Website_icon from "@/public/website-search-engine-svgrepo-com.svg";
import { importIcon } from "@/lib/utils";

export class HomeMenuStrategy implements IMenuStrategy {
  getMenuItems(): MenuItem[] {
    return [
      {
        id: "introduction",
        label: "Introduction",
        icon: importIcon({ svgSource: Website_icon.src, size: 24 }),
        href: "#introduction",
      },
      {
        id: "overview",
        label: "Overview",
        icon: importIcon({ svgSource: Overview_icon.src, size: 24 }),
        href: "#overview",
      },
      {
        id: "statistics",
        label: "Statistics",
        icon: importIcon({ svgSource: Statistics_icon.src, size: 24 }),
        href: "#statistics",
      },
      {
        id: "reports",
        label: "Reports",
        icon: importIcon({ svgSource: Reports_icon.src, size: 24 }),
        href: "#reports",
      },
      {
        id: "about",
        label: "About",
        icon: importIcon({ svgSource: About_icon.src, size: 24 }),
        href: "#about",
      },
    ];
  }
}
