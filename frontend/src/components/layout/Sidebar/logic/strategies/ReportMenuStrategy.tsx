import { IMenuStrategy, MenuItem } from "../types";
import { importIcon } from "@/lib/utils";

import API_icon from "@/public/api-svgrepo-com.svg";
import Analytics_icon from "@/public/analytics-svgrepo-com.svg";
import Reports_icon from "@/public/book-study-svgrepo-com.svg";

export class ReportMenuStrategy implements IMenuStrategy {
  getMenuItems(): MenuItem[] {
    return [
      {
        id: "source_api",
        label: "Nguồn API",
        icon: importIcon({ svgSource: API_icon.src, size: 24 }),
        href: "#source_api",
      },
      {
        id: "analytics",
        label: "Phân tích",
        icon: importIcon({ svgSource: Analytics_icon.src, size: 24 }),
        href: "#analytics",
      },
      {
        id: "reports",
        label: "Báo cáo",
        icon: importIcon({ svgSource: Reports_icon.src, size: 24 }),
        href: "#reports",
      },
    ];
  }
}
