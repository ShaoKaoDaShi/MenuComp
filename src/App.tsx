import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MultiLevelMenu } from './components/MultiLevelMenu';
import { menuData } from './data/menuData';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import styled from 'styled-components';
import { DisplayContainer, DisplayTitle, SelectionText } from './components/SelectedDisplay/styles';

const AppContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ContentWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.primary};
`;

function App() {
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);

  const handleSelect = ({ keyPath }: { key: string; keyPath: string[] }) => {
    setSelectedKeys(keyPath.reverse());
  };

  const getLabel = (level: number) => {
    const key = selectedKeys[level];
    if (!key) return '未选择';

    let currentItems = menuData;
    let label = '未选择';

    for (let i = 0; i <= level; i++) {
      const currentKey = selectedKeys[i];
      const item = currentItems.find(item => item.id === currentKey);
      if (item) {
        if (i === level) {
          label = item.label;
        }
        currentItems = item.children || [];
      }
    }

    return label;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <ContentWrapper>
          <Title>多级菜单示例</Title>
          
          <MultiLevelMenu
            items={menuData}
            onSelect={handleSelect}
          />
          
          <DisplayContainer>
            <DisplayTitle>当前选择：</DisplayTitle>
            <SelectionText>一级：{getLabel(0)}</SelectionText>
            <SelectionText>二级：{getLabel(1)}</SelectionText>
            <SelectionText>三级：{getLabel(2)}</SelectionText>
          </DisplayContainer>
        </ContentWrapper>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;