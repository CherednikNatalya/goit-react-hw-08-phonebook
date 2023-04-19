import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 16px;
    margin-top: 16px;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: black;
    background-color: rgb(87, 160, 180);
  }
`;
