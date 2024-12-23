import React, { useState } from "react";
import { CustomMenuWrapper, LiWrapper, CollapsedWrapper } from "./style";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import CSSMotion, { CSSMotionProps } from "rc-motion";
interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
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
  onToggle: (id: string, item: MenuItem) => void;
  level?: number;
  selectedKeys?: string[];
}
const collapseNode = () => {
  return { height: 0 };
};
const expandNode = (node) => {
  return { height: node.scrollHeight };
};
export const inlineMotion: CSSMotionProps = {
  motionName: "rc-menu-collapse",
  motionAppear: true,
  onAppearStart: collapseNode,
  onAppearActive: expandNode,
  onEnterStart: collapseNode,
  onEnterActive: expandNode,
  onLeaveStart: expandNode,
  onLeaveActive: collapseNode,
};
const Menu: React.FC<MenuProps> = ({
  items,
  openItems,
  onToggle,
  level = 0,
  selectedKeys,
  collapsed,
  className,
  style,
}) => {
  return (
    <CollapsedWrapper collapsed={collapsed}>
      {items?.map((item) => {
        const isOpen = openItems.includes(item.id);
        const isActive = selectedKeys?.includes(item.id);
        return (
          <div key={item.id} className={className} style={style}>
            <LiWrapper
              key={item.id}
              onClick={() => {
                onToggle(item.id, item);
              }}
              isActive={isActive!}
              style={{
                paddingLeft: `${level * 20}px`,
              }}
            >
              <span style={{ cursor: "pointer" }}>
                <SearchOutlined />
                {item.label}{" "}
                {item.children &&
                  item.children.length > 0 &&
                  (isOpen ? "[-]" : "[+]")}
              </span>
            </LiWrapper>
            <CSSMotion
              visible={isOpen && item.children}
              {...inlineMotion}
              motionName="my-motion"
            >
              {({ className, style }) => {
                return (
                  <Menu
                    className={className}
                    style={style}
                    items={item.children}
                    openItems={openItems}
                    onToggle={onToggle}
                    level={level + 1}
                    selectedKeys={selectedKeys}
                  />
                );
              }}
            </CSSMotion>
          </div>
        );
      })}
    </CollapsedWrapper>
  );
};

const CustomMenu: React.FC = (props) => {
  const { collapsed } = props;
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed);
  const [openItems, setOpenItems] = React.useState<string[]>(["1"]); // 初始展开项
  const [activeItem, setActiveItem] = React.useState<string>("1"); // 当前激活项

  const toggleItem = (id: string, item) => {
    setActiveItem(id);
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h1>菜单</h1>
      <Button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "展开" : "收起"}
      </Button>
      <CustomMenuWrapper collapsed={collapsed}>
        <Menu
          collapsed={isCollapsed}
          selectedKeys={[activeItem]}
          items={menuData}
          openItems={openItems}
          onToggle={toggleItem}
          // renderMenuItem
        />
      </CustomMenuWrapper>
    </div>
  );
};

export default CustomMenu;
