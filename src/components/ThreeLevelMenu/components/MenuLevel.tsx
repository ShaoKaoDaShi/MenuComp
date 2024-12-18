import React from 'react';
import { MenuLevelProps } from '../types/menu.types';
import { MenuButton } from './MenuButton';
import { MenuList } from '../styles/MenuStyles';

export const MenuLevel: React.FC<MenuLevelProps> = ({
  items,
  selectedId,
  onSelect,
  level,
  parentExpanded = true
}) => {
  if (!parentExpanded) return null;

  return (
    <MenuList>
      {items.map((item) => (
        <li key={item.id}>
          <MenuButton
            item={item}
            isSelected={selectedId === item.id}
            onClick={() => onSelect(item.id)}
            level={level}
            hasChildren={!!item.children?.length}
          />
        </li>
      ))}
    </MenuList>
  );
};