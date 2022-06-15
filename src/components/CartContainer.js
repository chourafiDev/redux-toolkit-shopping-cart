import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { openModal } from "../redux/features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <Cart>
        <HeaderContainer>
          <Header>your bag</Header>
          <Empty>is currently empty</Empty>
        </HeaderContainer>
      </Cart>
    );
  }

  return (
    <Cart>
      <HeaderContainer>
        <Header>your bag</Header>
      </HeaderContainer>

      <Card>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </Card>

      <Card cardBordred>
        <Footer>
          <Button className="" onClick={() => dispatch(openModal())}>
            clear cart
          </Button>
          <Total>
            total <span>${total.toFixed(2)}</span>
          </Total>
        </Footer>
      </Card>
    </Cart>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
`;
const Empty = styled.h4`
  font-weight: bold;
  color: #f4a261;
  background-color: #f4a2616e;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 10px 30px;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #457b9d;
  background-color: #457b9d47;
  display: inline-block;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 10px 30px;
`;

const Cart = styled.section`
  min-height: calc(100vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 40px;
  padding: 2.5rem 0;
  max-width: 50rem;
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  border-top: ${(props) => (props.cardBordred ? "3px solid #1d3557" : "")};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background: #1d3557;
  color: #ffffff;
  border: 1px solid #1d3557;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    background: #1d3557;
    color: #ffffff;
    border-color: #1d3557;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Total = styled.div`
  font-weight: bold;
`;

export default CartContainer;
