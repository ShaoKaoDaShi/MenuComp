import styled from "styled-components";
import RcMenu from "rc-menu";

export const StyledMenu = styled(RcMenu)`
  list-style: none;
  .rc-menu-submenu-title {
    list-style: none;
    padding: 4px;
    border-radius: 4px;
  }
  .rc-menu-sub {
    list-style: none;
  }
  .rc-menu-item {
    &:hover {
      background-color: #eee;
    }
  }
`;
