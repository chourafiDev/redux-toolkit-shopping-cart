import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <NavBar>
      <Title>Shopping cart</Title>
      <Icon>
        <IconItem>
          <CartIcon />
        </IconItem>

        <Amount>{amount}</Amount>
      </Icon>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5rem;
  background-color: #a8dadc;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
`;
const IconItem = styled.div`
  color: #a8dadc;
  padding: 8px;
`;
const Icon = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Amount = styled.p`
  position: absolute;
  top: -8px;
  left: 2rem;
  color: #ffffff;
  background-color: #457b9d;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Navbar;
