import styled, { css } from "styled-components";

export const CustomMenuWrapper = styled.div`
  ul {
    list-style: none;
  }
  ul {
    margin: 0;
    padding: 0;
    cursor: pointer;
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
