import React from 'react';
import { MenuProps } from './types/menu.types';
import { MenuLevel } from './components/MenuLevel';
import { useMenuLogic } from './hooks/useMenuLogic';
import { MenuContainer } from './styles/MenuStyles';

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
    isExpanded
  } = useMenuLogic({
    items,
    selectedLevel1,
    selectedLevel2,
    onSelectLevel1,
    onSelectLevel2,
    onSelectLevel3,
  });

  return (
    <MenuContainer>
      <MenuLevel
        items={items}
        selectedId={selectedLevel1}
        onSelect={handleLevel1Select}
        level={1}
      />
      
      {level2Items && (
        <MenuLevel
          items={level2Items}
          selectedId={selectedLevel2}
          onSelect={handleLevel2Select}
          level={2}
          parentExpanded={isExpanded(selectedLevel1 || '')}
        />
      )}
      
      {level3Items && (
        <MenuLevel
          items={level3Items}
          selectedId={selectedLevel3}
          onSelect={handleLevel3Select}
          level={3}
          parentExpanded={isExpanded(selectedLevel2 || '')}
        />
      )}
    </MenuContainer>
  );
};