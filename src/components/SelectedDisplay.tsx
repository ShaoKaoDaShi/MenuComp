import React from 'react';
import { MenuItem } from '../components/ThreeLevelMenu/types/menu.types';
import { findMenuItemLabel } from '../utils/menuHelpers';

interface SelectedDisplayProps {
  items: MenuItem[];
  level1?: string;
  level2?: string;
  level3?: string;
}

export const SelectedDisplay: React.FC<SelectedDisplayProps> = ({
  items,
  level1,
  level2,
  level3,
}) => {
  return (
    <div className="mt-8 p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">当前选择：</h2>
      <p>一级：{findMenuItemLabel(items, level1)}</p>
      <p>二级：{findMenuItemLabel(items, level1, level2)}</p>
      <p>三级：{findMenuItemLabel(items, level1, level2, level3)}</p>
    </div>
  );
};