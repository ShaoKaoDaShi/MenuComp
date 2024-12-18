import React from 'react';
import { MenuItem } from '../types/menu.types';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { StyledMenuButton, MenuItemLabel } from '../styles/MenuStyles';

interface MenuButtonProps {
  item: MenuItem;
  isSelected: boolean;
  onClick: () => void;
  level: 1 | 2 | 3;
  isExpanded?: boolean;
  hasChildren?: boolean;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  item,
  isSelected,
  onClick,
  level,
  isExpanded,
  hasChildren
}) => {
  return (
    <StyledMenuButton
      onClick={onClick}
      $level={level}
      $isSelected={isSelected}
    >
      <MenuItemLabel>{item.label}</MenuItemLabel>
      {hasChildren && (
        <span className="icon">
          {isExpanded ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
        </span>
      )}
    </StyledMenuButton>
  );
};