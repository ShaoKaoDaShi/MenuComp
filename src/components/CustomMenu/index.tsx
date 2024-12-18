import React from "react";
import { CustomMenuWrapper } from "./style";
interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

interface MenuProps {
  items: MenuItem[];
  openItems: string[];
  onToggle: (id: string) => void;
}

export const menuData: MenuItem[] = [
  {
    id: "1",
    label: "电子产品",
    children: [
      {
        id: "1-1",
        label: "手机",
        children: [
          { id: "1-1-1", label: "iPhone" },
          { id: "1-1-2", label: "华为" },
          { id: "1-1-3", label: "小米" },
        ],
      },
      {
        id: "1-2",
        label: "电脑",
        children: [
          { id: "1-2-1", label: "MacBook" },
          { id: "1-2-2", label: "ThinkPad" },
          { id: "1-2-3", label: "华硕" },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "服装",
    children: [
      {
        id: "2-1",
        label: "上衣",
        children: [
          { id: "2-1-1", label: "T恤" },
          { id: "2-1-2", label: "衬衫" },
          { id: "2-1-3", label: "夹克" },
        ],
      },
      {
        id: "2-2",
        label: "裤子",
        children: [
          { id: "2-2-1", label: "牛仔裤" },
          { id: "2-2-2", label: "休闲裤" },
          { id: "2-2-3", label: "运动裤" },
        ],
      },
    ],
  },
];

interface MenuProps {
  items: MenuItem[];
  openItems: string[];
  onToggle: (id: string) => void;
}

const Menu: React.FC<MenuProps> = ({ items, openItems, onToggle }) => {
  return (
    <ul>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div key={item.id}>
            <li key={item.id}>
              <span
                onClick={() => onToggle(item.id)}
                style={{ cursor: "pointer" }}
              >
                {item.label}{" "}
                {item.children &&
                  item.children.length > 0 &&
                  (isOpen ? "[-]" : "[+]")}
              </span>
            </li>
            {isOpen && item.children && (
              <Menu
                items={item.children}
                openItems={openItems}
                onToggle={onToggle}
              />
            )}
          </div>
        );
      })}
    </ul>
  );
};

const CustomMenu: React.FC = () => {
  const [openItems, setOpenItems] = React.useState<string[]>(["1"]); // 初始展开项

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h1>菜单</h1>
      <CustomMenuWrapper>
        <Menu items={menuData} openItems={openItems} onToggle={toggleItem} />
      </CustomMenuWrapper>
    </div>
  );
};

export default CustomMenu;
