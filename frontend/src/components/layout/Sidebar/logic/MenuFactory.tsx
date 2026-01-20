import { IMenuStrategy } from "./types";
import { HomeMenuStrategy } from "./strategies/HomeMenuStrategy";
import { ReportMenuStrategy } from "./strategies/ReportMenuStrategy";
import Home from "@/app/page";

class DefaultMenuStrategy implements IMenuStrategy {
  getMenuItems() {
    return [];
  }
}

export class MenuFactory {
  static getMenuStrategy(pathName: string): IMenuStrategy {
    if (pathName === "/") {
      return new HomeMenuStrategy();
    }

    const reportPaths = ["/world-bank", "/imf", "/oced"];
    if (reportPaths.some((path) => pathName.startsWith(path))) {
      return new ReportMenuStrategy();
    }

    return new DefaultMenuStrategy();
  }
}
