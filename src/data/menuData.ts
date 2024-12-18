import { MenuItem } from '../components/ThreeLevelMenu/types/menu.types';

export const menuData: MenuItem[] = [
  {
    id: '1',
    label: '电子产品',
    children: [
      {
        id: '1-1',
        label: '手机',
        children: [
          { id: '1-1-1', label: 'iPhone' },
          { id: '1-1-2', label: '华为' },
          { id: '1-1-3', label: '小米' },
        ],
      },
      {
        id: '1-2',
        label: '电脑',
        children: [
          { id: '1-2-1', label: 'MacBook' },
          { id: '1-2-2', label: 'ThinkPad' },
          { id: '1-2-3', label: '华硕' },
        ],
      },
    ],
  },
  {
    id: '2',
    label: '服装',
    children: [
      {
        id: '2-1',
        label: '上衣',
        children: [
          { id: '2-1-1', label: 'T恤' },
          { id: '2-1-2', label: '衬衫' },
          { id: '2-1-3', label: '夹克' },
        ],
      },
      {
        id: '2-2',
        label: '裤子',
        children: [
          { id: '2-2-1', label: '牛仔裤' },
          { id: '2-2-2', label: '休闲裤' },
          { id: '2-2-3', label: '运动裤' },
        ],
      },
    ],
  },
];