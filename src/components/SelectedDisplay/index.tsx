import React from 'react';
import { MenuItem } from '../ThreeLevelMenu/types/menu.types';
import { findMenuItemLabel } from '../../utils/menuHelpers';
import {
  DisplayContainer,
  DisplayTitle,
  SelectionText
} from './styles';

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
    <DisplayContainer>
      <DisplayTitle>当前选择：</DisplayTitle>
      <SelectionText>一级：{findMenuItemLabel(items, level1)}</SelectionText>
      <SelectionText>二级：{findMenuItemLabel(items, level1, level2)}</SelectionText>
      <SelectionText>三级：{findMenuItemLabel(items, level1, level2, level3)}</SelectionText>
    </DisplayContainer>
  );
};