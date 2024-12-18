import { useMemo, useState } from 'react';
import { MenuItem, MenuItemState } from '../types/menu.types';

interface UseMenuLogicProps {
  items: MenuItem[];
  selectedLevel1?: string;
  selectedLevel2?: string;
  onSelectLevel1?: (id: string) => void;
  onSelectLevel2?: (id: string) => void;
  onSelectLevel3?: (id: string) => void;
}

export const useMenuLogic = ({
  items,
  selectedLevel1,
  selectedLevel2,
  onSelectLevel1,
  onSelectLevel2,
  onSelectLevel3,
}: UseMenuLogicProps) => {
  const [expandedItems, setExpandedItems] = useState<MenuItemState>({});

  const level2Items = useMemo(() => {
    if (!selectedLevel1) return null;
    const selectedItem = items.find(item => item.id === selectedLevel1);
    return selectedItem?.children || null;
  }, [items, selectedLevel1]);

  const level3Items = useMemo(() => {
    if (!selectedLevel2 || !level2Items) return null;
    const selectedItem = level2Items.find(item => item.id === selectedLevel2);
    return selectedItem?.children || null;
  }, [level2Items, selectedLevel2]);

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isExpanded = (id: string) => !!expandedItems[id];

  const handleLevel1Select = (id: string) => {
    if (selectedLevel1 === id) {
      toggleExpanded(id);
    } else {
      onSelectLevel1?.(id);
      onSelectLevel2?.(undefined);
      onSelectLevel3?.(undefined);
      setExpandedItems(prev => ({
        ...prev,
        [id]: true
      }));
    }
  };

  const handleLevel2Select = (id: string) => {
    if (selectedLevel2 === id) {
      toggleExpanded(id);
    } else {
      onSelectLevel2?.(id);
      onSelectLevel3?.(undefined);
      setExpandedItems(prev => ({
        ...prev,
        [id]: true
      }));
    }
  };

  const handleLevel3Select = (id: string) => {
    onSelectLevel3?.(id);
  };

  return {
    level2Items,
    level3Items,
    handleLevel1Select,
    handleLevel2Select,
    handleLevel3Select,
    isExpanded,
    toggleExpanded
  };
};