import React from 'react';
import { MenuItem } from './types';
import { cn } from '../../utils/classNames';

interface MenuLevelProps {
  items: MenuItem[];
  selectedId?: string;
  onSelect: (id: string) => void;
  className?: string;
}

export const MenuLevel: React.FC<MenuLevelProps> = ({
  items,
  selectedId,
  onSelect,
  className,
}) => {
  return (
    <ul className={cn(
      "min-w-[200px] bg-white rounded-lg shadow-md p-2",
      className
    )}>
      {items.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => onSelect(item.id)}
            className={cn(
              "w-full text-left px-4 py-2 rounded-md transition-colors",
              "hover:bg-gray-100",
              selectedId === item.id ? "bg-blue-50 text-blue-600" : "text-gray-700"
            )}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};