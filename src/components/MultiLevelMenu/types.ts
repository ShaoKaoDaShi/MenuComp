export interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

export interface MenuProps {
  items: MenuItem[];
  onSelect?: (info: { key: string; keyPath: string[] }) => void;
}