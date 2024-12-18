import { MenuItem } from './types';
import { MenuItemType } from 'rc-menu/lib/interface';

export const convertToRcMenuItem = (item: MenuItem): MenuItemType => {
  const menuItem: MenuItemType = {
    key: item.id,
    label: item.label,
  };

  if (item.children?.length) {
    menuItem.children = item.children.map(convertToRcMenuItem);
  }

  return menuItem;
};