import React from 'react';
import { MenuProps } from './types';
import { MenuLevel } from './MenuLevel';
import { useMenuLogic } from './useMenuLogic';

export const ThreeLevelMenu: React.FC<MenuProps> = ({
  items,
  selectedLevel1,
  selectedLevel2,
  selectedLevel3,
  onSelectLevel1,
  onSelectLevel2,
  onSelectLevel3,
}) => {
  const {
    level2Items,
    level3Items,
    handleLevel1Select,
    handleLevel2Select,
    handleLevel3Select,
  } = useMenuLogic({
    items,
    selectedLevel1,
    selectedLevel2,
    onSelectLevel1,
    onSelectLevel2,
    onSelectLevel3,
  });

  return (
    <div className="flex gap-4 p-4">
      <MenuLevel
        items={items}
        selectedId={selectedLevel1}
        onSelect={handleLevel1Select}
      />
      
      {level2Items && (
        <MenuLevel
          items={level2Items}
          selectedId={selectedLevel2}
          onSelect={handleLevel2Select}
        />
      )}
      
      {level3Items && (
        <MenuLevel
          items={level3Items}
          selectedId={selectedLevel3}
          onSelect={handleLevel3Select}
        />
      )}
    </div>
  );
};