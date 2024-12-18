import React from "react";
import { StyledMenu } from "./styles";
import { MenuProps } from "./types";
import { convertToRcMenuItem } from "./utils";

export const MultiLevelMenu: React.FC<MenuProps> = ({ items, onSelect }) => {
  const menuItems = items.map(convertToRcMenuItem);

  return <StyledMenu mode="inline" onSelect={onSelect} items={menuItems} />;
};
