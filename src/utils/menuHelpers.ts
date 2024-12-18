import { MenuItem } from '../components/ThreeLevelMenu/types/menu.types';

export const findMenuItemLabel = (
  items: MenuItem[],
  level1Id?: string,
  level2Id?: string,
  level3Id?: string
): string => {
  if (!level1Id) return '未选择';
  
  const level1Item = items.find(item => item.id === level1Id);
  if (!level2Id || !level1Item) return level1Item?.label || '未选择';
  
  const level2Item = level1Item.children?.find(item => item.id === level2Id);
  if (!level3Id || !level2Item) return level2Item?.label || '未选择';
  
  const level3Item = level2Item.children?.find(item => item.id === level3Id);
  return level3Item?.label || '未选择';
};