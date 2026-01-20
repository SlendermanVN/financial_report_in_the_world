export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

export interface IMenuStrategy {
  getMenuItems: () => MenuItem[];
}
