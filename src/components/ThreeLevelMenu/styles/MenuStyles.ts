import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 300px;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
`;

export const MenuList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

interface MenuButtonProps {
  $level: 1 | 2 | 3;
  $isSelected: boolean;
}

export const StyledMenuButton = styled.button<MenuButtonProps>`
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding-left: ${({ $level, theme }) => `${$level * parseInt(theme.spacing.xl)}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ $isSelected, theme }) => 
    $isSelected ? theme.colors.primary : theme.colors.text.primary};
  background-color: ${({ $isSelected, theme }) => 
    $isSelected ? theme.colors.primaryLight : 'transparent'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }

  span.icon {
    padding-right: ${({ theme }) => theme.spacing.md};
  }
`;

export const MenuItemLabel = styled.span`
  flex: 1;
`;