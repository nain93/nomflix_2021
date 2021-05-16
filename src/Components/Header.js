import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleHeader = styled.div`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 150px;
  display: flex;
  align-items: center;
  padding: 0px 50px;
  font-size: 28px;
  font-weight: 600;
  width: 100%;
  background-color: rgba(20, 20, 20, 1);
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
`;

const ListStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  height: 100%;
  width: 100%;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 100%;
`;

const HeaderHome = styled(Link)`
  display: flex;
  ::before {
    content: "EXITGIFT";
    color: #ce7777;
  }
`;

const StyleLink = styled(Link)`
  color: #ce7777;
  &:hover {
    color: white;
  }
  transition: color 0.3s ease-in-out;
`;

const HeaderList = styled.div`
  display: flex;
`;

function Header() {
  return (
    <StyleHeader>
      <ListStyle>
        <Item>
          <HeaderHome to="/">
            <h1>.SHOP</h1>
          </HeaderHome>
        </Item>

        <HeaderList>
          <Item>
            <StyleLink to="/ongoing">Ongoing</StyleLink>
          </Item>
          <Item>
            <StyleLink to="/bid">Bid</StyleLink>
          </Item>
          <Item>
            <StyleLink to="/collection">Collection</StyleLink>
          </Item>
          <Item>
            <StyleLink to="/support">Support</StyleLink>
          </Item>
          <Item>
            <StyleLink to="/english">English</StyleLink>
          </Item>
        </HeaderList>
      </ListStyle>
    </StyleHeader>
  );
}

export default Header;
