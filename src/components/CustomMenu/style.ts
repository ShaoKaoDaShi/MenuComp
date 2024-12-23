import styled, { css } from "styled-components";

export const CustomMenuWrapper = styled.div<{ collapsed: boolean }>`
  ul {
    list-style: none;
  }
  ul {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  width: ${({ collapsed }) => (collapsed ? "40px" : "100%")};
  * {
    display: ${({ collapsed }) => (collapsed ? "none" : "block")};
  }
  svg {
    display: inline-block;
  }
`;
const active = css`
  background: rgb(235, 241, 255);
  color: rgb(22, 100, 255);
`;
const hover = css`
  &:hover {
    background: #eee;
  }
`;
export const LiWrapper = styled.li<{ isActive: boolean }>`
  margin-bottom: 8px;
  border-radius: 4px;
  height: 30px;
  display: flex;
  align-items: center;

  ${({ isActive }) => {
    return isActive ? active : hover;
  }}
`;

export const CollapsedWrapper = styled.ul<{ collapsed: boolean }>`
  width: ${({ collapsed }) => (collapsed ? "40px" : "100%")};
  * {
    display: ${({ collapsed }) => (collapsed ? "none" : "inline-block")};
  }
  svg {
    display: inline-block;
  }
`;
