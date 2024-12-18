export interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

export interface MenuProps {
  items: MenuItem[];
  selectedLevel1?: string;
  selectedLevel2?: string;
  selectedLevel3?: string;
  onSelectLevel1?: (id: string) => void;
  onSelectLevel2?: (id: string) => void;
  onSelectLevel3?: (id: string) => void;
}