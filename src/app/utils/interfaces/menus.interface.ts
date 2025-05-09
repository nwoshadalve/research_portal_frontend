export interface NavItem {
  name: string;
  route?: string;
  subMenus?: { name: string; route: string }[];
}

export interface FooterMenuItem {
  name: string;
  route?: string;
  url?: string;
  openInNewTab?: boolean;
}

export interface FooterSection {
  name: string;
  menus: FooterMenuItem[];
}